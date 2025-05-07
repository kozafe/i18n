"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function SubNavigation() {
  const pathname = usePathname();

  const t = useTranslations("home");

  const subNavItems = [
    { name: t("overview"), href: "/overview" },
    { name: t("notifications"), href: "/notifications" },
    { name: t("analytics"), href: "/analytics" },
    { name: t("savedrepots"), href: "/saved-reports" },
    { name: t("tradehistory"), href: "/trade-history" },
    { name: t("userreport"), href: "/user-reports" },
  ];
  return (
    <nav className="flex overflow-x-auto py-4">
      <div className="flex items-center space-x-4 pb-2">
        {subNavItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "whitespace-nowrap text-sm font-medium transition-colors hover:text-primary",
              pathname === item.href ||
                (item.name === "Trade history" && pathname === "/")
                ? "border-b-2 border-violet-600 text-primary"
                : "text-muted-foreground"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
