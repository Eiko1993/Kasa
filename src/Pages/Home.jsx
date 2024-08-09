import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from '../Components/Banner';
import Card from "../Components/Card";
import background from "../Assets/bg-home.png";

function Home(){
    return(
        <div>
        <Header />
        <Banner img={background} title="Chez vous, partout et ailleurs"/>
        <Card />
        <Footer />
        </div>
    )
}

export default Home;