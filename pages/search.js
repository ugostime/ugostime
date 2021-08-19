import {useRouter} from "next/dist/client/router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {format} from "date-fns";
import InfoCard from '../components/InfoCard';






export default function Search() {

const router = useRouter();
const { location, startDate, endDate, noOfGuests} = router.query;

const formattedStartDate = format(new Date(startDate), "dd MMMM yy"); 
const formattedEndDate = format(new Date(endDate), "dd MMMM yy"); 
const range = `${formattedStartDate} - ${formattedEndDate}`;
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests}`}/>

            

<main className="flex">
    <section className="flex-grow pt-14 px-6">
        <p className="text-xs">Smeštaj {formattedStartDate} - {formattedEndDate}  za {noOfGuests} osoba</p>
    <h1 className="text-3xl font-semibold mt-2 mb-6">{location}</h1>
    
    <div className="hidden md:inline-flex lg:inline-flex mb-5 space-x-3 text-gray-800 whilespaces-nowrap">
        <p className="button">Otkaži fleksibilnost</p>
        <p className="button">Tip smeštaja</p>
        <p className="button">Cena</p>
        <p className="button">Sobe</p>
        <p className="button">Još filtera</p>
    </div>
<div className="flex flex-col">
    <InfoCard 
    
    />

    
    </div>

    </section>

  

</main>

            <Footer />
        </div>
    )
}







