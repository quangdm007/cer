"use client";

import { menus } from "@/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const DesktopMenu = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || (pathname && pathname.startsWith(path + "/"));
  };

  return (
    <nav className="hidden lg:flex z-50 h-full">
      <ul className="flex space-x-1 h-full">
        {menus.map(
          (item: {
            path: string;
            title: string;
            childs?: { path: string; title: string }[];
          }) => (
            <li
              key={item.title}
              className="relative group h-full flex items-center"
            >
              {item.childs ? (
                <div className="flex items-center h-full">
                  <Link
                    href={item.path}
                    className={`px-3 h-full hover:text-primary font-medium flex items-center cursor-pointer relative group ${
                      isActive(item.path) ||
                      item.childs.some((child) => isActive(child.path))
                        ? "text-primary"
                        : "text-gray-800"
                    }`}
                  >
                    {item.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                </div>
              ) : (
                <Link
                  href={item.path}
                  className={`px-3 h-full hover:text-primary font-medium flex items-center relative group ${
                    isActive(item.path) ? "text-primary" : "text-gray-800"
                  }`}
                >
                  {item.title}
                </Link>
              )}

              {item.childs && (
                <div className="absolute border border-gray-100 rounded-xl top-20 left-0 bg-white shadow-2xl min-w-56 z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ul>
                    {item.childs.map(
                      (child: { path: string; title: string }) => (
                        <li key={child.title}>
                          <Link
                            href={child.path}
                            className={`px-4 py-3 block transition-colors duration-300 font-medium whitespace-nowrap ${
                              isActive(child.path)
                                ? "text-primary"
                                : "text-gray-900 hover:text-primary"
                            }`}
                          >
                            {child.title}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </li>
          )
        )}
      </ul>
    </nav>
  );
};
