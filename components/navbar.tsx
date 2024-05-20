import { CircleHelp, Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./sidebar";

export default function Navbar() {
  return (
    <div className="flex items-center justify-end max-md:pr-4 mb-5 gap-4">
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Button><Menu /></Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="p-0">
          <Sidebar/>
        </SheetContent>
      </Sheet>

      <CircleHelp className="text-zinc-700" />
      <Button>Log out</Button>
    </div>
  );
}
