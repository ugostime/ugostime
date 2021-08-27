import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {useRouter} from 'next/router';
import data from '../../utils/data';
import Head from "next/head";
import { useRouter } from "next/router";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


function SearchExample() {
const router = useRouter();
const {slug} = router.query;
const product = data.products.find((a) => a.slug === slug);
if(!product) {
  return <div>Product not found!</div>
}
  return (
    <div>
      <Head/>
      <Header  />
     
      <div> 
        
        
       
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
                className="mt-8 w-full bg-red-400 border border-transparent rounded-full py-3 px-8 flex items-center justify-center text-base font-medium
             text-white hover:bg-red-300 hover:scale-95"
              >
                Rezervisi
              </button>
            </form>

            {/* Product details */}
            <div className="mt-10">
             {product.description}

              
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="mt-4 prose prose-sm text-gray-500">
              
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>

      <Footer />
    </div>
  );
}

export default SearchExample;
/*
export const getServerSideProps = async (context) => {
    /*const searchId = context.params.searchId;
    console.log(searchId);
    const searchResults = await fetch("https://jsonkeeper.com/b/QJ6N").then(
      (res) => res.json()
    );
  
    return {
      props: {
       
        searchResults,
      },
    };
  }; */