import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
// import Image from "next/image";
// import Slider from "./Slider";

type Props = {};

export default function Testimonials({}: Props) {
  return (
    <div className="bg-gray-900">
      <div className="bg-[url('../public/images/water-drops.png')] bg-no-repeat bg-center bg-cover bg-fixed ">
        <div className="bg-[url('../public/images/border-lines.png')]  bg-top bg-contain sm:bg-cover bg-no-repeat">
          <div className="bg-[url('../public/images/border-lines-bottom.png')]  bg-bottom bg-contain sm:bg-cover bg-no-repeat">
            {/*  */}
            <div className="flex flex-col items-center p-10 sm:pb-56">
              <h4 className="uppercase tracking-[10px] text-gray-500 text-sm mt-20 sm:mt-36">
                Testimonials
              </h4>
              <h2 className="uppercase font-extrabold text-5xl text-center py-5 text-gray-700">
                What our customers are saying
              </h2>
              <p className="text-center py-5 text-gray-600 max-w-3xl">
                See what people are saying about Speckless Power Wash! When it
                comes to pressure washing, Dallas/Fort Worth residents know we
                stand for great service.
              </p>
              <div className="">
                {/* ----------------------------------------Card 1------------------------------------------ */}
                <section className="relative isolate overflow-hidden bg-white py-24 px-6 sm:py-32 lg:px-8 shadow-xl dark:bg-gray-900 mb-24 sm:mb-72 rounded-md">
                  <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                  <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white  dark:bg-gray-600 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                  <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <div className="flex flex-row justify-center">
                      <StarIcon width={30} fill="gold" />
                      <StarIcon width={30} fill="gold" />
                      <StarIcon width={30} fill="gold" />
                      <StarIcon width={30} fill="gold" />
                      <StarIcon width={30} fill="gold" />
                    </div>

                    <figure className="mt-10">
                      <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 dark:text-gray-200 sm:text-2xl sm:leading-9">
                        <p>
                          “Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nemo expedita voluptas culpa sapiente alias
                          molestiae. Numquam corrupti in laborum sed rerum et
                          corporis.”
                        </p>
                      </blockquote>
                      <figcaption className="mt-10">
                        {/* <img
                          className="mx-auto h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        /> */}
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                          <div className="font-semibold text-gray-900 dark:text-gray-200">
                            Judith Black
                          </div>
                          <svg
                            viewBox="0 0 2 2"
                            width={3}
                            height={3}
                            aria-hidden="true"
                            className="fill-gray-900"
                          >
                            <circle cx={1} cy={1} r={1} />
                          </svg>
                          <div className="text-gray-600 dark:text-gray-300">
                            CEO of Workcation
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </section>
                {/* ----------------------------------------Card 2------------------------------------------ */}
              </div>

              {/*  */}

              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
