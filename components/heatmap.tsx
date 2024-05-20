"use client";

import { ResponsiveTimeRange } from "@nivo/calendar";

const data = [
  {
    value: 2,
    day: "2024-06-03",
  },
  {
    value: 1,
    day: "2024-06-02",
  },
  {
    value: 0,
    day: "2024-06-01",
  },
  {
    value: 4,
    day: "2024-05-31",
  },
  {
    value: 4,
    day: "2024-05-30",
  },
  {
    value: 5,
    day: "2024-05-29",
  },
  {
    value: 4,
    day: "2024-05-28",
  },
  {
    value: 3,
    day: "2024-05-27",
  },
  {
    value: 4,
    day: "2024-05-26",
  },
  {
    value: 1,
    day: "2024-05-25",
  },
  {
    value: 4,
    day: "2024-05-24",
  },
  {
    value: 0,
    day: "2024-05-23",
  },
  {
    value: 4,
    day: "2024-05-22",
  },
  {
    value: 4,
    day: "2024-05-21",
  },
  {
    value: 4,
    day: "2024-05-20",
  },
  {
    value: 2,
    day: "2024-05-19",
  },
  {
    value: 3,
    day: "2024-05-18",
  },
  {
    value: 5,
    day: "2024-05-17",
  },
  {
    value: 0,
    day: "2024-05-16",
  },
  {
    value: 0,
    day: "2024-05-15",
  },
  {
    value: 0,
    day: "2024-05-14",
  },
  {
    value: 1,
    day: "2024-05-13",
  },
  {
    value: 3,
    day: "2024-05-12",
  },
  {
    value: 5,
    day: "2024-05-11",
  },
  {
    value: 4,
    day: "2024-05-10",
  },
  {
    value: 4,
    day: "2024-05-09",
  },
  {
    value: 4,
    day: "2024-05-08",
  },
  {
    value: 4,
    day: "2024-05-07",
  },
  {
    value: 4,
    day: "2024-05-06",
  },
  {
    value: 3,
    day: "2024-05-05",
  },
  {
    value: 4,
    day: "2024-05-04",
  },
  {
    value: 5,
    day: "2024-05-03",
  },
  {
    value: 5,
    day: "2024-05-02",
  },
  {
    value: 3,
    day: "2024-05-01",
  },
  {
    value: 4,
    day: "2024-04-30",
  },
  {
    value: 1,
    day: "2024-04-29",
  },
  {
    value: 0,
    day: "2024-04-28",
  },
  {
    value: 0,
    day: "2024-04-27",
  },
  {
    value: 2,
    day: "2024-04-26",
  },
  {
    value: 1,
    day: "2024-04-25",
  },
  {
    value: 4,
    day: "2024-04-24",
  },
  {
    value: 3,
    day: "2024-04-23",
  },
  {
    value: 4,
    day: "2024-04-22",
  },
  {
    value: 1,
    day: "2024-04-21",
  },
  {
    value: 4,
    day: "2024-04-20",
  },
  {
    value: 2,
    day: "2024-04-19",
  },
  {
    value: 5,
    day: "2024-04-18",
  },
  {
    value: 5,
    day: "2024-04-17",
  },
  {
    value: 4,
    day: "2024-04-16",
  },
  {
    value: 3,
    day: "2024-04-15",
  },
  {
    value: 4,
    day: "2024-04-14",
  },
  {
    value: 3,
    day: "2024-04-13",
  },
  {
    value: 0,
    day: "2024-04-12",
  },
  {
    value: 2,
    day: "2024-04-11",
  },
  {
    value: 1,
    day: "2024-04-10",
  },
];

const MyResponsiveTimeRange = ({ data  }:any) => (
    <ResponsiveTimeRange
        data={data}
        from="2024-04-01"
        to="2024-06-30"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 20, right: 30, bottom:0, left: 0 }}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
    />
)

export default function Heatmap() {
  return (
    <div className="w-[800px] h-[150px] max-md:w-auto max-md:h-[150px]">
      <MyResponsiveTimeRange data={data}/>
    </div>
  );
}
