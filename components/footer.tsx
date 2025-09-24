import { Logo } from "@/components/logo";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Solution",
    href: "#",
  },
  {
    title: "Customers",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Help",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          href="/"
          aria-label="go home"
          className="mx-auto size-fit flex items-center"
        >
          <Image src="/logo-512x512.png" alt="logo" width={32} height={32} />

          <span className="text-2xl font-bold ml-2">Memorix</span>
        </Link>

        <span className="text-muted-foreground block text-center text-sm mt-2">
          {" "}
          © {new Date().getFullYear()} Memorix, All rights reserved
        </span>
      </div>
    </footer>
  );
}
