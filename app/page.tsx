import { ModeToggle } from "@/components/buttons/ModeToggle";
import { ProfileForm } from "@/components/forms/ProfileForm";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex justify-end m-4">
          <ModeToggle />
        </div>
        <div className="h-screen flex justify-center items-center">
          <div className="border-white">
            <ProfileForm />
          </div>
        </div>
      </div>
    </>
  );
}
