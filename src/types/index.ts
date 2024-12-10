export interface InsiderTransaction {
  id: string;
  insiderName: string;
  role: string;
  company: string;
  ticker: string;
  transactionDate: string;
  shareVolume: number;
  transactionValue: number;
  returnSixMonth: number;
  returnOneYear: number;
  returnEighteenMonth: number;
  sectorPerformance: number;
  marketPerformance: number;
}

export interface InsiderProfile {
  id: string;
  name: string;
  transactionCount: number;
  earliestYear: number;
  latestYear: number;
  avgReturn: number;
  winRate: number;
  companiesCount: number;
  sectors: string[];
  transactions: InsiderTransaction[];
}