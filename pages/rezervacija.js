import  { useRouter } from 'next/router';
import React, {useEffect} from 'react';



export default function Rezervacija() {
    const router = useRouter();
  useEffect(() => {
    router.push('/prijava');
      return true 
     
  }, [])
 
  return (
 <div></div>
  )
    
    
}
