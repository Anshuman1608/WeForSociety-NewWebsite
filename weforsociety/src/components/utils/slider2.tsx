import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import imageAbout1 from '../../assets/images/about.jpg';

const SliderHome = () => {
  return (
    <section className="ezy__header28 dark py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-y-6 lg:gap-x-6 text-center md:text-start">
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
            <h1 className="text-[40px] leading-none font-medium md:text-[62px] mb-6 pl-4 md:pl-8">
            Join hands with us to create a brighter future
            </h1>
            <p className="text-xl leading-snug opacity-80 pl-4 md:pl-8">
            Empower Lives and Inspire Changes. Embrace Hope, Seek Help, Stay Strong. A Gift of Hope, Changing Lives for Good.
            </p>
            <div className="mt-8 py-3 px-8">
              <button className="py-3 px-8 bg-blue-600 hover:bg-opacity-90 duration-300 rounded text-white pl-4 md:pl-6">
                Donate Now
              </button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="ezy__header28-bg-holder flex items-center justify-center relative">
              <img
                src={imageAbout1}
                alt="Support Our Cause"
                className="max-w-full h-auto"
              />
              <a
                href="#!"
                className="absolute flex justify-center items-center w-12 h-12 rounded-full text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-white bg-opacity-30 cursor-pointer"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white bg-opacity-10 w-16 h-16"></div>
                <FontAwesomeIcon icon={faPlay} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderHome;
