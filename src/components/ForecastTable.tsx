
import React from 'react';
import { cn } from '@/lib/utils';

type ForecastData = {
  date: string;
  standard: number;
  peak: number;
  pvPath: number;
};

type ForecastTableProps = {
  data: ForecastData[];
  className?: string;
};

const ForecastTable: React.FC<ForecastTableProps> = ({ data, className }) => {
  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden", className)}>
      <table className="w-full solar-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Standard</th>
            <th>Peak</th>
            <th>PV Path</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="animate-slide-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <td>{item.date}</td>
              <td>${item.standard}</td>
              <td>{item.peak}</td>
              <td>{item.pvPath}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ForecastTable;
