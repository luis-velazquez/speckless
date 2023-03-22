import Image from "next/image";
import React from "react";

type Props = {};

export default function Info({}: Props) {
  return (
    <div className="bg-gray-900 px-4 pb-20 mt-4">
      <div className="flex flex-col relative md:text-left md:flex-row max-w-7xl px-4 sm:px-10 justify-evenly mx-auto items-center bg-gradient-to-tr from-[#F5F7FA] to-[#f4f4f4] p-10 rounded-xl">
        <Image
          className="w-[100rem] p-10 founded"
          src="/images/pressure-washer.png"
          alt="Pressure Washing"
          width={300}
          height={300}
        />
        <div className="max-w-md shadow-xl">
          <div className="p-6 dark:text-gray-800">
            <h4 className=" text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text">
              Why Choose Us?{" "}
            </h4>
            <p className="font-semibold">BIO FRIENDLY CLEANERS</p>
            <p>
              We always use the most bit-friendly chemicals available in order
              to protect our local landscape.
            </p>
            <p className="font-semibold">WASTEWATER FILTRATION</p>
            <p>
              We offer wastewater filtration to keep pollutants from entering
              the local water source.
            </p>
            <p className="font-semibold">INSURED</p>
            <p>
              We are fully insured so you can rest easy knowing that your
              property is in safe hands.
            </p>
            <a href="/contact-us">
              <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
