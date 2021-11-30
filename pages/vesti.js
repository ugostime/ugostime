import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BlogSection from "../components/BlogSection";
import PromoSection from "../components/PromoSection";

function vesti() {
    return (
        <div>
            <Header title="Vesti"/>
  <div>
      <BlogSection />
  </div>

  <div>
      <PromoSection />
  </div>
            <Footer />
        </div>
    )
}

export default vesti
