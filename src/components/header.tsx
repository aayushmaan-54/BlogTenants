import Logo from "@/components/logo";
import ThemeToggle from "./theme-toggle";
import Icons from "@/icons/icons";


export default function Header() {

  return (
    <>
      <header className="flex items-center justify-between px-5 py-2 border-b border-b-border">
        <div>
          <Logo />
        </div>

        <div className="flex items-center justify-centers mr-2">
          <div className="mr-3">
            <ThemeToggle />
          </div>

          <div className="flex items-center justify-center bg-secondary p-2 rounded-full">
            <Icons.DefaultAvatar className="size-5" />
          </div>
        </div>
      </header>
    </>
  );
}