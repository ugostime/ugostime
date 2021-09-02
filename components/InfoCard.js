import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";
import data from "../utils/data";

/*
const allProducts =  {
  products: [
    {
      slug: "apartman-1",
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      images: [
        {
            imageId: 1,
          imageSrc: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          imageAlt: "Back of women's Basic Tee in black.",
          primary: true,
        },
        {
            imageId: 2,
          imageSrc: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Side profile of women's Basic Tee in black.",
          primary: false,
        },
        {
            imageId: 3,
          imageSrc: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
          imageAlt: "Front of women's Basic Tee in black.",
          primary: false,
        },
        {
          imageId: 4,
        imageSrc: 'https://images.unsplash.com/flagged/photo-1600002807685-2345c0b50a7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        imageAlt: "Front of women's Basic Tee in black.",
        primary: false,
      },
      {
        imageId: 5,
      imageSrc: 'https://images.unsplash.com/photo-1560185127-bdf08e449371?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjBpbnRlcmlvciUyMGJhdGhyb29tfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
      ],
      location: "Beograd",
      title: "Stay at this spacious Edwardian House",
      description:
        "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.73,
      price: "£30 / night",
      total: "£117 total",
      long: -0.0022275,
      lat: 51.5421655,
    },
    {
      slug: "apartman-2",
      img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      images: [
        {
          imageId: 1,
        imageSrc: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        imageAlt: "Back of women's Basic Tee in black.",
        primary: true,
      },
      {
          imageId: 2,
        imageSrc: 'https://images.unsplash.com/photo-1600047508006-16c1f3111ef8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        imageAlt: "Side profile of women's Basic Tee in black.",
        primary: false,
      },
      {
          imageId: 3,
        imageSrc: 'https://images.unsplash.com/photo-1602028915047-37269d1a73f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGtpdGNoZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        imageAlt: "Front of women's Basic Tee in black.",
        primary: false,
      },
      {
        imageId: 4,
      imageSrc: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
    {
      imageId: 5,
    imageSrc: 'https://images.unsplash.com/photo-1613849925594-415a32298f54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGJhdGhyb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    imageAlt: "Front of women's Basic Tee in black.",
    primary: false,
  },
      ],
      location: "London",
      title: "Independant luxury studio apartment",
      description:
        "2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen",
      star: 4.3,
      price: "£40 / night",
      total: "£157 total",
      long: -0.095091,
      lat: 51.48695,
    },
    {
      slug: "apartman-3",
     img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
     images: [
      {
        imageId: 1,
      imageSrc: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
        imageId: 2,
      imageSrc: 'https://images.unsplash.com/photo-1600488999585-e4364713b90a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGJhdGhyb29tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
        imageId: 3,
      imageSrc: 'https://images.unsplash.com/photo-1600566752871-041b45cf7173?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1087&q=80',
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
    {
      imageId: 4,
    imageSrc: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1091&q=80',
    imageAlt: "Front of women's Basic Tee in black.",
    primary: false,
  },
  {
    imageId: 5,
  imageSrc: 'https://images.unsplash.com/photo-1560185009-dddeb820c7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
  imageAlt: "Front of women's Basic Tee in black.",
  primary: false,
},
      ],
     
     location: "Pariz",
      title: "London Studio Apartments",
      description:
        "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine",
      star: 3.8,
      price: "£35 / night",
      total: "£207 total",
      long: -0.135638,
      lat: 51.521916,
    },
    {
      slug: "apartman-4",
      img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
       
      images: [
        {
          imageId: 1,
        imageSrc: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        imageAlt: "Back of women's Basic Tee in black.",
        primary: true,
      },
      {
          imageId: 2,
        imageSrc: 'https://images.unsplash.com/photo-1571843439991-dd2b8e051966?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGtpdGNoZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        imageAlt: "Side profile of women's Basic Tee in black.",
        primary: false,
      },
      {
          imageId: 3,
        imageSrc: 'https://images.unsplash.com/photo-1619992518071-8645fd575807?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        imageAlt: "Front of women's Basic Tee in black.",
        primary: false,
      },
      {
        imageId: 4,
      imageSrc: 'https://images.unsplash.com/photo-1609946860441-a51ffcf22208?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJhdGhyb29tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
    {
      imageId: 5,
    imageSrc: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    imageAlt: "Front of women's Basic Tee in black.",
    primary: false,
  },
      ],
      location: "Beograd",
      title: "30 mins to Oxford Street, Excel London",
      description:
        "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.1,
      price: "£55 / night",
      total: "£320 total",
      long: -0.069961,
      lat: 51.472618,
    },
    {
      slug: "apartman-5",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      images: [
        {
          imageId: 1,
        imageSrc: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        imageAlt: "Back of women's Basic Tee in black.",
        primary: true,
      },
      {
          imageId: 2,
        imageSrc: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        imageAlt: "Side profile of women's Basic Tee in black.",
        primary: false,
      },
      {
          imageId: 3,
        imageSrc: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        imageAlt: "Front of women's Basic Tee in black.",
        primary: false,
      },
      {
        imageId: 4,
      imageSrc: 'https://images.unsplash.com/photo-1560185008-b033106af5c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
    {
      imageId: 5,
    imageSrc: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0aHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    imageAlt: "Front of women's Basic Tee in black.",
    primary: false,
  },
      ],     
      location: "Amsterdam",
      title: "Spacious Peaceful Modern Bedroom",
      description:
        "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning",
      star: 5.0,
      price: "£60 / night",
      total: "£450 total",
      long: -0.08472,
      lat: 51.510794,
    },
    {
      slug: "apartman-6",
      img:"https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      images: [
        {
          imageId: 1,
        imageSrc: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        imageAlt: "Back of women's Basic Tee in black.",
        primary: true,
      },
      {
          imageId: 2,
        imageSrc: 'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        imageAlt: "Blue bedroom in apartman 6",
        primary: false,
      },
      {
          imageId: 3,
        imageSrc: 'https://images.unsplash.com/photo-1560448204-61dc36dc98c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        imageAlt: "Living room apartman 6",
        primary: false,
      },
      {
        imageId: 4,
      imageSrc: 'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
      imageAlt: "Cozy room in apartman 6",
      primary: false,
    },
    {
      imageId: 5,
    imageSrc: 'https://images.unsplash.com/photo-1613013261832-a5d86dba9421?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
    imageAlt: "Bathroom apartman 6",
    primary: false,
  },
      ],
      
      location: "London",
      title: "The Blue Room In London",
      description:
        "2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine",
      star: 4.23,
      price: "£65 / night",
      total: "£480 total",
      long: -0.094116,
      lat: 51.51401,
    },
    {
      slug: "apartman-7",
      img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
       
      images: [
        {
          imageId: 1,
        imageSrc: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        imageAlt: "Back of women's Basic Tee in black.",
        primary: true,
      },
      {
          imageId: 2,
        imageSrc: 'https://images.unsplash.com/photo-1612965607446-25e1332775ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        imageAlt: "Side profile of women's Basic Tee in black.",
        primary: false,
      },
      {
          imageId: 3,
        imageSrc: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        imageAlt: "Front of women's Basic Tee in black.",
        primary: false,
      },
      {
        imageId: 4,
      imageSrc: 'https://images.unsplash.com/photo-1560448075-bb485b067938?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
    {
      imageId: 5,
    imageSrc: 'https://images.unsplash.com/photo-1616486232086-81d47190669a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    imageAlt: "Front of women's Basic Tee in black.",
    primary: false,
  },
      ],
      location: " London",
      title: "5 Star Luxury Apartment",
      description:
        "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 3.85,
      price: "£90 / night",
      total: "£650 total",
      long: -0.109889,
      lat: 51.521245,
    },
  ],
};*/

