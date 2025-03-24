
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const PowerDistributionChart = () => {
  // Sample data for the chart
  const data = [
    { time: '5AM', power: 20 },
    { time: '6AM', power: 30 },
    { time: '7AM', power: 45 },
    { time: '8AM', power: 55 },
    { time: '9AM', power: 70 },
    { time: '10AM', power: 90 },
    { time: '11AM', power: 100 },
    { time: '12PM', power: 85 },
    { time: '1PM', power: 75 },
    { time: '2PM', power: 60 },
    { time: '3PM', power: 40 },
    { time: '4PM', power: 30 },
    { time: '5PM', power: 20 },
    { time: '6PM', power: 10 },
    { time: '7PM', power: 5 },
  ];

  return (
    <div className="h-40">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
          <XAxis 
            dataKey="time" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10 }}
            interval={2}
          />
          <YAxis 
            hide={true}
          />
          <Tooltip 
            formatter={(value) => [`${value} kW`, 'Power']}
            labelFormatter={(label) => `Time: ${label}`}
          />
          <Bar 
            dataKey="power" 
            fill="#76D91C" 
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PowerDistributionChart;
