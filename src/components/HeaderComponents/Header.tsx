"use client";
import React from "react";
import Logo from "./Logo/Logo";
import ResponsiveMenu from "./ResponsiveMenu/ResponsiveMenu";
import { useSize } from "@/hooks/useSize";
import Button from "./Button/Button";
import Links from "./Links/Links";

export const Header: React.FC = () => {
  const { size } = useSize();

  return (
    <div className="w-full h-[50px] flex justify-center shadow-sm shadow-tcExtra sm:h-[62px] md:h-[89px]">
      <div className="w-full h-full flex justify-between items-center px-3 sm:px-4 xl:w-[1200px] xl:p-0">
        <Logo />
        {size && size < 1024 ? (
          <ResponsiveMenu />
        ) : (
          <div className="flex items-center gap-3">
            <Links />
            <Button />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;