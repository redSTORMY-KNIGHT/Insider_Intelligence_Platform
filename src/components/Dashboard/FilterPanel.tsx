import React from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';

interface FilterPanelProps {
  onFilterChange: (filters: any) => void;
}

export function FilterPanel({ onFilterChange }: FilterPanelProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="text-gray-400" />
        <h3 className="text-lg font-semibold">Filters</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Return Range</label>
          <div className="mt-1 flex items-center space-x-2">
            <input
              type="number"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Min %"
              onChange={(e) => onFilterChange({ minReturn: e.target.value })}
            />
            <span>to</span>
            <input
              type="number"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Max %"
              onChange={(e) => onFilterChange({ maxReturn: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Sector</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            onChange={(e) => onFilterChange({ sector: e.target.value })}
          >
            <option value="">All Sectors</option>
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Finance">Finance</option>
            <option value="Consumer">Consumer</option>
            <option value="Industrial">Industrial</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Market Cap</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            onChange={(e) => onFilterChange({ marketCap: e.target.value })}
          >
            <option value="">All</option>
            <option value="large">Large Cap</option>
            <option value="mid">Mid Cap</option>
            <option value="small">Small Cap</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Transaction Period</label>
          <div className="mt-1 grid grid-cols-2 gap-2">
            <input
              type="date"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              onChange={(e) => onFilterChange({ startDate: e.target.value })}
            />
            <input
              type="date"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              onChange={(e) => onFilterChange({ endDate: e.target.value })}
            />
          </div>
        </div>
      </div>

      <button
        className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={() => onFilterChange({})}
      >
        <SlidersHorizontal className="mr-2 h-4 w-4" />
        Apply Filters
      </button>
    </div>
  );
}