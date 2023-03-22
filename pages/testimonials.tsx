import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

type Props = {};

export default function testimonials({}: Props) {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="bg-[url('../public/images/water-drops.png')] bg-no-repeat bg-cover bg-center ">
          <p className="w-full py-36  text-gray-700 text-4xl sm:text-6xl font-bold text-center shadow-2xl">
            Testimonials
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-center mx-20 justify-center max-w-4xl">
            {/* ----------------------------Start--------------------------- */}
            <div className="my-8">
              <div className="flex flex-row justify-center">
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
              </div>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, nulla perspiciatis excepturi repellat vel rerum dolorum
                laboriosam officia saepe officiis, aspernatur deserunt dicta.
                Est praesentium quia ex, perspiciatis autem magni.
              </p>
            </div>
            {/* ----------------------------Start--------------------------- */}
            <div className="  my-8">
              <div className="flex flex-row justify-center">
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, nulla perspiciatis excepturi repellat vel rerum dolorum
                laboriosam officia saepe officiis, aspernatur deserunt dicta.
                Est praesentium quia ex, perspiciatis autem magni.
              </p>
            </div>
            {/* ----------------------------Start--------------------------- */}
            <div className=" my-8">
              <div className="flex flex-row justify-center">
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, nulla perspiciatis excepturi repellat vel rerum dolorum
                laboriosam officia saepe officiis, aspernatur deserunt dicta.
                Est praesentium quia ex, perspiciatis autem magni.
              </p>
            </div>
            {/* ----------------------------Start--------------------------- */}
            <div className=" my-8">
              <div className="flex flex-row justify-center">
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, nulla perspiciatis excepturi repellat vel rerum dolorum
                laboriosam officia saepe officiis, aspernatur deserunt dicta.
                Est praesentium quia ex, perspiciatis autem magni.
              </p>
            </div>
            {/* ----------------------------Start--------------------------- */}
            <div className=" my-8">
              <div className="flex flex-row justify-center">
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, nulla perspiciatis excepturi repellat vel rerum dolorum
                laboriosam officia saepe officiis, aspernatur deserunt dicta.
                Est praesentium quia ex, perspiciatis autem magni.
              </p>
            </div>
            {/* ----------------------------Start--------------------------- */}
            <div className=" my-8">
              <div className="flex flex-row justify-center">
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, nulla perspiciatis excepturi repellat vel rerum dolorum
                laboriosam officia saepe officiis, aspernatur deserunt dicta.
                Est praesentium quia ex, perspiciatis autem magni.
              </p>
            </div>
            {/* ----------------------------Start--------------------------- */}
            <div className=" my-8">
              <div className="flex flex-row justify-center">
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, nulla perspiciatis excepturi repellat vel rerum dolorum
                laboriosam officia saepe officiis, aspernatur deserunt dicta.
                Est praesentium quia ex, perspiciatis autem magni.
              </p>
            </div>
            {/* ----------------------------Start--------------------------- */}
            <div className=" my-8">
              <div className="flex flex-row justify-center">
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
                <StarIcon width={30} fill="gold" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, nulla perspiciatis excepturi repellat vel rerum dolorum
                laboriosam officia saepe officiis, aspernatur deserunt dicta.
                Est praesentium quia ex, perspiciatis autem magni.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
