import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import background from '../Assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png';

function About(){
    return(
        <>
            <Header />
            <Banner img={background} />
            <Footer />
        </>
    )
}

export default About;