"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useParams, useRouter } from "next/navigation";

const arr = [
  { value: "id", label: "Bahasa" },
  { value: "en", label: "English" },
];

export default function LanguageSelector() {
  const { locale } = useParams();

  const { replace } = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full">
          {arr.find((item) => item.value === locale)?.label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {arr.map((item, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => {
              replace(`/${item.value}`);
            }}
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
