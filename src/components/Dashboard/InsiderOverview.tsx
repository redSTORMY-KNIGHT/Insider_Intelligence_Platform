import React from 'react';
import { InsiderProfile } from './InsiderProfile';
import { TransactionsTable } from './TransactionsTable';
import { PerformanceChart } from './PerformanceChart';
import type { InsiderProfile as InsiderProfileType } from '../../types';

interface InsiderOverviewProps {
  insider: InsiderProfileType;
  onClose: () => void;
}

export function InsiderOverview({ insider, onClose }: InsiderOverviewProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Insider Details</h2>
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Back to Overview
        </button>
      </div>
      
      <InsiderProfile profile={insider} />
      <PerformanceChart transactions={insider.transactions} />
      <TransactionsTable transactions={insider.transactions} />
    </div>
  );
}