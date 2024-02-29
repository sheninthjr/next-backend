"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Command, CommandEmpty, CommandItem, CommandList } from "../ui/command";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

export function Profile() {
  const items = [
    {
      title: "Automatic question paper generator",
      description:
        "Create seamless and personalized question papers effortlessly with our Question Paper Generator. Powered by React and TypeScript, this innovative tool automates the process, saving educators valuable time.",
      feature: [
        "Experienced in addressing contemporary challenges in question paper creation processes.",
        "Revolutionised question paper creation using Node.js and Prisma,Reducing staff workload.",
        "Implemented PDF output functionality for generated questions.",
      ],
      link: "https://github.com/sheninthjr/Automatic-Question-Generator",
      tags: ["react", "nodejs", "express", "postgresql", "prisma"],
    },
    {
      title: "BloggerHub",
      description:
        "BloggerHub is a feature-rich web application that empowers users to connect, share content, and engage in real-time conversations. BloggerHub offers a seamless and modern experience for bloggers and content enthusiasts.",
      feature: [
        "Dynamic blogging platform with Apollo Graphql and Next.js for efficient post management.",
        "Implemented real-time communication for live chat using Websocket.",
        "Secured authentication using NextAuth.js and utilised Prisma for Postgresql integration.",
      ],
      link: "https://github.com/sheninthjr/BloggerHub",
      tags: [
        "nextjs",
        "graphql",
        "postgresql",
        "next-auth",
        "websockets",
        "vercel",
      ],
    },
    {
      title: "ChatApp",
      description:
        "Experience seamless communication with our Real-Time Chat Application, crafted with Next.js and WebSockets. Connect with others instantly, fostering real-time conversations in a secure and dynamic environment.",
      feature: [
        "Experience instant messaging with our chat app built on WebSockets, ensuring lightning-fast message delivery and real-time updates.",
        "Utilizing the power of Next.js, our frontend delivers a smooth and responsive user experience, allowing you to focus on meaningful conversations without interruptions.",
        "Ensure smooth UI for optimal user experience.",
      ],
      link: "https://github.com/sheninthjr/Chat-App",
      tags: ["nextjs", "nodejs", "typescript", "websockets", "redis"],
    },
    {
      title: "Vercel-Clone",
      description:
        "Our Vercel clone leverages S3 for storage, Node.js with TypeScript for backend logic, Redis for caching, and Express for routing. Combining these technologies, we offer a scalable, performant platform for deploying web apps and static sites with ease and efficiency.",
      feature: [
        "Vercel Clone: Offers Vercel-like deployment experience.",
        "Leverages Redis queues, AWS S3 as Object Store and nodejs.",
        "Seamlessly deploys React projects with ease.",
      ],
      link: "https://github.com/sheninthjr/vercel-clone",
      tags: ["typescript", "redis", "express", "S3", "nodejs"],
    },
    {
      title: "Scheduler",
      description:
        "Elevate your productivity with our Scheduler App – your go-to companion for managing daily tasks effortlessly.Whether you're tackling work projects, personal goals, or daily chores, the Scheduler App simplifies task management for a more productive day.",
      feature: [
        "Scheduler assigns daily tasks, prioritising current tasks at the top of the website.",
        "Developed with TRPC integrated with Next.js for efficient task management with NextAuth.js authentication.",
        "MongoDB serves as the Database for storing the task and authentication information.",
      ],
      link: "https://github.com/sheninthjr/scheduler",
      tags: ["nextjs", "trpc", "mongodb", "recoil", "vercel"],
    },
    {
      title: "NoteMaker",
      description:
        "NoteMaker is a mobile application built with React Native and TypeScript, designed to help users create and manage notes efficiently.",
      feature: [
        "Note Maker is a customised application for Storing the data.",
        "It is built using React Native, Express as server and node as the backend.",
        "Ensure smooth UI for optimal user experience.",
      ],
      link: "https://github.com/sheninthjr/NoteMaker",
      tags: ["reactnative", "nodejs", "typescript"],
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
                  Hi, I&apos;m
                  <span
                    className="font-extrabold text-xl"
                    style={{ color: "#049bed" }}
                  >
                    {" "}
                    Sheninth Jr
                  </span>
                </span>
                <div>
                  I&apos;ve worked on over ten projects and am proficient in
                  front-end, back-end, and cloud technologies. Together,
                  let&apos;s create something amazing! My fervour for creativity
                  and commitment to quality guarantee that we will consistently
                  surpass expectations.
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
                    <div key={index} className="border-2">
                      <CommandItem>
                        <a href={item.link}>
                          <span className="self-start text-lg font-bold">
                            {item.title}
                          </span>
                          <div className="text-sm font-light">
                            {item.description}
                          </div>
                          <div className="space-y-1 self-start">
                            <div className="font-bold text-lg">Features</div>
                            {item.feature.map((f, i) => (
                              <div key={i} className="space-y-1">
                                <Label htmlFor="point">● {f}</Label>
                              </div>
                            ))}
                          </div>
                          <div className="self-start">
                            {item.tags.map((tag, index) => (
                              <Button
                                variant="link"
                                key={index}
                                className="tag"
                              >
                                #{tag}
                              </Button>
                            ))}
                          </div>
                        </a>
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
            <div className="font-bold text-2xl pt-2">Technical Skills</div>
            <div className="text-lg pt-2 font-mono">
              Throughout my journey, I&apos;ve been passionate about learning
              and exploring various technologies on my own. Here are some of the
              skills I&apos;ve developed through self-learning:
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
