import Heatmap from "@/components/heatmap";
import Graph1 from "@/components/linegraph1";
import Graph2 from "@/components/linegraph2";
import Graph3 from "@/components/linegraph3";
import Pie1 from "@/components/piechart1";
import Pie2 from "@/components/piechart2";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BarGraph from "@/components/bargraph";

export default function Home() {
  return (
    <>
      <div className="w-full max-md:p-4 overflow-hidden grid md:grid-cols-3 max-md:grid-cols-1 gap-6">
        <div className="p-6 bg-white border shadow-xl rounded-2xl flex flex-col gap-4 items-center justify-center">
          <h1 className="font-bold text-lg text-zinc-500">TOTAL QUESTIONS</h1>
          <h1 className="font-bold text-7xl ">156</h1>
        </div>
        <div className="p-6 bg-white border shadow-xl flex max-md:flex-col max-md:gap-4 rounded-2xl md:col-span-2">
          <Heatmap />
          <div className="w-full flex flex-col gap-4 items-center justify-center">
            <h1 className="font-light text-zinc-600">
              Current Streak: <span className="text-zinc-900 font-bold">2</span>
            </h1>
            <h1 className="font-bold text-6xl">11</h1>
            <h1 className="font-light">Max. Streak</h1>
          </div>
        </div>
        <div className="p-6 bg-white border shadow-xl rounded-2xl md:col-span-2 flex flex-col gap-4">
          <h1 className="font-light">
            Total Test: <span className="font-bold text-2xl">23</span>
          </h1>
          <Tabs defaultValue="1" className="">
            <TabsList className="">
              <TabsTrigger value="1">Chapter 1</TabsTrigger>
              <TabsTrigger value="2">Chapter 2</TabsTrigger>
              <TabsTrigger value="3">Chapter 3</TabsTrigger>
            </TabsList>
            <TabsContent value="1">
              <Graph1 />
            </TabsContent>
            <TabsContent value="2">
              <Graph2 />
            </TabsContent>
            <TabsContent value="3">
              <Graph3 />
            </TabsContent>
          </Tabs>
        </div>
        <div className="p-6 bg-white border shadow-xl rounded-2xl flex flex-col gap-4 items-center">
          <h1 className="text-center font-light">Questions Solved</h1>
          <Separator className="bg-zinc-400" />
          <h1 className="text-center font-light text-sm">Module 1</h1>
          <div className="flex w-full items-center">
            <Pie1 />
            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex justify-between bg-zinc-100 p-2 rounded-xl border">
                <h1>Intro 1</h1>
                <h1>40</h1>
              </div>
              <div className="w-full flex justify-between bg-zinc-100 p-2 rounded-xl border">
                <h1>Intro 2</h1>
                <h1>22</h1>
              </div>
              <div className="w-full flex justify-between bg-zinc-100 p-2 rounded-xl border">
                <h1>Intro 3</h1>
                <h1>11</h1>
              </div>
            </div>
          </div>
          <Separator className="bg-zinc-400" />
          <div className="flex w-full items-center">
            <Pie2 />
            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex justify-between bg-zinc-100 p-2 rounded-xl border">
                <h1>Chapter 1</h1>
                <h1>20</h1>
              </div>
              <div className="w-full flex justify-between bg-zinc-100 p-2 rounded-xl border">
                <h1>Chapter 2</h1>
                <h1>32</h1>
              </div>
              <div className="w-full flex justify-between bg-zinc-100 p-2 rounded-xl border">
                <h1>Chapter 3</h1>
                <h1>31</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white border shadow-xl rounded-2xl md:col-span-2 flex flex-col gap-4">
          <h1 className="text-lg font-light">Awards:</h1>
          <div className="flex gap-4 justify-center">
            <Avatar className="h-32 w-32 max-md:h-14 max-md:w-14">
              <AvatarImage src="/badge1.png" />
            </Avatar>
            <Avatar className="h-32 w-32 max-md:h-14 max-md:w-14">
              <AvatarImage src="/badge2.png" />
            </Avatar>
            <Avatar className="h-32 w-32 max-md:h-14 max-md:w-14">
              <AvatarImage src="badge3.png" />
            </Avatar>
            <Avatar className="h-32 w-32 max-md:h-14 max-md:w-14">
              <AvatarImage src="badge4.png" />
            </Avatar>
          </div>
          <Dialog>
            <DialogTrigger>Show More</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Awards List</DialogTitle>
                <DialogDescription className="grid grid-cols-3">
                  <Avatar className="h-32 w-32 max-md:h-14 max-md:w-14">
                    <AvatarImage src="/badge1.png" />
                  </Avatar>
                  <Avatar className="h-32 w-32 max-md:h-14 max-md:w-14">
                    <AvatarImage src="/badge2.png" />
                  </Avatar>
                  <Avatar className="h-32 w-32 max-md:h-14 max-md:w-14">
                    <AvatarImage src="badge3.png" />
                  </Avatar>
                  <Avatar className="h-32 w-32 max-md:h-14 max-md:w-14">
                    <AvatarImage src="badge4.png" />
                  </Avatar>
                  <Avatar className="h-32 w-32 max-md:h-14 max-md:w-14">
                    <AvatarImage src="badge5.png" />
                  </Avatar>
                  <Avatar className="h-32 w-32 max-md:h-14 max-md:w-14">
                    <AvatarImage src="badge6.png" />
                  </Avatar>
                  <Avatar className="h-32 w-32 max-md:h-14 max-md:w-14">
                    <AvatarImage src="badge7.png" />
                  </Avatar>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <div className="p-6 bg-white border shadow-xl rounded-2xl row-span-2 flex flex-col gap-2 items-center">
          <h1 className="text-center font-light">Ranking</h1>
          <Separator className="bg-zinc-400" />
          <h1 className="text-center font-light text-sm">Chapter 1</h1>
          <div className="flex w-full items-center gap-4">
            <Avatar className="h-32 w-32">
              <AvatarImage src="/badge5.png" />
            </Avatar>
            <div className="w-full flex flex-col items-center gap-2">
              <h1 className="text-2xl font-bold">2892</h1>
              <h1 className="text-sm font-light">(min:1982)</h1>
              <h1 className="text-sm font-light">Very Good</h1>
            </div>
          </div>
          <Separator className="bg-zinc-400" />
          <h1 className="text-center font-light text-sm">Chapter 2</h1>
          <div className="flex w-full items-center gap-4">
            <Avatar className="h-32 w-32">
              <AvatarImage src="/badge6.png" />
            </Avatar>
            <div className="w-full flex flex-col items-center gap-2">
              <h1 className="text-2xl font-bold">2395</h1>
              <h1 className="text-sm font-light">(min:2395)</h1>
              <h1 className="text-sm font-light">Good</h1>
            </div>
          </div>
          <Separator className="bg-zinc-400" />
          <h1 className="text-center font-light text-sm">Chapter 3</h1>
          <div className="flex w-full items-center gap-4">
            <Avatar className="h-32 w-32">
              <AvatarImage src="/badge7.png" />
            </Avatar>
            <div className="w-full flex flex-col items-center gap-2">
              <h1 className="text-2xl font-bold">1233</h1>
              <h1 className="text-sm font-light">(min:709)</h1>
              <h1 className="text-sm font-light">Excellent</h1>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white border shadow-xl rounded-2xl md:col-span-2 flex flex-col gap-4">
          <h1 className="text-lg font-light">Topic Analysis</h1>
          <BarGraph />
        </div>
      </div>
    </>
  );
}
