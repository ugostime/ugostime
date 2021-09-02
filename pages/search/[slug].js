import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import data from '../../utils/data';

import { useRouter} from "next/router";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";
import Link from 'next/link';



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

const allProducts = data;


  return (
    <div>
      <Header title={`${product.title}`} />
     
      <div> 
        
        
       
      <div className="mt-8 max-w-2xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
          <div className="lg:col-start-8 lg:col-span-5">
            <div className="flex justify-between p-2 ">
              <h1 className="text-xl font-medium text-gray-700 text-md">
                {product.title}
                <HeartIcon className="h-7 cursor-pointer text-red-400" />
              </h1>
              <div>
              <p className="text-xl font-medium text-gray-700 flex-grow ">
                {product.price}
              </p>
              </div>
            </div>
          </div>

          {/* Image gallery */}
          <div key="galerija" className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
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
              <div className="flex justify-between items-end pt-5">
                  <div className="ml-1 flex items-center">
                             {[0, 1, 2, 3, 4].map((star) => (
                <StarIcon key={star}
                className={classNames(
                  product.star > star ? 'text-red-400' : 'text-gray-200',
                  'h-5 w-5 flex-shrink-0'
                )}
                aria-hidden="true"
              />  
              ))} {product.star}
               <p className="flex items-center">
                <span className="sr-only"> out of 5 stars</span>
                    </p>  </div>    
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-900"> Choose a number of Guests</h2>
                 
                </div>
              
              </div>

              <a href="/rezervacija"
                type="submit" 
                className="mt-8 w-full bg-red-400 border border-transparent rounded-full py-3 px-8 flex items-center justify-center text-base font-medium
             text-white hover:bg-red-300 hover:scale-95"
              >
                Rezervisi
              </a>
            </form>

            {/* Product details */}
            <div className="mt-10 text-gray-500">
             {product.description}              
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="mt-4 prose prose-sm text-gray-500">
              
              </div>
            </div>
          </div>
        </div>


        <section aria-labelledby="related-heading" className="mt-16 sm:mt-24">
          <h2 id="related-heading" className="text-lg font-medium text-gray-900">
            Korisnici su isto pregledali:
          </h2>

          <div className="mt-6 grid grid-cols-1  gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {allProducts.products.filter(product => product.location.toLowerCase().includes('london')).map(
             ( relatedProduct => (
              <div key={relatedProduct.id} className="group relative border bg-red-100 rounded-md p-4">
                <div className="w-full min-h-120 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-120 lg:aspect-none">
                  <img
                    src={relatedProduct.img}
                    alt={relatedProduct.alt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/search/${relatedProduct.slug}`} passHref>
                        <div>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {relatedProduct.title}
                        </div>
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-red-400">{relatedProduct.location}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{relatedProduct.price}</p>
                </div>
              </div>
            )))}
          </div>
        </section>

      </div>
    

        
    </div>

      <Footer />
    </div>
  );
}

export default SearchExample;
