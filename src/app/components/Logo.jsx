import { logo } from "@/assets";
import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <>
      <Image src={logo} alt="logo" />
    </>
  );
}
