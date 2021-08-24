function PromoSection() {
    return (
        <div >
              <div className="bg-white">
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

        <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">Naša nova ponuda je ovde</h1>
          <p className="mt-4 text-xl text-white">
           Ponuda novih smeštajnih kapaciteta je dostupna na nešem portalu. Uživajte i rezervišite dok je slobodno.
          </p>
          <a
            href="#"
            className="mt-8 inline-block bg-red-300 border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-red-400"
          >
            Pogledajte novu ponudu
          </a>
        </div>
      </div>
    </div>
        </div>
    )
}

export default PromoSection
