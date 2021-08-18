import Head from 'next/head';
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import MediumCard from '../components/MediumCard';
import Footer from '../components/Footer/Footer';


export default function Home( props) {
  return (
    <div className="">
      <Head>
        <title>Ugostime</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>  

     <Header />
      <Banner /> 

    <main className='max-w-7x1 mx-auto px-8 sm:px-16'>
    
      <section className='pt-6'>
      <MediumCard/>
      </section>

  </main>

  

   <Footer/>
     
    </div>
  );
}

