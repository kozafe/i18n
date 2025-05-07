"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const subNavItems = [
  { name: "Overview", href: "/overview" },
  { name: "Notifications", href: "/notifications" },
  { name: "Analytics", href: "/analytics" },
  { name: "Saved reports", href: "/saved-reports" },
  { name: "Trade history", href: "/trade-history" },
  { name: "User reports", href: "/user-reports" },
]

export default function SubNavigation() {
  const pathname = usePathname()

  return (
    <nav className="flex overflow-x-auto py-4">
      <div className="flex items-center space-x-4 pb-2">
        {subNavItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "whitespace-nowrap text-sm font-medium transition-colors hover:text-primary",
              pathname === item.href || (item.name === "Trade history" && pathname === "/")
                ? "border-b-2 border-violet-600 text-primary"
                : "text-muted-foreground",
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
