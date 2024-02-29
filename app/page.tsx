import { NavigationMenuDemo } from "@/components/NavBar/NavigationMenuDemo";
import { Profile } from "@/components/Profile/Profile";
import { SkillsSeacrh } from "@/components/SkillsSearch/SkillsSearch";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center pt-4">
        <div className="flex flex-col justify-center items-center">
          <NavigationMenuDemo />
          <Profile />
        </div>
      </div>
    </>
  );
}
