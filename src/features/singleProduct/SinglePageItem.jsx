import React from "react";

import { MdOpenInFull } from "react-icons/md";
import Fancybox from "../../ui/Fancybox";
import SingleProductFooter from "./SingleProductFooter";

import SingleProductInfo from "./SingleProductInfo";
const SinglePageItem = ({ singleItem }) => {
  const { name, image } = singleItem;
  return (
    <article className="section-center">
      <div className="flex flex-col md:flex-row items-start justify-center gap-7">
        <div className="w-full sm:flex-1">
          <Fancybox
            options={{
              Carousel: {
                infinite: false,
              },
            }}
          >
            <div className="group border border-greyBorder min-w-[20rem] p-10 mb-5 cursor-pointer">
              <a data-fancybox="gallery" href={image} className="relative">
                <img src={image} alt={name} />
                <p
                  className="hidden group-hover:block text-greyBorder text-4xl
               absolute left-1/2 bottom-1/2"
                >
                  <MdOpenInFull />
                </p>
              </a>
            </div>
            <div className="border border-greyBorder max-w-[7rem] p-3 cursor-pointer">
              <a data-fancybox="gallery" href={image}>
                <img src={image} alt={name} />
              </a>
            </div>
          </Fancybox>
        </div>
        {/* procut info */}
        <SingleProductInfo singleItem={singleItem} />
      </div>
      <SingleProductFooter singleItem={singleItem} />
    </article>
  );
};

export default SinglePageItem;
