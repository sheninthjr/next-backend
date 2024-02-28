"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export function SkillsSeacrh() {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Search the skills..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandSeparator />
        <CommandGroup heading="Frontend Skills">
          <CommandItem>
            <span>Nextjs</span>
          </CommandItem>
          <CommandItem>
            <span>React</span>
          </CommandItem>
          <CommandItem>
            <span>React Native</span>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Backend Skills">
          <CommandItem>
            <span>Nodejs</span>
          </CommandItem>
          <CommandItem>
            <span>Python</span>
          </CommandItem>
          <CommandItem>
            <span>Trpc</span>
          </CommandItem>
          <CommandItem>
            <span>Express</span>
          </CommandItem>
          <CommandItem>
            <span>Graphql</span>
          </CommandItem>
          <CommandItem>
            <span>Websockets</span>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Database">
          <CommandItem>
            <span>Mongodb</span>
          </CommandItem>
          <CommandItem>
            <span>Postgresql</span>
          </CommandItem>
          <CommandItem>
            <span>Prisma</span>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Devops">
          <CommandItem>
            <span>Docker</span>
          </CommandItem>
          <CommandItem>
            <span>AWS(EC2)</span>
          </CommandItem>
          <CommandItem>
            <span>Vercel</span>
          </CommandItem>
          <CommandItem>
            <span>Netlify</span>
          </CommandItem>
          <CommandItem>
            <span>Github Action(CI | CD)</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
