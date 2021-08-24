import Head from 'next/head';
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import MediumCard from '../components/MediumCard';
import Footer from '../components/Footer/Footer';




 function Home( {searchResults}) {
  return (
    <div className="">
      <Head>
        <title>Ugostime</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>  

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


export const getServerSideProps = async () => {
  const searchResults = await fetch("https://jsonkeeper.com/b/WEGM").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
};