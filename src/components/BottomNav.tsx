"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, ChartBar, SoccerBall, UsersThree, Trophy } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";

type NavItem = {
  labelKey: string;
  icon: typeof House;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { labelKey: "home",    icon: House,       href: "/" },
  { labelKey: "groups",  icon: ChartBar,    href: "/groups" },
  { labelKey: "predict", icon: SoccerBall,  href: "/predictions" },
  { labelKey: "rank",    icon: Trophy,      href: "/leaderboard" },
  { labelKey: "leagues", icon: UsersThree,  href: "/leagues" },
];

export default function BottomNav() {
  const pathname = usePathname();
  const t = useTranslations("nav");

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-50 glass-panel rounded-none border-t border-[color-mix(in_srgb,var(--color-outline-variant)_40%,transparent)] flex items-stretch"
      aria-label="Main navigation"
    >
      {NAV_ITEMS.map(({ labelKey, icon: Icon, href }) => {
        const isActive =
          href === "/" ? pathname === "/" : pathname.startsWith(href);

        return (
          <Link
            key={href}
            href={href}
            className={[
              "flex flex-col items-center justify-center flex-1 gap-0.5 py-2 px-1 transition-all no-underline",
              isActive
                ? "text-primary-fixed"
                : "text-on-surface-variant hover:text-on-surface",
            ].join(" ")}
            aria-current={isActive ? "page" : undefined}
          >
            {/* Icon wrapper — highlight pill on active with scale */}
            <span
              className={[
                "flex items-center justify-center w-14 h-8 rounded-full transition-all duration-300",
                isActive
                  ? "bg-secondary-container scale-110 shadow-[0_0_12px_color-mix(in_srgb,var(--color-secondary-container)_50%,transparent)]"
                  : "scale-100",
              ].join(" ")}
            >
              <Icon
                size={22}
                weight={isActive ? "fill" : "regular"}
              />
            </span>

            <span
              className={[
                "label-bold transition-all duration-300",
                isActive ? "text-primary-fixed" : "",
              ].join(" ")}
              style={{ fontSize: "0.6875rem", lineHeight: "0.875rem" }}
            >
              {t(labelKey)}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
