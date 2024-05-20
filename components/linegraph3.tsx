"use client";

import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "chapter 2",
    color: "hsl(82, 70%, 50%)",
    data: [
      {
        x: "Test 1",
        y: 45,
      },
      {
        x: "Test 2",
        y: 34,
      },
      {
        x: "Test 3",
        y: 56,
      },
      {
        x: "Test 4",
        y: 67,
      },
      {
        x: "Test 5",
        y: 12,
      },
      {
        x: "Test 6",
        y: 98,
      },
      {
        x: "Test 7",
        y: 102,
      },
      {
        x: "Test 8",
        y: 56,
      },
      {
        x: "Test 9",
        y: 89,
      },
    ],
  },
];

const MyResponsiveLine = ({ data }: any) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    curve="natural"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Weekly Test",
      legendOffset: 36,
      legendPosition: "middle",
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Score",
      legendOffset: -40,
      legendPosition: "middle",
      truncateTickAt: 0,
    }}
    enableGridX={false}
    enableGridY={false}
    pointSize={5}
    pointColor={{ from: "color", modifiers: [] }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="data.yFormatted"
    pointLabelYOffset={-12}
    enableTouchCrosshair={true}
    useMesh={true}
    legends={[]}
  />
);

export default function Graph3() {
  return (
    <div className="w-auto h-[300px] max-md:w-auto max-md:h-[250px] md:p-4 bg-zinc-100 border rounded-2xl">
        <MyResponsiveLine data={data}/>
    </div>
  )
}
