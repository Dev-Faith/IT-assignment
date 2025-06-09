// components/TransactionTable.tsx
import React from "react";

interface Transaction {
  description: string;
  amount: number;
  date: string;
  status: "PAID" | "PENDING" | "FAILED";
  transactionId: string;
  paymentMethod: "Wallet" | "Bridge Account";
}

type Props = {
  transactions: Transaction[];
  totalCommission: number;
  withdrawnAmount: number;
};

function formatCustomDate(isoDate: string): string {
  const date = new Date(isoDate);

  const day = date.getUTCDate();
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  const month = date.toLocaleString("en-US", {
    month: "short",
    timeZone: "UTC",
  });
  const year = date.getUTCFullYear().toString().slice(2);

  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return `${day}${suffix} ${month}, ${year} . ${hours}:${minutes}${ampm}`;
}

const TransactionTable: React.FC<Props> = ({
  transactions,
  totalCommission,
  withdrawnAmount,
}) => {
  const balance = totalCommission - withdrawnAmount;

  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="">
            <tr className="text-left text-[#525866] bg-[#F6F8FA] text-[14px]">
              <th className="px-4 py-2 rounded-tl-[8px] rounded-bl-[8px] font-[400]">
                Description
              </th>
              <th className="px-4 py-2 font-[400]">Amount</th>
              <th className="px-4 py-2 font-[400]">Date</th>
              <th className="px-4 py-2 font-[400]">Status</th>
              <th className="px-4 py-2 font-[400]">Transaction ID</th>
              <th className="px-4 py-2 rounded-tr-[8px] rounded-br-[8px] font-[400]">
                Payment method
              </th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {transactions.map((tx, idx) => (
              <tr
                key={idx}
                className="border-b-[1px] border-[#E2E4E9] h-[52px] hover:bg-gray-50"
              >
                <td className="px-4 py-2 text-[#525866]">{tx.description}</td>
                <td
                  className={`px-4 py-2 font-[400] ${
                    tx.amount < 0 ? "text-[#DF1C41]" : "text-[#38C793]"
                  }`}
                >
                  {tx.amount < 0
                    ? `- NGN ${Math.abs(tx.amount).toLocaleString()}`
                    : `+ NGN ${tx.amount.toLocaleString()}`}
                </td>
                <td className="px-4 py-2 text-[#525866]">
                  {formatCustomDate(tx.date)}
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`px-[8px] py-[2px] text-[11px] rounded-full ${
                      tx.status === "PAID"
                        ? "bg-[#CBF5E5] text-[#176448]"
                        : tx.status === "PENDING"
                        ? "bg-[#FFDAC2] text-[#6E330C]"
                        : "bg-[#F8C9D2] text-[#710E21]"
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-[#525866]">{tx.transactionId}</td>
                <td className="px-4 py-2 text-[#525866]">{tx.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
