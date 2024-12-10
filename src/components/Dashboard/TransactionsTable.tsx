import React from 'react';
import { useReactTable, createColumnHelper, getCoreRowModel, flexRender } from '@tanstack/react-table';
import type { InsiderTransaction } from '../../types';
import { formatPercent, formatCurrency } from '../../utils/formatters';
import { format } from 'date-fns';

const columnHelper = createColumnHelper<InsiderTransaction>();

const columns = [
  columnHelper.accessor('transactionDate', {
    header: 'Date',
    cell: info => format(new Date(info.getValue()), 'MMM d, yyyy'),
  }),
  columnHelper.accessor('company', {
    header: 'Company',
    cell: info => (
      <div>
        <div className="font-medium text-gray-900">{info.getValue()}</div>
        <div className="text-sm text-gray-500">{info.row.original.ticker}</div>
      </div>
    ),
  }),
  columnHelper.accessor('role', {
    header: 'Role',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('transactionValue', {
    header: 'Value',
    cell: info => formatCurrency(info.getValue()),
  }),
  columnHelper.accessor('returnSixMonth', {
    header: '6M Return',
    cell: info => (
      <span className={info.getValue() >= 0 ? 'text-green-600' : 'text-red-600'}>
        {formatPercent(info.getValue())}
      </span>
    ),
  }),
  columnHelper.accessor('returnOneYear', {
    header: '1Y Return',
    cell: info => (
      <span className={info.getValue() >= 0 ? 'text-green-600' : 'text-red-600'}>
        {formatPercent(info.getValue())}
      </span>
    ),
  }),
];

interface TransactionsTableProps {
  transactions: InsiderTransaction[];
}

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  const table = useReactTable({
    data: transactions,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Transaction History</h3>
      </div>
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
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-6 py-4 whitespace-nowrap text-sm">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}