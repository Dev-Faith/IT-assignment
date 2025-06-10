"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ThemeProvider } from "next-themes";

export default function Home() {
  interface PaymentCardInterface {
    name: string;
    level: number;
    levelBtnColor: string;
    label: string;
    bgColor: string;
    cardIcon: string;
    miniCards: {
      title?: string;
      titleIcon?: string;
      descPercentage?: number;
      description?: string;
      descIcon?: string;
      descLabel?: string;
      transactionMinRange?: number;
      transactionMaxRange?: number;
    }[];
  }

  const navSubHeader = [
    {
      name: "Platform Settings",
    },
    {
      name: "Pricing & Transaction Control",
    },
    {
      name: "PA Commission Structures",
    },
    {
      name: "Marketing Content Control",
    },
    {
      name: "Security Settings",
    },
  ];

  const paymentCards: PaymentCardInterface[] = [
    {
      name: "Rookie star",
      level: 1,
      levelBtnColor: "bg-[#3B82F6]",
      label: "State",
      bgColor: "bg-[#3B82F626]",
      cardIcon: "/icons/RookieStar.png",
      miniCards: [
        {
          title: "Key Requirement",
          description:
            "Basic platform familiarity (AliExpress, Namecheap, Amazon)",
          descIcon: "/icons/pen.png",
        },
        {
          title: "Responsibilities",
          description: "Handle small, simple transactions.",
          descIcon: "/icons/pen.png",
        },
        {
          title: "Commission Structure",
          titleIcon: "/icons/dollar.png",
          descPercentage: 5,
          description: "of the service fee profit",
          descIcon: "/icons/pen.png",
        },
        {
          title: "Transaction Processed",
          transactionMinRange: 0,
          transactionMaxRange: 50,
          descIcon: "/icons/pen.png",
        },
      ],
    },
    {
      name: "Rising Champion",
      level: 2,
      levelBtnColor: "bg-[#6568F1]",
      label: "Expanded Region",
      bgColor: "bg-[#6568F126]",
      cardIcon: "/icons/champion.png",
      miniCards: [
        {
          title: "Key Requirement",
          description:
            "Proficient in managing multiple currencies and handling larger volumes.",
          descIcon: "/icons/pen.png",
        },
        {
          title: "Responsibilities",
          description: "Manage regional clients and medium-scale transactions.",
          descIcon: "/icons/pen.png",
        },
        {
          title: "Commission Structure",
          titleIcon: "/icons/dollar.png",
          descPercentage: 6,
          description: "of the service fee profit",
          descIcon: "/icons/pen.png",
        },
        {
          title: "Transaction Processed",
          transactionMinRange: 50,
          transactionMaxRange: 100,
          descIcon: "/icons/pen.png",
        },
      ],
    },
    {
      name: "Elite Expert",
      level: 3,
      levelBtnColor: "bg-[#A855F7]",
      label: "National",
      cardIcon: "/icons/Elite.png",
      bgColor: "bg-[#A855F726]",

      miniCards: [
        {
          title: "Key Requirement",
          description:
            "Advanced skills in secure payments , leadership and training others.",
          descIcon: "/icons/pen.png",
        },
        {
          title: "Responsibilities",
          description: "Handle large transaction and corporate clients.",
          descIcon: "/icons/pen.png",
        },
        {
          title: "Commission Structure",
          titleIcon: "/icons/dollar.png",
          descPercentage: 8,
          description: "of the service fee profit",
          descIcon: "/icons/pen.png",
          descLabel: "+ Performance Bonuses (Bi-annual )",
        },
        {
          title: "Transaction Processed",
          transactionMinRange: 100,
          transactionMaxRange: 500,
          descIcon: "/icons/pen.png",
        },
      ],
    },
    {
      name: "Master of Payment",
      level: 3,
      levelBtnColor: "bg-[#F5A41A]",
      label: "National and International",
      cardIcon: "/icons/master.png",
      bgColor: "bg-[#F5A41A26]",

      miniCards: [
        {
          title: "Key Requirement",
          description:
            "Expertise in large-scale operations, chargebacks, refunds, and security.",
          descIcon: "/icons/pen.png",
        },
        {
          title: "Responsibilities",
          description: "Handle small, simple transactions.",
          descIcon: "/icons/pen.png",
        },
        {
          title: "Commission Structure",
          titleIcon: "/icons/dollar.png",
          descPercentage: 10,
          description: "of the service fee profit",
          descIcon: "/icons/pen.png",
          descLabel:
            "+ Performance Bonuses (Bi-annual )  + Fully paid expense to attend notable finance/business or technology conference within the country",
        },
        {
          title: "Transaction Processed",
          transactionMaxRange: 500,
          descIcon: "/icons/pen.png",
        },
      ],
    },
  ];

  return (
    <div className="w-full h-[100vh] overflow-y-auto pb-[32px]">
      <div className="header flex items-center justify-between w-full px-[32px] pt-[32px] pb-[29px] border-b-[1px] border-[#E5E6E6]">
        <p className="text-[#3A3D3F] text-[24px] font-[700]">Settings</p>
        <div className="icons flex items-center w-[96px] gap-[16px]">
          <div className="notification size-[40px] bg-[#F8F3FC] py-[4px] px-[2px] flex items-center justify-center rounded-full">
            <Image
              src="/icons/notification.png"
              alt="notification icon"
              height={20}
              width={20}
            />
          </div>
          <div className="settings size-[40px] bg-[#F8F3FC] py-[4px] px-[2px] flex items-center justify-center rounded-full">
            <Image
              src="/icons/settings.png"
              alt="settings icon"
              height={20}
              width={20}
            />
          </div>
        </div>
      </div>
      <div className="px-[32px]">
        <ul className="nav-sub-header flex items-center gap-[32px] pt-[32px] border-b-[1px] border-[#E5E6E6]">
          {navSubHeader.map((item, index) => (
            <li
              key={index}
              className={`text-[14px]  ${
                item.name !== "Security Settings" && "text-[#828587]"
              }  font-[500] ${
                item.name !== "PA Commission Structures" && "pb-[24px]"
              } ${
                item.name == "Security Settings" && "text-[#121619] font-[500]"
              }`}
            >
              {item.name}
              <div
                className={` w-[80px] ${
                  item.name == "PA Commission Structures" &&
                  "border-[#9244D4] border-b-[3px] pb-[24px]"
                }`}
              ></div>
            </li>
          ))}
        </ul>
        <div className="titlebar px-[25px] py-[10px] bg-[#9244D4] rounded-[5px] mt-[23px]">
          <p className="font-[500] text-[20px] text-[#FFFFFF]">
            Payment Assistant Ladder
          </p>
        </div>
        <div className="card-container flex flex-col gap-[10px] mt-[16px]">
          {paymentCards.map((card, idx) => (
            <div
              key={idx}
              className={`w-full p-[16px] h-max rounded-[15px] ${card.bgColor} flex justify-between`}
            >
              <div className="flex gap-[16px]">
                <div className="cardIcon size-[38px] p-[10px] rounded-full bg-[#FFFFFF]">
                  <Image
                    src={card.cardIcon}
                    alt="card icon"
                    width={18}
                    height={18}
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <p className="text-[#232323] text-[16px] font-[600]">
                    {card.name}
                  </p>
                  <div
                    className={`${card.levelBtnColor} flex items-center text-[12px] text-[#FFFFFF] px-[10px] py-[4px] rounded-[5px] w-[60px] h-[23px]`}
                  >
                    {" "}
                    Level {card.level}
                  </div>
                  <p className="text-[12px] font-[400] text-[#232323]">
                    {card.label}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 auto-rows-auto gap-[10px]">
                {card.miniCards.map((minCard, idx) => (
                  <div
                    key={idx}
                    className={` ${
                      idx == 0 && minCard.descPercentage == 10 && "h-max"
                    } flex flex-col gap-[6px] min-h-[78px] py-[13px] pr-[10px] pl-[14px] bg-[#FFFFFF] rounded-[5px] ${
                      idx == 1 && "col-start-1 row-start-2"
                    } ${idx == 0 || idx == 1 ? "col-span-2" : "col-span-1"}`}
                  >
                    <div className="flex items-center gap-[15px]">
                      {minCard.titleIcon && (
                        <Image
                          src={minCard.titleIcon}
                          alt="title icon"
                          width={8}
                          height={14}
                        />
                      )}
                      <p className="text-[14px] text-[#232323] font-[600]">
                        {minCard.title}
                      </p>
                    </div>
                    <div className="flex items-center gap-[15px]">
                      {minCard.descPercentage && (
                        <span className="text-[#16A34A] text-[16px] font-[800]">
                          {minCard.descPercentage}%
                        </span>
                      )}
                      {(minCard.transactionMaxRange &&
                        minCard.transactionMinRange! > 0) ||
                      minCard.transactionMinRange! == 0 ? (
                        minCard.transactionMinRange! > 0 ? (
                          <span className="text-[#9244D4] text-[13px] font-[600]">
                            N{minCard.transactionMinRange}M - N
                            {minCard.transactionMaxRange}M
                          </span>
                        ) : (
                          <span className="text-[#9244D4] text-[13px] font-[600]">
                            {minCard.transactionMinRange} - N
                            {minCard.transactionMaxRange}M
                          </span>
                        )
                      ) : (
                        !minCard.transactionMinRange &&
                        minCard.transactionMaxRange && (
                          <span className="text-[#9244D4] text-[13px] font-[600]">
                            Above N{minCard.transactionMaxRange}M
                          </span>
                        )
                      )}
                      <div className="flex items-center gap-[5px]">
                        <p className="text-[12px] text-[#7B7777] font-[400]">
                          {minCard.description}
                        </p>
                        <Image
                          src={minCard.descIcon || ""}
                          alt="description icon"
                          width={14}
                          height={14}
                        />
                      </div>
                    </div>
                    <p className="text-[10px] text-[#232323] font-[400] w-[168px]">
                      {minCard.descLabel}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
