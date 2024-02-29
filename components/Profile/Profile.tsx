"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Command, CommandEmpty, CommandItem, CommandList } from "../ui/command";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function Profile() {
  const items = [
    {
      title: "Automatic question paper generator",
      description:
        "Create seamless and personalized question papers effortlessly with our Question Paper Generator. Powered by React and TypeScript, this innovative tool automates the process, saving educators valuable time.",
      tags: ["react", "nodejs", "express", "postgresql", "prisma"],
    },
    {
      title: "BloggerHub",
      description:
        "Create seamless and personalized question papers effortlessly with our Question Paper Generator. Powered by React and TypeScript, this innovative tool automates the process, saving educators valuable time.",
      tags: ["react", "nodejs"],
    },
    {
      title: "Vercel",
      description:
        "Create seamless and personalized question papers effortlessly with our Question Paper Generator. Powered by React and TypeScript, this innovative tool automates the process, saving educators valuable time.",
      tags: ["nodejs"],
    },
  ];
  const skills = [
    {
      type: "Frontend Skills",
      topics: ["Nextjs", "React", "React Native"],
    },
    {
      type: "Backend Skills",
      topics: [
        "Nodejs",
        "Python",
        "Trpc",
        "Express",
        "Graphql",
        "Typescript",
        "Javascript",
        "Websockets",
      ],
    },
    {
      type: "Database",
      topics: ["Mongodb", "Postgresql", "Prisma"],
    },
    {
      type: "Devops",
      topics: [
        "Docker",
        "Github Actions(CI | CD)",
        "AWS (EC2)",
        "Vercel",
        "Netlify",
      ],
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery))
  );

  return (
    <>
      <Tabs
        defaultValue="Projects"
        className="max-w-max md:w-[600px] lg:w-[600px] xl:w-[600px]"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Projects">Projects</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="Projects">
          <div className="border-4 p-4">
            <Command className="rounded-lg gap-1">
              <div className="font-mono">
                <span className="text-xl font-bold">
                  Hi, I'm
                  <span
                    className="font-extrabold text-xl"
                    style={{ color: "#049bed" }}
                  >
                    {" "}
                    Sheninth Jr
                  </span>
                </span>
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quasi, excepturi consequatur fugiat perspiciatis asperiores
                  aspernatur cum suscipit culpa tenetur saepe optio odit
                  assumenda accusamus qui amet veritatis numquam architecto
                  aliquid!
                </div>
              </div>
              <Input
                placeholder="Search by topics..."
                onChange={handleSearchChange}
                className="border-slate-700"
              />
              <CommandList>
                {filteredItems.length === 0 && (
                  <CommandEmpty>No results found.</CommandEmpty>
                )}
                <div className="border-2 space-y-1">
                  {filteredItems.map((item, index) => (
                    <div className="border-2">
                      <CommandItem key={index}>
                        <span className="self-start text-lg font-bold">
                          {item.title}
                        </span>
                        <div className="text-sm font-light">
                          {item.description}
                        </div>
                        <div className="self-start">
                          {item.tags.map((tag, index) => (
                            <Button variant="link" key={index} className="tag">
                              #{tag}
                            </Button>
                          ))}
                        </div>
                      </CommandItem>
                    </div>
                  ))}
                </div>
              </CommandList>
            </Command>
          </div>
        </TabsContent>
        <TabsContent value="skills">
          <div className="border-4 pr-4 pl-4 pb-4">
            <div className="text-lg pt-2 font-mono">
              Throughout my journey, I've been passionate about learning and
              exploring various technologies on my own. Here are some of the
              skills I've developed through self-learning:
            </div>
            <Command className="rounded-lg gap-1">
              <div className="font-mono">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="font-bold p-2">{skill.type}</div>
                    <div className="">
                      {skill.topics.map((s, i) => (
                        <div key={i} className="flex gap-4 p-2">
                          <div className="" style={{ color: "#049bed" }}>
                            ——
                          </div>
                          <div className="font-bold">{s}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Command>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
