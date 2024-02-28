import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SkillsSeacrh } from "../SkillsSearch/SkillsSearch";

export function Profile() {
  return (
    <>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Projects</TabsTrigger>
          <TabsTrigger value="password">Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Automatic Question Paper Generator</CardTitle>
              <CardDescription>
                Create seamless and personalized question papers effortlessly
                with our Question Paper Generator. Powered by React and
                TypeScript, this innovative tool automates the process, saving
                educators valuable time.
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
            <CardFooter>
              <Button variant="link">#react</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <SkillsSeacrh />
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
