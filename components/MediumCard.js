import Image from 'next/image';


const products = [
    {
      id: 1,
      name: 'Apartman 1',
      href: '#',
      imageSrc: '/',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '75$',
      location: 'Podgorica',
    },
    {
    
      id: 2,
      name: 'Stan 2',
      href: '#',
      imageSrc: '/',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      location: 'Beograd',
    },
    {
      id: 3,
      name: 'Stan 3',
      href: '#',
      imageSrc: '/',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$55',
      location: 'Novi Sad',
    },
    {
      id: 4,
      name: 'Stan 4',
      href: '#',
      imageSrc: '/',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$65',
      location: 'Herceg Novi',
    },
    // More products...
  ]

function MediumCard() {
    return (
        <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Explore Nearby</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-white-200 aspect-w-2 aspect-h-2 rounded-md overflow-hidden opacity-70 lg:h-80 lg:aspect-none cursor-pointer">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-contain bg-white lg:w-full lg:h-full"
                    layout="fill"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-black">
                      <a href={product.href}>
                        <span aria-hidden="true" className="relative" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-black">{product.location}</p>
                  </div>
                  <p className="text-sm font-medium text-black">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default MediumCard