import React from 'react'

import ProductCard from '/components/ProductCard';

function Pc() {
    const productsData = [
        {
            productId: 1,
            img: "/bs4.jpg",
            title: "COD black ops 4",
            desc: "GLOBAL KEY",
            rating: 5,
            price: "0.2",
        },
        {
            productId: 2,
            img: "/riot.png",
            title: "Riot points",
            desc: "LATAM KEY",
            rating: 4,
            price: "0.05",
        },
        {
            productId: 3,
            img: "/w11.png",
            title: "windows 11",
            desc: "GLOBAL KEY",
            rating: 4,
            price: "0.01",
        },
        {
            productId: 4,
            img: "/ps.png",
            title: "Adobe photoshop",
            desc: "",
            rating: 4,
            price: "0.05",
        },
        {
            productId: 4,
            img: "/bt42.jpg",
            title: "Battlefield 2042",
            desc: "",
            rating: 4,
            price: "0.05",
        },
        {
            productId: 4,
            img: "/cp77.jpg",
            title: "cyberpunk 20277",
            desc: "",
            rating: 4,
            price: "0.1",
        },
        {
            productId: 4,
            img: "/st.jpg",
            title: "Starfield",
            desc: "",
            rating: 4,
            price: "0.2",
        },
        {
            productId: 4,
            img: "/pz.jpg",
            title: "proyect zomboid",
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

export default Pc