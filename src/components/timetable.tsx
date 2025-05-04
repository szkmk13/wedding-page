import React from "react";
import Image from "next/image";

const WeddingSchedule = () => {

  return (
    <div className="w-full py-8 backdrop-blur-sm sm:py-12 md:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-main mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Harmonogram Zawodów Weselnych
        </h2>
        <Image
          // src="/roadmapa3.png"
          src="/roadmapa.svg"
          alt="asset"
          width={768}
          height={1376}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default WeddingSchedule;
