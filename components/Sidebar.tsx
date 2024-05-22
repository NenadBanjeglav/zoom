"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((el: any) => {
          const isActive =
            (pathname.includes(el.route) && el.route.length > 1) ||
            pathname === el.route;

          return (
            <Link
              href={el.route}
              key={el.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                {
                  "bg-blue-1": isActive,
                }
              )}
            >
              <Image src={el.imgUrl} alt={el.label} width={24} height={24} />
              <p className="text-lg font-semibold max-lg:hidden">{el.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
