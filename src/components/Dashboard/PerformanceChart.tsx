import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { InsiderTransaction } from '../../types';
import { formatPercent } from '../../utils/formatters';

interface PerformanceChartProps {
  transactions: InsiderTransaction[];
}

export function PerformanceChart({ transactions }: PerformanceChartProps) {
  const data = transactions.map(t => ({
    date: t.transactionDate,
    return: t.returnOneYear,
    market: t.marketPerformance,
    sector: t.sectorPerformance,
  }));

  return (
    <div className="h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis tickFormatter={formatPercent} />
          <Tooltip formatter={formatPercent} />
          <Legend />
          <Line type="monotone" dataKey="return" stroke="#2563eb" name="Return" />
          <Line type="monotone" dataKey="market" stroke="#dc2626" name="Market" />
          <Line type="monotone" dataKey="sector" stroke="#16a34a" name="Sector" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}