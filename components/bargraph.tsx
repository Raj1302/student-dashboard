"use client";

import { ResponsiveBar } from '@nivo/bar'

const data=[
    {
      "topic": "1",
      "count": 14,
    },
    {
        "topic": "2",
        "count": 10,
    },
    {
        "topic": "3",
        "count": 12,
    },
    {
        "topic": "4",
        "count": 6,
    },
    {
        "topic": "5",
        "count": 13,
    },
    {
        "topic": "6",
        "count": 8,
    },
    {
        "topic": "7",
        "count": 5,
    },
    {
        "topic": "8",
        "count": 10,
    },
    {
        "topic": "9",
        "count": 13,
    },
    {
        "topic": "10",
        "count": 11,
    },
    {
        "topic": "11",
        "count": 11,
    },
    {
        "topic": "12",
        "count": 8,
    },
    {
        "topic": "13",
        "count": 14,
    },
    {
        "topic": "14",
        "count": 10,
    },
    {
        "topic": "15",
        "count": 11,
    },
  ]

const MyResponsiveBar = ({ data }:any) => (
    <ResponsiveBar
        data={data}
        keys={[
            'count',
        ]}
        indexBy="topic"
        margin={{ top: 0, right: 20, bottom: 0, left: 50 }}
        padding={0.3}
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Topics',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
)

export default function BarGraph() {
    return (
      <div className="w-auto h-[200px] max-md:w-auto">
        <MyResponsiveBar data={data}/>
      </div>
    )
  }