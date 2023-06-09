import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="bg-[url('../public/images/image2.png')] bg-no-repeat bg-left bg-cover sm:bg-fixed">
      <div className="bg-[url('../public/images/border-lines-bottom.png')]  bg-bottom bg-contain sm:bg-cover bg-no-repeat">
        <div className="relative  px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl pt-10 pb-28  sm:pb-64 lg:pb-96">
            <div className="text-center ">
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-white">
                The Pressure Washing experts at your service!
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                Family owned operated business located in Grand Prairie and
                servicing Dallas Areas. Our mission is to make your house the
                most stunning house in the neighborhood.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="tel:+4695605292"
                  className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 animate-bounce"
                >
                  Call now!
                </Link>
                <Link
                  href="/contact-us"
                  className="text-sm font-semibold leading-6 text-gray-200"
                >
                  Request quote <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
