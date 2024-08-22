import { getTodos } from "@/actions";
import { MainPage } from "@/components";

const navLinks = [{ title: "Home", href: "/", badge: 0 }];
import Link from "next/link";
import { PackageIcon } from "@/components/ui/icons";
import { Badge } from "lucide-react";
import LogoutButton from "./logout-button";

export default async function Home() {
  const todos = (await getTodos()) ?? [];
  const activeLink = "/";
  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      <div className="flex h-full w-full gap-2 mb-10">
        <div className="flex h-14 items-center border-b px-4">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <PackageIcon className="h-6 w-6" />
            <span className="">Acme Inc</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                className={`${
                  activeLink === link.href
                    ? "bg-gray-100 text-gray-900 hover:text-gray-900"
                    : ""
                } flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900`}
                href={link.href}
                key={link.title}
              >
                <span>{link.title}</span>
                {link.badge > 0 && (
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    {link.badge}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t p-4">
          <LogoutButton />
        </div>
      </div>
      <MainPage todos={todos} />
    </main>
  );
}