const InfoCard =() => {
  return (
    <div>
     {data.products.filter(product => product.location.toLowerCase().includes('london')).map(
              ( (filteredProduct) => (
     
       
        <div key={filteredProduct.id} className="flex flex-col sm:flex-row py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition transform duration-200 ease-out first:border-t last:mb-8 rounded-b-xl"
        
        > <Link key="search-3" href={`/search/${filteredProduct.slug}`} >
            <div   className="relative mb-2 h-48 sm:h-52 w-full sm:w-80 flex-shrink-0 flex items-center justify-center ">
              <img
              key={filteredProduct.id}
                src={filteredProduct.img}
                layout="fill"
                className="rounded-2xl"
              />
            </div>
            </Link>
            <div className="flex flex-col flex-grow pl-5">
              <div className="flex justify-between text-gray-700 text-md">
                <p>{filteredProduct.location} </p>
                <HeartIcon className="h-7 cursor-pointer" />
              </div>
              <h1 className="text-xl">{filteredProduct.title}</h1>
              <div className="border-b w-10 pt-2" />
              <p className="pt-2 text-sm text-gray-500 flex-grow">
                {filteredProduct.description}
              </p>
              <div className="flex justify-between items-end pt-5">
                <p className="flex items-center">
                  <StarIcon className="h-5 text-red-400" />
                  <span className="mb-1">{filteredProduct.star}</span>
                </p>

                <div>
                  <p className="text-lg lg:text-2xl font-semibold pb-2">
                    {filteredProduct.price}
                  </p>
                  <p className="text-right font-extralight">{filteredProduct.total}</p>
                </div>
              </div>
            </div>
          </div>

      
      )))}
    </div>
  );
};

export default InfoCard;
/*

export const getServerSideProps = async () => {
  const searchResults = await fetch("https://jsonkeeper.com/b/WEGM").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
};*/
