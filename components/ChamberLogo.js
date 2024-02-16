"use client";

import Image from "next/image";

export default function ChamberLogo() {
  return (
    <div className="flex flex-row items-center justify-center mt-8">
      <div className="w-16">
        <Image width={200} height={134} src="/hacc.jpg" />
      </div>
    </div>
  );
}
