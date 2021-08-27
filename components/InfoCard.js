import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Link from "next/link";
import data from "../utils/data";

const InfoCard = ({
  id,
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div>
      {data.products.map((product) => (
        <div key={product.id}>
        <Link href={`/search/${product.slug}`} passHref>
          <div  className="flex flex-col sm:flex-row py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition transform duration-200 ease-out first:border-t last:mb-8 rounded-b-xl"
          >
            <div className="relative mb-2 h-48 sm:h-52 w-full sm:w-80 flex-shrink-0 flex items-center justify-center ">
              <img
              
                src={product.img}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col flex-grow pl-5">
              <div className="flex justify-between text-gray-700 text-md">
                <p>{product.location} </p>
                <HeartIcon className="h-7 cursor-pointer" />
              </div>
              <h1 className="text-xl">{product.title}</h1>
              <div className="border-b w-10 pt-2" />
              <p className="pt-2 text-sm text-gray-500 flex-grow">
                {product.description}
              </p>
              <div className="flex justify-between items-end pt-5">
                <p className="flex items-center">
                  <StarIcon className="h-5 text-red-400" />
                  <span className="mb-1">{product.star}</span>
                </p>

                <div>
                  <p className="text-lg lg:text-2xl font-semibold pb-2">
                    {product.price}
                  </p>
                  <p className="text-right font-extralight">{product.total}</p>
                </div>
              </div>
            </div>
          </div>

        </Link>
        </div>
      ))}
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
