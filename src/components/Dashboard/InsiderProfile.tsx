import React from 'react';
import { ArrowUpRight, ArrowDownRight, Building2, Briefcase, Calendar, BarChart } from 'lucide-react';
import type { InsiderProfile as InsiderProfileType } from '../../types';
import { formatPercent } from '../../utils/formatters';

interface InsiderProfileProps {
  profile: InsiderProfileType;
}

export function InsiderProfile({ profile }: InsiderProfileProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
        <div className="flex items-center space-x-2">
          {profile.avgReturn >= 0 ? (
            <ArrowUpRight className="text-green-500" />
          ) : (
            <ArrowDownRight className="text-red-500" />
          )}
          <span className={`text-lg font-semibold ${
            profile.avgReturn >= 0 ? 'text-green-500' : 'text-red-500'
          }`}>
            {formatPercent(profile.avgReturn)}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <Building2 className="text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Companies</p>
            <p className="font-semibold">{profile.companiesCount}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Briefcase className="text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Transactions</p>
            <p className="font-semibold">{profile.transactionCount}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Active Period</p>
            <p className="font-semibold">{profile.earliestYear} - {profile.latestYear}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <BarChart className="text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Win Rate</p>
            <p className="font-semibold">{formatPercent(profile.winRate)}</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Top Sectors</h3>
        <div className="flex flex-wrap gap-2">
          {profile.sectors.map(sector => (
            <span
              key={sector}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {sector}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}