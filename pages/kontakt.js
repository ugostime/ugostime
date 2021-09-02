import ContactForm from "../components/ContactForm";
import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


        function kontakt() {
        return (

          <div>
              <Header title="Kontakt" />

              <div>
                  <ContactForm/>
              </div>
              <Footer/>
          </div>
        )
        }

export default kontakt
