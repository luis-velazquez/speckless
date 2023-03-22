import React from "react";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="bg-gray-900 px-4 pb-20 sm:-mt-36">
      <div className="flex flex-col relative md:text-left md:flex-row max-w-7xl px-4 sm:px-10 justify-evenly mx-auto items-center bg-gradient-to-tr from-[#F5F7FA] to-[#f4f4f4] p-10 rounded-lg">
        <div className="p-6 dark:text-gray-800">
          <h4 className=" text-4xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-center ">
            Lets work together to come up with a quote that works for you!
          </h4>
          <div className="my-5 grid grid-cols-1 ">
            <p className="text-center">
              Sealing, Striping, Residential Pressure Washing: Dallas & Fort
              Worth
            </p>
            <div className="text-center grid sm:grid-cols-3 my-6">
              <div className="flex flex-col items-center">
                <PhoneIcon width={75} className="animate-pulse" stroke="blue"/>
                <p className="text-xl font-semibold">123-456-7890</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPinIcon width={75} className="animate-pulse" stroke="blue"/>
                <p className="text-xl font-semibold">Dallas TX 75044</p>
              </div>
              <div className="flex flex-col items-center">
                <EnvelopeIcon width={75} className="animate-pulse" stroke="blue"/>
                <p className="text-xl font-semibold">test@tester.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
