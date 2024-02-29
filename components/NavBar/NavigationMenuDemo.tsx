"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../buttons/ModeToggle";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "10th Cut-Off (84%)",
    href: "",
    description: "Hebron Matriculation and Higher Secondary School",
  },
  {
    title: "12th Cut-Off (88.5%)",
    href: "",
    description: "Hebron Matriculation and Higher Secondary School",
  },
  {
    title: "UG CGPA (8.59)",
    href: "",
    description: "Velammal Institute of Technology",
  },
  {
    title: "Internship",
    href: "",
    description: "Full Stack Development at Marcello Tech",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image
                      src="/sheninthjr.png"
                      alt="logo"
                      width="100"
                      height="100"
                      className="flex justify-center self-center"
                    />
                    <div className="mb-2 mt-4 text-lg font-medium self-center">
                      Sheninth Jr
                    </div>
                    <p className="text-sm leading-tight self-center text-muted-foreground">
                      I make full-stack products that solves the real world
                      problems.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="https://github.com/sheninthjr" title="Github">
                Make your open source contribution to my github.
              </ListItem>
              <ListItem
                href="https://linkedin.com/in/sheninthjr"
                title="LinkedIn"
              >
                Explore my professional journey and discover impactful posts on
                my LinkedIn.
              </ListItem>
              <ListItem
                href="https://twitter.com/sheninth_jr23"
                title="Twitter"
              >
                Stay updated on the latest developments and announcements
                regarding my projects by following me on Twitter
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resume</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] font-mono md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="mailto:sheninthjr23@gmail.com" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <ModeToggle />
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-lg font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
