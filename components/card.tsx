import Image from "next/image";
import React from "react";

type Props = {
  type?: "default" | "double" | "tripple";
  title?: string | string[];
  description?: string | string[];
  variant?: "expandable" | "default";
};

const formatAmount = (amount: string) => {
  const [whole, decimal] = amount.split(".");
  return (
    <>
      {whole}
      {decimal && <span className="text-[20px]">.{decimal}</span>}
    </>
  );
};

const Card = ({ type, title, description, variant }: Props) => {
  return (
    <div className="rounded-[8px] border-[1px]  p-[16px] lg:p-0 border-[#E2E4E9] w-full lg:w-max lg:py-[37px] lg:px-[24px] h-full">
      {type == "double" ? (
        <div className="flex lg:flex-row flex-col h-full lg:gap-[32px] w-full lg:w-[45vw]">
          <div className="left flex flex-col gap-[32px] w-full lg:w-[21.3vw] pb-[16px] lg:pb-0">
            <p className="text-[18px] text-[#525866]">{title && title[0]}</p>
            <p className="text-[40px] text-[#0A0D14] font-[500]">
              {description &&
                typeof description[0] === "string" &&
                formatAmount(description[0])}
            </p>
          </div>
          <div className="right flex flex-col gap-[32px] lg:pl-[32px]  p-[16px] pt-[32px] lg:pt-0 lg:p-0 border-t-[1px] lg:border-t-0 lg:border-l-[1px] border-[#E2E4E9] w-full lg:w-[24.2vw]">
            <p className="text-[18px] text-[#525866]">{title && title[1]}</p>
            <p className="text-[40px] text-[#0A0D14] font-[500]">
              {description &&
                typeof description[1] === "string" &&
                formatAmount(description[1])}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex h-full gap-[32px] w-full lg:w-[21.3vw] p-[16px] lg:p-0">
          <div className="left flex flex-col gap-[32px] w-full">
            <div className="flex items-center justify-between w-full">
              <p className="text-[18px] text-[#525866]">{title}</p>
              <Image src="/icons/dots.png" alt="dots" width={24} height={24} />
            </div>
            <p className="text-[40px] text-[#0A0D14] font-[500]">
              {description &&
                typeof description === "string" &&
                formatAmount(description)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
