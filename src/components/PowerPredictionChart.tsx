
import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const PowerPredictionChart = () => {
  // Sample data for the prediction chart
  const data = [
    { date: 'Mon', power: 45 },
    { date: 'Tue', power: 50 },
    { date: 'Wed', power: 47 },
    { date: 'Thu', power: 55 },
    { date: 'Fri', power: 53 },
    { date: 'Sat', power: 58 },
    { date: 'Sun', power: 60 },
  ];

  return (
    <div className="h-40">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
          <XAxis 
            dataKey="date" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10 }}
          />
          <YAxis 
            hide={true}
          />
          <Tooltip 
            formatter={(value) => [`${value} kW`, 'Predicted Power']}
            labelFormatter={(label) => `Day: ${label}`}
          />
          <Line 
            type="monotone" 
            dataKey="power" 
            stroke="#4ADE80" 
            strokeWidth={2}
            dot={{ r: 3, fill: "#4ADE80", strokeWidth: 0 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PowerPredictionChart;
