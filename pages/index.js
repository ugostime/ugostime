import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import MediumCard from '../components/MediumCard';
import Footer from '../components/Footer/Footer';




 function Home( ) {
  return (
    <div className="">
     <Header />
     
      <Banner>
        <div className="absolute inset-0">
     
      </div>
      </Banner> 
    

    <main className='max-w-7x1 mx-auto px-8 sm:px-16'>
    
      <section className='pt-6'>
      <MediumCard/>
      </section>
      

  </main>

  

   <Footer/>
     
    </div>
  );
}

export default Home


