"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function MainNavigation() {
  const pathname = usePathname();
  const t = useTranslations("home");
  const navItems = [
    { name: t("home"), href: "/" },
    { name: t("dashboard"), href: "/dashboard" },
    { name: t("projects"), href: "/projects" },
    { name: t("tasks"), href: "/tasks" },
    { name: t("reporting"), href: "/reporting" },
    { name: t("users"), href: "/users" },
  ];

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href ? "text-primary" : "text-muted-foreground"
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
