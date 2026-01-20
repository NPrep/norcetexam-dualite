import React from 'react';

interface TableProps {
  headers: string[];
  data: (string | React.ReactNode)[][];
  caption?: string;
}

export const Table: React.FC<TableProps> = ({ headers, data, caption }) => {
  return (
    <div className="my-8 overflow-hidden border border-gray-200 rounded-lg shadow-sm">
      {caption && <div className="bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">{caption}</div>}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-aiims-blue text-white">
            <tr>
              {headers.map((header, idx) => (
                <th key={idx} scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, rowIdx) => (
              <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx} className="px-6 py-4 text-sm text-gray-700 whitespace-pre-wrap">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
