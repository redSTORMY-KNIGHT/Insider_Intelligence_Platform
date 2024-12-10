import React from 'react';
import { useReactTable, createColumnHelper, getCoreRowModel, flexRender } from '@tanstack/react-table';
import type { InsiderProfile } from '../../types';
import { formatPercent } from '../../utils/formatters';

const columnHelper = createColumnHelper<InsiderProfile>();

const columns = [
  columnHelper.accessor('name', {
    header: 'Insider Name',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('transactionCount', {
    header: 'Transactions',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('avgReturn', {
    header: 'Avg. Return',
    cell: info => formatPercent(info.getValue()),
  }),
  columnHelper.accessor('winRate', {
    header: 'Win Rate',
    cell: info => formatPercent(info.getValue()),
  }),
  columnHelper.accessor('companiesCount', {
    header: 'Companies',
    cell: info => info.getValue(),
  }),
];

interface InsiderTableProps {
  data: InsiderProfile[];
  onRowClick: (insider: InsiderProfile) => void;
}

export function InsiderTable({ data, onRowClick }: InsiderTableProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map(row => (
            <tr
              key={row.id}
              onClick={() => onRowClick(row.original)}
              className="hover:bg-gray-50 cursor-pointer"
            >
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}