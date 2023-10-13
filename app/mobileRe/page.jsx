import React from 'react'

import ProductCard from '/components/ProductCard';

function MobileRe() {
    const productsData = [
        {
            productId: 1,
            img: "/at&t.png",
            title: "At&t recharge",
            desc: "",
            rating: 5,
            price: "0.2",
        },
        {
            productId: 2,
            img: "/movistar.png",
            title: "movistar recharge",
            desc: "",
            rating: 4,
            price: "0.05",
        },
        {
            productId: 3,
            img: "/telcel.png",
            title: "telcel recharge",
            desc: "",
            rating: 4,
            price: "0.01",
        },
        {
            productId: 4,
            img: "/unefon.png",
            title: "unefon",
            desc: "",
            rating: 4,
            price: "0.05",
        }
      ];
  return (
    <>
    <div>
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">
                Most Popular!
            </h2>

            <div className="grid grid-cols-1 place-items-center 
            sm:place-items-start sm:grid-cols-2 lg:grid-col-3 
            xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                {productsData.map((item, index) => (
                    <ProductCard
                    key={index}
                    productId={item.productId}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    rating={item.rating}
                    price={item.price}
                    />
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default MobileRe