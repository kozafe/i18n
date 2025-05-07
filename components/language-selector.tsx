"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LanguageSelector() {
  const [language, setLanguage] = useState("English")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full">
          {language}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("English")}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("Bahasa")}>Bahasa</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
