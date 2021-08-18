import Head from 'next/head';
import Header from "../components/Header/Header";
//import Banner from "../components/Banner/Banner";
import ProductPage from '../components/ProductPage';
import Footer from '../components/Footer/Footer';



export default function Home( props) {
  return (
    <div className="">
      <Head>
        <title>My project</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>  

     <Header />
     
    <main className='max-w-7x1 mx-auto px-8 sm:px-16'>
    
      <section className='pt-6'>
      <ProductPage/>
      </section>

  </main>



   <Footer/>
     
    </div>
  );
}

