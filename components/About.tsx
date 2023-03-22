import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="bg-gray-900 ">
      <div className="relative  px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl -my-10 6">
          <div className="text-center pb-20">
            <h1 className="text-5xl font-bold tracking-tight text-gray-100">
              {/* <span className="font-serif font-extrabold text-8xl">"&quot;</span> */}
              <br />
              Welcome to Speckless
            </h1>
            <div className="py-10">
              <p className="text-gray-900 dark:text-gray-300 text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium quo sit repellendus earum itaque dolorem libero
                expedita error perspiciatis repellat nesciunt, quis illo eum cum
                illum voluptate ipsum ducimus impedit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium quo sit repellendus earum itaque dolorem libero
                expedita error perspiciatis repellat nesciunt, quis illo eum cum
                illum voluptate ipsum ducimus impedit! <span className="underline text-blue-800">get a free quote</span>
              </p>
              <p className="text-gray-100 font-semibold">The Best in the business!</p>
              <hr className="w-48 h-1 mx-auto my-6 border-0 rounded md:my-10 bg-gray-300"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
