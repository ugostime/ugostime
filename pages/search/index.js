import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../../components/InfoCard";
import Map from "../../components/Map";
import Filteri from "../../components/Filteri";
import React, {useEffect, useState} from "react";
//import data from "../../utils/data";



function Search ({searchResults}) {
  
  const [loadedProducts, setLoadedProducts] = useState([]);

  
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "MM/dd/yyyy");
  const formattedEndDate = format(new Date(endDate), "MM/dd/yyyy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  useEffect(() => {
    setLoadedProducts([]);
   
  }, []);
 

  console.log(formattedEndDate)
  return (
    <div className="h-screen">
      <Header title="Pretraga" placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs font-semibold mb-2">
            100+ Stays -{" "}
            <span className="bg-red-400 text-white px-2 py-1 rounded-xl">
              {formattedStartDate}
            </span>{" "}
            -{" "}
            <span className="bg-red-400 text-white px-2 py-1 rounded-xl">
              {formattedEndDate}
            </span>{" "}
            - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold text-gray-700 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Places</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
            
          </div>
          <div>
          <Filteri />
          </div>
          
          <div   className="flex flex-col">
         
            
          <InfoCard searchResults={loadedProducts}  />
          

          </div>
            
        </section>
        <section className="hidden xl:inline-flex min-w-[600px] border-l-2 border-gray-300">
          <Map searchResults={searchResults}/>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
export const getServerSideProps = async () => {
  const searchResults = await fetch("https://jsonkeeper.com/b/FH1Q").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
};