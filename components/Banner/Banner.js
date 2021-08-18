import Image from 'next/image';



function Banner() {
    return (
<div className="relative top-0 object-cover-full shadow">
                  {/* <Image className="object-cover"
                    src="https://images.unsplash.com/photo-1563863020133-9e285f417785?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1784&q=80"
                    alt="Nature"
                    layout="fill"
    />*/}

                  
        <div className="absolute text-black mt-10 top-1/2 w-full text-center" >
            <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>I'm flexible</button>
        </div>
</div>
    );
}

export default Banner;