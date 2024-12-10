import React, { useState } from 'react';
import { Bell, Mail, Plus, Minus } from 'lucide-react';

interface AlertConfig {
  email: string;
  minSixMonthReturn: number;
  minOneYearReturn: number;
  minTransactionValue: number;
  sector?: string;
  marketCap?: string;
}

interface AlertsPanelProps {
  onSetAlert: (config: AlertConfig) => void;
  onTestAlert: (config: AlertConfig) => void;
}

export function AlertsPanel({ onSetAlert, onTestAlert }: AlertsPanelProps) {
  const [config, setConfig] = useState<AlertConfig>({
    email: '',
    minSixMonthReturn: 5.00,
    minOneYearReturn: 5.00,
    minTransactionValue: 1.00,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSetAlert(config);
  };

  const handleTestAlert = () => {
    onTestAlert(config);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Bell className="text-blue-600" />
        <h2 className="text-xl font-bold text-gray-900">Set Up Alerts</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <Mail className="h-4 w-4" />
            <span>Email Address</span>
          </label>
          <input
            type="email"
            required
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={config.email}
            onChange={(e) => setConfig({ ...config, email: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Min 6-Month Return vs S&P500 (%)
            </label>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="p-1 rounded-md border border-gray-300 hover:bg-gray-50"
                onClick={() => setConfig({ ...config, minSixMonthReturn: config.minSixMonthReturn - 1 })}
              >
                <Minus className="h-4 w-4" />
              </button>
              <input
                type="number"
                step="0.01"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={config.minSixMonthReturn}
                onChange={(e) => setConfig({ ...config, minSixMonthReturn: parseFloat(e.target.value) })}
              />
              <button
                type="button"
                className="p-1 rounded-md border border-gray-300 hover:bg-gray-50"
                onClick={() => setConfig({ ...config, minSixMonthReturn: config.minSixMonthReturn + 1 })}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Min 1-Year Return vs S&P500 (%)
            </label>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="p-1 rounded-md border border-gray-300 hover:bg-gray-50"
                onClick={() => setConfig({ ...config, minOneYearReturn: config.minOneYearReturn - 1 })}
              >
                <Minus className="h-4 w-4" />
              </button>
              <input
                type="number"
                step="0.01"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={config.minOneYearReturn}
                onChange={(e) => setConfig({ ...config, minOneYearReturn: parseFloat(e.target.value) })}
              />
              <button
                type="button"
                className="p-1 rounded-md border border-gray-300 hover:bg-gray-50"
                onClick={() => setConfig({ ...config, minOneYearReturn: config.minOneYearReturn + 1 })}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Min Transaction Value ($M)
          </label>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              className="p-1 rounded-md border border-gray-300 hover:bg-gray-50"
              onClick={() => setConfig({ ...config, minTransactionValue: config.minTransactionValue - 0.1 })}
            >
              <Minus className="h-4 w-4" />
            </button>
            <input
              type="number"
              step="0.01"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={config.minTransactionValue}
              onChange={(e) => setConfig({ ...config, minTransactionValue: parseFloat(e.target.value) })}
            />
            <button
              type="button"
              className="p-1 rounded-md border border-gray-300 hover:bg-gray-50"
              onClick={() => setConfig({ ...config, minTransactionValue: config.minTransactionValue + 0.1 })}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Filter by Sectors (optional)
          </label>
          <select
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={config.sector || ''}
            onChange={(e) => setConfig({ ...config, sector: e.target.value })}
          >
            <option value="">Choose an option</option>
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Finance">Finance</option>
            <option value="Consumer">Consumer</option>
            <option value="Industrial">Industrial</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Filter by Market Cap Categories (optional)
          </label>
          <select
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={config.marketCap || ''}
            onChange={(e) => setConfig({ ...config, marketCap: e.target.value })}
          >
            <option value="">Choose an option</option>
            <option value="large">Large Cap</option>
            <option value="mid">Mid Cap</option>
            <option value="small">Small Cap</option>
          </select>
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Set Up Alert
          </button>
          <button
            type="button"
            onClick={handleTestAlert}
            className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Send Test Alert
          </button>
        </div>
      </form>
    </div>
  );
}