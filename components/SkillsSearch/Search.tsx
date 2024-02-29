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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";

const Search = () => {
  return (
    <>
      <Command className="rounded-lg border ">
        <CommandInput placeholder="Search the skills..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandSeparator />
          <CommandGroup heading="Frontend Skills">
            <CommandItem>
              <Card>
                <CardHeader>
                  <CardTitle>Automatic Question Paper Generator</CardTitle>
                  <CardDescription>
                    Create seamless and personalized question papers
                    effortlessly with our Question Paper Generator. Powered by
                    React and TypeScript, this innovative tool automates the
                    process, saving educators valuable time.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <div className="font-bold text-lg">Features</div>
                    <div className="space-y-1">
                      <Label htmlFor="point-1">
                        ● Experienced in addressing contemporary challenges in
                        question paper creation processes.
                      </Label>
                    </div>
                    <Label htmlFor="point-2">
                      ● Revolutionised question paper creation using Node.js and
                      Prisma,Reducing staff workload.
                    </Label>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="point-3">
                      ● Implemented PDF output functionality for generated
                      questions.
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </>
  );
};

export default Search;
