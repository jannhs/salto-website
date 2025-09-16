import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ProjectLayout({ children }: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-22 pb-10 bg-[#2e69400f]">
      <div className="bg-white max-w-300  rounded-lg shadow-md p-6 px-8 md:px-20 py-10">{children}</div>
    </div>
  );
}
