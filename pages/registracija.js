import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import RegistrationForm from "../components/RegistrationForm";

function Registracija() {
    return (
        <div>

            <Header title="Registracija"/>
            <div>
                <RegistrationForm />
            </div>
             <Footer />
        </div>
    )
}

export default Registracija
