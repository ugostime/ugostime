import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

function ContactForm() {

    return (
          <div className="relative bg-white">
              <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-white" />
              </div>
              <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
                <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                  <div className="max-w-lg mx-auto">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Kontaktirajte nas</h2>
                    <p className="mt-3 text-lg leading-6 text-gray-500">
                      Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
                      arcu.
                    </p>
                    <dl className="mt-8 text-base text-gray-500">
                      <div>
                        <dt className="sr-only">Adresa</dt>
                        <dd>
                          <p>742 Evergreen Terrace</p>
                          <p>Springfield, OR 12345</p>
                        </dd>
                      </div>
                      <div className="mt-6">
                        <dt className="sr-only">Phone number</dt>
                        <dd className="flex">
                          <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                          <span className="ml-3">+1 (555) 123-4567</span>
                        </dd>
                      </div>
                      <div className="mt-3">
                        <dt className="sr-only">Email</dt>
                        <dd className="flex">
                          <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                          <span className="ml-3">ugosti.me.solutions@gmail.com</span>
                        </dd>
                      </div>
                    </dl>
                    <p className="mt-6 text-base text-gray-500">
                     ??elite da postanete deo na??e zajednice?{' '}
                      <a href="#" className="font-medium text-gray-700 underline">
                       Pogledajte ponude
                      </a>
                      .
                    </p>
                  </div>
                </div>
                <div className="bg-red-100 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12 ">
                  <div className="max-w-lg mx-auto lg:max-w-none">
                    <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                      <div>
                        <label htmlFor="full-name" className="sr-only">
                          Ime i Prezime
                        </label>
                        <input
                          type="text"
                          name="full-name"
                          id="full-name"
                          autoComplete="name"
                          className="block w-full shadow-sm py-3 px-4   placeholder-gray-500  border border-gray-400  rounded-md"
                          placeholder="Ime i Prezime"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="sr-only">
                          Email:
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500  border border-gray-400 rounded-md"
                          placeholder="Email:"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="sr-only">
                          Phone
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500  border border-gray-400 rounded-md"
                          placeholder="Telefon:"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="sr-only">
                          Poruka
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 border border-gray-400  rounded-md"
                          placeholder="Poruka"
                          defaultValue={''}
                        />
                      </div>
                      <div>
                        <button 
                          type="submit"
                          className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-full text-white bg-red-400 hover:bg-red-300 focus:ring-red-500  
                          cursor-pointer hover:shadow-lg active:scale-95 active:bg-red-200 transition duration-100 ease-out;"
                        >
                          Po??alji
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default ContactForm
