import React, { Component } from "react";
// import ReactDOM from 'react-dom/client';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/outline";

type Props = {};

export default function Slider({}: Props) {
  return (
    <Carousel>
      <div>
        <section className="relative isolate overflow-hidden bg-white py-24 px-6 sm:py-32 lg:px-8 shadow-xl dark:bg-gray-900">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white  dark:bg-gray-900 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
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
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  expedita voluptas culpa sapiente alias molestiae. Numquam
                  corrupti in laborum sed rerum et corporis.”
                </p>
              </blockquote>
              <figcaption className="mt-10">
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
      </div>
      {/* ------------------------------------------------------------------------ */}
      <div>
        <section className="relative isolate overflow-hidden bg-white py-24 px-6 sm:py-32 lg:px-8 shadow-xl dark:bg-gray-900">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white  dark:bg-gray-900 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
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
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  expedita voluptas culpa sapiente alias molestiae. Numquam
                  corrupti in laborum sed rerum et corporis.”
                </p>
              </blockquote>
              <figcaption className="mt-10">
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
      </div>
      {/* ------------------------------------------------------------------------ */}
      <div>
        <section className="relative isolate overflow-hidden bg-white py-24 px-6 sm:py-32 lg:px-8 shadow-xl dark:bg-gray-900">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white  dark:bg-gray-900 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
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
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  expedita voluptas culpa sapiente alias molestiae. Numquam
                  corrupti in laborum sed rerum et corporis.”
                </p>
              </blockquote>
              <figcaption className="mt-10">
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
      </div>
      {/* ------------------------------------------------------------------------ */}
      
    </Carousel>
  );
}
