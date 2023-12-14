import { ReactNode } from "react";
interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="flex flex-col gap-7">
      <h1 className="text-center text-3xl font-bold">Our Pricing</h1>
      {children}
    </header>
  );
}
