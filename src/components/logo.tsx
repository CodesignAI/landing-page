import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import logo from "../app/logo.png";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center", className)}
    >
      <Image
        src={logo}
        alt="CoDesignAI Logo"
        className="h-12 w-auto"
        priority
      />
    </Link>
  );
}
