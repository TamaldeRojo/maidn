import React from 'react'
import ProductCard from './ProductCard';

const productsData = [
    {
        productId: 1,
        img: "/e.jpg",
        title: "Enter The Gungeon",
        desc: "LATAM KEY",
        rating: 5,
        price: "0.2",
    },
    {
        productId: 2,
        img: "/nGame.jpg",
        title: "Nekopara V1",
        desc: "EUW KEY",
        rating: 4,
        price: "0.1",
    },
    {
        productId: 3,
        img: "/eldenringGame.jpg",
        title: "Elden Ring",
        desc: "ASIA KEY",
        rating: 4,
        price: "0.01",
    },
    {
        productId: 4,
        img: "/fifaGame.jpg",
        title: "FIFA 22",
        desc: "LATAM KEY",
        rating: 4,
        price: "0.05",
    },
    {
        productId: 5,
        img: "/zeldaGame.jpg",
        title: "Zelda Tears of the Kingdom",
        desc: "GLOBAL KEY",
        rating: 4,
        price: "1",
    },
    {
        productId: 6,
        img: "/robux.jpg",
        title: "Robux 100",
        desc: "US KEY",
        rating: 4,
        price: "0.03",
    },
  ];

function Products() {
  return (
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
  )
}

export default Products