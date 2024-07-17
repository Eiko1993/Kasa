import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from '../Components/Banner';
import Card from "../Components/Card";
import background from "../Assets/eric-muhr-P_XxsdVgtpQ-unsplash.png";

function Home(){
    return(
        <div role="main">
        <Header />
        <Banner img={background} title="Chez vous, partout et ailleurs"/>
        <Card />
        <Footer />
        </div>
    )
}

export default Home;