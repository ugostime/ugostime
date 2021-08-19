import Image from 'next/image';



function Banner() {
    return (
<div className="flex">  
        <div className="absolute text-black mt-20 items-center  w-full text-center  z-40 " >
            <p className="text-sm  mb-2 sm:text-lg">Not sure where to go? Perfect.</p>
        
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md mb-4 rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>I'm flexible</button>
        </div>
        <div className="w-full h-full relative opacity-90">
              <img
                src="https://images.unsplash.com/photo-1563863020133-9e285f417785?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1784&q=80"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
</div>
    );
}

export default Banner;