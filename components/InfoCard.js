import Image from "next/image";
import {HeartIcon} from "@heroicons/react/outline";
import {StarIcon} from "@heroicons/react/solid";



const searchResults = [
    {img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    location:"Podgorica",
    title:"Dvosoban stan u Podgorici 55m2",
    description:"Stan se nalazi na lepoj lokaciji u Podgorici nedaleko od plaze",
    star:"4.5",
    price:"25 EUR/dnevno",
    total:"500EUR",
},
{img:"https://images.unsplash.com/photo-1505692433770-36f19f51681d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    location:"Pariz",
    title:"Dvosoban stan u samom centru Parizam 45 m2",
    description:"Stan se nalazi na lepoj lokaciji u Parizu",
    star:"4.5",
    price:"35 EUR/dnevno",
    total:"570EUR",
},
{
    img:" https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1387&q=80",
    location:"Beograd",
    title:"Trosoban stan U Beogradu 60m2",
    description:"Stan se nalazi u samom centru Beograda",
    star:"4.35",
    price:"40 EUR/dnevno",
    total:"600EUR",
   

},
{
    img:"https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    location:"Novi Sad",
    title:"Trosoban stan U Beogradu 70m2",
    description:"Stan se nalazi u samom centru Beograda",
    star:"4.8",
    price:"45 EUR/dnevno",
    total:"700EUR",
  
}
]

function InfoCard() {
    return (
                <div className="flex bg-white">
        <div className="flex py-7 px-2  sm:py-12 sm:px-2">
          <div className="flex">

            <div className="flex ">
          
             <div className="">
              {searchResults.map((item) => (
               <div className="flex py-7 px-2 pr-4 border-b cursor-pointer 
               hover:bg-opacity-80 hover:shadow-lg transition duration-200 ease-out">
                     <div className=" flex pt-4 border-gray-200 ">
                   
                   
               <div
                  key={item.location}
                  className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 '
                >
                    <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 first:border-t">
                      <img  src={item.img}  alt={item.title}className="rounded-2xl" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col flex-grow pl-5">
                    <div className="flex justify-between">
                    <p >{item.location}</p>
                    <HeartIcon className="h-7 cursor-pointer"/>
                    </div>
                    <h4 className="text-xl">{item.title}</h4>
                    <div className="border-b w-10 pt-2"/>
                    <p className="pt-2 text-sm text-gray-500 flex-grow">{item.description}</p>
                    <div className="flex justify-between items-end pt-5">
             
             <p className="flex items-center">
              <StarIcon className="h-5 text-red-400">
             {item.star}</StarIcon>
             <div>
                 <p className="text-lg font-semibold pb-2 lg:text-2xl">
                 {item.price}
                 </p>
                 <p className="text-right font-extralight">
                 {item.total}
                 </p>
             </div>
              </p> 
         </div>
                  </div>
                  </div>
                  </div>
                  </div>
              ))}
              
            </div>
            </div>
          </div>
        </div>
      </div>
    
    );}

export default InfoCard
