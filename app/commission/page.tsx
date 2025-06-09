import Card from "@/components/card";
import TransactionTable from "@/components/table";
import Image from "next/image";
import React from "react";

type Props = {};

interface Transaction {
  description: string;
  amount: number;
  date: string;
  status: "PAID" | "PENDING" | "FAILED";
  transactionId: string;
  paymentMethod: "Wallet" | "Bridge Account";
}

const transactions: Transaction[] = [
  {
    description: "Commission",
    amount: 48000,
    date: "22nd Feb, 24 . 7:25PM",
    status: "PAID",
    transactionId: "TID3872XG9",
    paymentMethod: "Wallet",
  },
  {
    description: "PA Cashout",
    amount: -48000,
    date: "22nd Feb, 24 . 7:25PM",
    status: "PAID",
    transactionId: "TID3872XG9",
    paymentMethod: "Bridge Account",
  },
  {
    description: "PA Cashout",
    amount: -48000,
    date: "22nd Feb, 24 . 7:25PM",
    status: "PAID",
    transactionId: "TID3872XG9",
    paymentMethod: "Bridge Account",
  },
  {
    description: "Commission",
    amount: 48000,
    date: "22nd Feb, 24 . 7:25PM",
    status: "PAID",
    transactionId: "TID3872XG9",
    paymentMethod: "Wallet",
  },
  {
    description: "Commission",
    amount: 48000,
    date: "22nd Feb, 24 . 7:25PM",
    status: "PAID",
    transactionId: "TID3872XG9",
    paymentMethod: "Wallet",
  },
  {
    description: "Commission",
    amount: 48000,
    date: "22nd Feb, 24 . 7:25PM",
    status: "PAID",
    transactionId: "TID3872XG9",
    paymentMethod: "Wallet",
  },
  {
    description: "Commission",
    amount: 48000,
    date: "22nd Feb, 24 . 7:25PM",
    status: "PAID",
    transactionId: "TID3872XG9",
    paymentMethod: "Wallet",
  },
  {
    description: "Commission",
    amount: 48000,
    date: "22nd Feb, 24 . 7:25PM",
    status: "PENDING",
    transactionId: "TID3872XG9",
    paymentMethod: "Wallet",
  },
  {
    description: "Commission",
    amount: 48000,
    date: "22nd Feb, 24 . 7:25PM",
    status: "FAILED",
    transactionId: "TID3872XG9",
    paymentMethod: "Wallet",
  },
];

interface SummaryInterface {
  type?: "default" | "double" | "tripple";
  title?: string | string[];
  description?: string | string[];
  variant?: "expandable" | "default";
}

const summary: SummaryInterface[] = [
  {
    title: ["Total Commission Earned", "Withdrawn Amount"],
    description: ["N300,000.00", "N160,000.00"],
    type: "double",
  },
  {
    title: "Balance",
    description: "N240,000.00",
    variant: "expandable",
  },
];

const Commission = (props: Props) => {
  return (
    <div className="w-full p-[32px] h-[100vh] overflow-y-auto flex flex-col gap-[32px]">
      <div className="flex items-center justify-between pb-[32px]">
        <p className="text-[24px] font-bold">Commissions and Payouts</p>
        <button className="flex items-center gap-[4px] p-[10px] text-[14px] rounded-[10px] border-[1px] border-[#9244D4] text-[#9244D4]">
          <Image
            src="/icons/add-line-purple.png"
            alt=""
            height={20}
            width={20}
          />
          <p>Add payout account</p>
        </button>
      </div>
      <div className="cards flex items-center justify-between gap-[19px]">
        {summary.map((card) => (
          <Card
            key={typeof card.title !== "string" ? card.type : card.title}
            type={card.type}
            title={card.title}
            description={card.description}
            variant={card.variant}
          />
        ))}
      </div>
      <TransactionTable
        transactions={transactions}
        totalCommission={0}
        withdrawnAmount={0}
      />
    </div>
  );
};

export default Commission;
