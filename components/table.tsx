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
            <tr className="text-left text-[#525866] bg-[#F6F8FA] ">
              <th className="px-4 py-2 rounded-tl-[8px] rounded-bl-[8px] font-[400]">Description</th>
              <th className="px-4 py-2 font-[400]">Amount</th>
              <th className="px-4 py-2 font-[400]">Date</th>
              <th className="px-4 py-2 font-[400]">Status</th>
              <th className="px-4 py-2 font-[400]">Transaction ID</th>
              <th className="px-4 py-2 rounded-tr-[8px] rounded-br-[8px] font-[400]">Payment method</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, idx) => (
              <tr key={idx} className="border-b-[1px] border-[#E2E4E9] h-[52px] hover:bg-gray-50">
                <td className="px-4 py-2">{tx.description}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    tx.amount < 0 ? "text-red-500" : "text-green-600"
                  }`}
                >
                  {tx.amount < 0
                    ? `- NGN ${Math.abs(tx.amount).toLocaleString()}`
                    : `+ NGN ${tx.amount.toLocaleString()}`}
                </td>
                <td className="px-4 py-2">
                  {new Date(tx.date).toLocaleString()}
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      tx.status === "PAID"
                        ? "bg-green-100 text-green-800"
                        : tx.status === "PENDING"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="px-4 py-2">{tx.transactionId}</td>
                <td className="px-4 py-2">{tx.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default TransactionTable;
