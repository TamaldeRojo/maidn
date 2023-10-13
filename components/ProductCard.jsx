import Image from "next/image";
import React from "react";
import Link from "next/link";

import {PiHeartStraightFill , PiHeartStraightBreakLight} from "react-icons/pi"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductCard = ({
    productId,
  img,
  title,
  desc,
  rating,
  price,
}) => {
  const generateRating = (rating) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-pink-600">
            {/* <IoHeartSharp/>
            <PiHeartStraightBold/> */}
            <PiHeartStraightFill/>
            <PiHeartStraightBreakLight/>
            <PiHeartStraightBreakLight/>
            <PiHeartStraightBreakLight/>
            <PiHeartStraightBreakLight/>
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-pink-600">
            <PiHeartStraightFill/>
            <PiHeartStraightFill/>
            <PiHeartStraightBreakLight/>
            <PiHeartStraightBreakLight/>
            <PiHeartStraightBreakLight/>
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-pink-600">
            <PiHeartStraightFill/>
            <PiHeartStraightFill/>
            <PiHeartStraightFill/>
            <PiHeartStraightBreakLight/>
            <PiHeartStraightBreakLight/>
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-pink-600">
          <PiHeartStraightFill/>
          <PiHeartStraightFill/>
          <PiHeartStraightFill/>
          <PiHeartStraightFill/>
          <PiHeartStraightBreakLight/>
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-pink-600">
            <PiHeartStraightFill/>
            <PiHeartStraightFill/>
            <PiHeartStraightFill/>
            <PiHeartStraightFill/>
            <PiHeartStraightFill/>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
        <Link href={`/buy?product=${productId}&img=${img}&title=${title}&desc=${desc}&rating=${rating}&price=${price}`}>
      <div>
        <Image
          className="w-auto h-[300px]  py-5 rounded-xl"
          src={img}
          width={150}
          height={250}
          alt={title}
        />
      </div>

      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>
        <div>{generateRating(rating)}</div>

        <div className="font-bold flex gap-4">
          ${price}
          <del className="text-gray-500 font-normal">
            ${parseInt(price) + 50}.00
          </del>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default ProductCard;