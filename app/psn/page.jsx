import React from 'react'

import ProductCard from '/components/ProductCard';

function Psn() {
    const productsData = [
        {
            productId: 1,
            img: "/eldenringGame.jpg",
            title: "elden ring",
            desc: "GLOBAL KEY",
            rating: 5,
            price: "0.1",
        },
        {
            productId: 2,
            img: "/s.jpg",
            title: "stray",
            desc: "LATAM KEY",
            rating: 4,
            price: "0.05",
        },
        {
            productId: 3,
            img: "/sp.jpg",
            title: "spiderman 2",
            desc: "GLOBAL KEY",
            rating: 4,
            price: "0.01",
        },
        {
            productId: 4,
            img: "/un.jpg",
            title: "uncharted",
            desc: "",
            rating: 4,
            price: "0.05",
        },
        {
            productId: 4,
            img: "/mc.jpg",
            title: "minecraft",
            desc: "",
            rating: 4,
            price: "0.05",
        },
        {
            productId: 4,
            img: "/mc2.jpg",
            title: "minecraft story mode",
            desc: "",
            rating: 4,
            price: "0.1",
        },
        {
            productId: 4,
            img: "/di2.jpg",
            title: "dead island 2",
            desc: "",
            rating: 4,
            price: "0.2",
        },
        {
            productId: 4,
            img: "/st6.jpg",
            title: "street fighter 6",
            desc: "",
            rating: 4,
            price: "0.1",
        }
      ];
  return (
    <>
    <div>
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">
                PC Keys!
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

export default Psn