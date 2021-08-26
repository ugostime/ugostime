import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import {
  Dialog,
  Popover,
  RadioGroup,
  Tab,
  Transition,
} from "@headlessui/react";

import { StarIcon } from "@heroicons/react/solid";
import data from "../utils/data";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AboutProduct() {
  // const [open, setOpen] = useState(false)
  //const router = useRouter();
  // const {id, title}= router.query;
  return (
    <div> 
        {data.products.map((product)=>

        
       
      <div className="mt-8 max-w-2xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
          <div className="lg:col-start-8 lg:col-span-5">
            <div className="flex justify-between">
              <h1 className="text-xl font-medium text-gray-900">
                {product.title}
              </h1>
              <p className="text-xl font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          </div>

          {/* Image gallery */}
          <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
            <h2 className="sr-only">Images</h2>

            <div  className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
              {product.images.map((image) => (
                <img
                  key={image.imageId}
                  src={image.imageSrc}
                  alt={image.imageAlt}
                  className={classNames(
                    image.primary
                      ? "lg:col-span-2 lg:row-span-2"
                      : "hidden lg:block",
                    "rounded-lg"
                  )}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 lg:col-span-5">
            <form>
              {/* Guest picker */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-900"> Choose a number of Guests</h2>
                 
                </div>

             
              </div>

              <button
                type="submit"
                className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium
             text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Rezervisi
              </button>
            </form>

            {/* Product details */}
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Description</h2>

              
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="mt-4 prose prose-sm text-gray-500">
              
              </div>
            </div>
          </div>
        </div>
      </div>
       )}
    </div>
  );
}

export default AboutProduct;

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
