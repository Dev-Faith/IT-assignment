import Image from "next/image";
import React from "react";

type Props = {
  type?: "default" | "double" | "tripple";
  title?: string | string[];
  description?: string | string[];
  variant?: "expandable" | "default";
};

const Card = ({ type, title, description, variant }: Props) => {
  return (
    <div className="rounded-[8px] border-[1px] border-[#E2E4E9] w-max py-[37px] px-[24px] h-full">
      {type == "double" ? (
        <div className="flex h-full gap-[32px] w-[45vw]">
          <div className="left flex flex-col gap-[32px] w-[21.3vw]">
            <p className="text-[18px] text-[#525866]">{title && title[0]}</p>
            <p className="text-[40px] text-[#0A0D14] font-[500]">
              {description && description[0]}
            </p>
          </div>
          {/* <div className="divider min-w-[1px] h-full bg-[#E2E4E9]"></div> */}
          <div className="left flex flex-col gap-[32px] pl-[32px] border-l-[1px] border-[#E2E4E9] w-[24.2vw]">
            <p className="text-[18px] text-[#525866]">{title && title[1]}</p>
            <p className="text-[40px] text-[#0A0D14] font-[500]">
              {description && description[1]}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex h-full gap-[32px] w-[21.3vw]">
          <div className="left flex flex-col gap-[32px]">
            <div className="flex items-center justify-between">
                <p className="text-[18px] text-[#525866]">{title}</p>
                <Image src = "/icons/dots.png" alt = "dots" width={24} height={24}/>
            </div>
            <p className="text-[40px] text-[#0A0D14] font-[500]">
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
