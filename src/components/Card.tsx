import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title: string;
  price: number;
  storage: string;
  userAllowed: number;
  sendUp: number;
  isProfessional?: boolean;
}

export function Card({
  title,
  price,
  storage,
  userAllowed,
  children,
  sendUp,
  isProfessional,
}: CardProps) {
  return (
    <div
      className={`flex flex-col rounded-md p-8 text-center font-bold shadow  ${
        isProfessional
          ? "bg-gradient-to-b from-indigo-500 to-indigo-600 text-white md:scale-110"
          : "bg-white"
      }`}
    >
      <h3 className="text-xl">{title}</h3>
      <span className="flex items-center justify-center border-b border-gray-400 pb-8 pt-6 text-6xl">
        <span className="text-3xl">$</span>
        {price}
      </span>
      <span className=" border-b border-gray-400 py-4">{storage} Storage</span>
      <span className=" border-b border-gray-400 py-4">
        {userAllowed} Users Allowed
      </span>
      <span className=" border-b border-gray-400 py-4">
        Send up to {sendUp} GB
      </span>
      {children}
    </div>
  );
}
