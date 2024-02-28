import { ModeToggle } from "@/components/buttons/ModeToggle";
import { ProfileForm } from "@/components/forms/ProfileForm";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex justify-end m-4">
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
