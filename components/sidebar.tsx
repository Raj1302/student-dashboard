import { Globe, GraduationCap, Mail } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Sidebar() {
  return (
    <div className="space-y-5 overflow-hidden md:rounded-2xl md:shadow-xl p-4 flex flex-col max-md:h-dvh h-screen md:h-[95vh] bg-zinc-50 md:border">
      <div className="flex gap-3 items-center">
        <Avatar className="h-20 w-20">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <div>
          <h1 className="text-lg font-bold">Raj Soni</h1>
          <h1 className="text-xs font-light">Last Updated: 20 May 2024</h1>
        </div>
      </div>
      <div className="flex flex-col gap-5 text-zinc-600">
        <div className="flex gap-3 items-center">
          <Globe className="h-5 w-5" />
          <h1 className="text-sm">India</h1>
        </div>
        <div className="flex gap-3 items-center">
          <GraduationCap className="h-5 w-5" />
          <h1 className="text-sm">Sample University</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Mail className="h-5 w-5" />
          <h1 className="text-sm">sample@gmail.com</h1>
        </div>
      </div>
      <Separator className="bg-zinc-400" />
      <Button>Overall Stats</Button>
      <Separator className="bg-zinc-400" />
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Chapter wise Stats" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Chapter 1">Chapter 1</SelectItem>
            <SelectItem value="Chapter 2">Chapter 2</SelectItem>
            <SelectItem value="Chapter 3">Chapter 3</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
