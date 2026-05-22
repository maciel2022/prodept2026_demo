import bcrypt from "bcryptjs";

// Re-export NextAuth's auth() for convenience
export { auth as getSession } from "@/auth";

// ---------------------------------------------------------------------------
// Password utilities (used by Credentials provider and registration)
// ---------------------------------------------------------------------------

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
