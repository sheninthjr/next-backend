import { NavigationMenuDemo } from "@/components/NavBar/NavigationMenuDemo";
import { Profile } from "@/components/Profile/Profile";
import { SkillsSeacrh } from "@/components/SkillsSearch/SkillsSearch";

export default function Home() {
  return (
    <>
      <div className="flex justify-center pt-4">
        <div>
          <NavigationMenuDemo />
          <Profile />
        </div>
      </div>
    </>
  );
}
