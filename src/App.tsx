import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { InsiderTable } from './components/Dashboard/InsiderTable';
import { InsiderOverview } from './components/Dashboard/InsiderOverview';
import { FilterPanel } from './components/Dashboard/FilterPanel';
import { AlertsPanel } from './components/Alerts/AlertsPanel';
import type { InsiderProfile as InsiderProfileType } from './types';

// Temporary mock data - replace with actual API calls
const mockData: InsiderProfileType[] = [
  {
    id: '1',
    name: 'John Smith',
    transactionCount: 15,
    earliestYear: 2018,
    latestYear: 2024,
    avgReturn: 0.23,
    winRate: 0.8,
    companiesCount: 3,
    sectors: ['Technology', 'Healthcare'],
    transactions: [
      {
        id: '1',
        insiderName: 'John Smith',
        role: 'CEO',
        company: 'Tech Corp',
        ticker: 'TECH',
        transactionDate: '2024-01-15',
        shareVolume: 1000,
        transactionValue: 50000,
        returnSixMonth: 0.15,
        returnOneYear: 0.25,
        returnEighteenMonth: 0.35,
        sectorPerformance: 0.12,
        marketPerformance: 0.10
      },
      {
        id: '2',
        insiderName: 'John Smith',
        role: 'CEO',
        company: 'Health Corp',
        ticker: 'HLTH',
        transactionDate: '2023-12-01',
        shareVolume: 2000,
        transactionValue: 75000,
        returnSixMonth: 0.20,
        returnOneYear: 0.30,
        returnEighteenMonth: 0.40,
        sectorPerformance: 0.15,
        marketPerformance: 0.12
      }
    ]
  }
];

function App() {
  const [selectedInsider, setSelectedInsider] = useState<InsiderProfileType | null>(null);
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    // Apply filters to data
  };

  const handleSetAlert = (config: any) => {
    console.log('Setting up alert with config:', config);
    // TODO: Implement alert setup logic
  };

  const handleTestAlert = (config: any) => {
    console.log('Sending test alert with config:', config);
    // TODO: Implement test alert logic
  };

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <div className="space-y-6">
            <FilterPanel onFilterChange={handleFilterChange} />
            <AlertsPanel onSetAlert={handleSetAlert} onTestAlert={handleTestAlert} />
          </div>
        </div>
        
        <div className="col-span-9">
          {selectedInsider ? (
            <InsiderOverview
              insider={selectedInsider}
              onClose={() => setSelectedInsider(null)}
            />
          ) : (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Insider Overview</h2>
              <InsiderTable
                data={mockData}
                onRowClick={setSelectedInsider}
              />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default App;