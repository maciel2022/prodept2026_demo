import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { prisma } from "@/lib/prisma";
import { verifyPassword } from "@/lib/auth";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        const email = (credentials.email as string)?.trim().toLowerCase();
        const password = credentials.password as string;

        if (!email || !password) return null;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.password) return null;

        const valid = await verifyPassword(password, user.password);
        if (!valid) return null;

        return { id: user.id, name: user.name, email: user.email, image: user.image };
      },
    }),
  ],
  events: {
    async createUser({ user }) {
      // Auto-join all global leagues when a new user is created
      if (!user.id) return;
      const globalLeagues = await prisma.league.findMany({
        where: { isGlobal: true },
        select: { id: true },
      });
      for (const league of globalLeagues) {
        await prisma.leagueMember.upsert({
          where: { leagueId_userId: { leagueId: league.id, userId: user.id } },
          update: {},
          create: { leagueId: league.id, userId: user.id },
        });
      }
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // Domain restriction for Google OAuth (if ALLOWED_DOMAIN is set)
      if (account?.provider === "google" && process.env.ALLOWED_DOMAIN) {
        const domain = user.email?.split("@")[1];
        if (domain !== process.env.ALLOWED_DOMAIN) return false;
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
