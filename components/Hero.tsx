import React, { useState } from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="bg-[url('../public/images/image2.png')] bg-no-repeat bg-left bg-cover bg-fixed">
      <div className="bg-[url('../public/images/border-lines-bottom.png')]  bg-bottom bg-contain sm:bg-cover bg-no-repeat">
        <div className="relative  px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl pt-32 pb-64  sm:pb-64 lg:pb-96">
            <div className="text-center ">
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-white  ">
                The Pressure Washing experts at your service!
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-100">
                Family owned operated business located in Grand Prairie and
                servicing Dallas Areas. Our mission is to make your house the
                most stunning house in the neighborhood.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 animate-bounce"
                >
                  Call now!
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
