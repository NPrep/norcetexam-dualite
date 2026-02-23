import React from 'react';

interface TableProps {
  headers: string[];
  data: (string | React.ReactNode)[][];
  caption?: string;
}

export const Table: React.FC<TableProps> = ({ headers, data, caption }) => {
  return (
    <div className="my-8 table-scroll overflow-x-auto rounded-[12px] border border-[var(--border)]">
      {caption && <div className="bg-[var(--bg-light)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] border-b border-[var(--border)]">{caption}</div>}
      <table className="min-w-full border-separate border-spacing-0">
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} scope="col" className="bg-[var(--primary-dark)] px-4 py-3 text-left text-sm font-semibold text-white">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-[var(--bg-light)]'}>
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-4 py-3 text-sm text-[var(--text-secondary)] whitespace-pre-wrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
