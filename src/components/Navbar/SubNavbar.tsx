"use client";
import Link from "next/link";
import { useState } from "react";

const SubNavbar = () => {
  const [language, setLanguage] = useState("en");
  return (
    <div className="flex justify-between items-center container mx-auto">
      <p></p>
      <p className="text-center">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <Link href={"#"} className="underline font-semibold">
          ShopNow
        </Link>
      </p>

      <select
        className="bg-transparent outline-none text-white cursor-pointer"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="en" className="text-black">
          English
        </option>
        <option value="bn" className="text-black">
          Bangla
        </option>
      </select>
    </div>
  );
};

export default SubNavbar;
