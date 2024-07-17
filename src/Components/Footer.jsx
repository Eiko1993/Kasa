import logo from "../Assets/LOGO.png";
import "../Style/footer.scss";


function Footer(){
    return (
        <footer className="footer">
            <div className="img_footer"><img src={logo} alt="Logo de bas de page" /></div>
            <div className="rights"><p>© 2020 Kasa. All rights reserved</p></div>
        </footer>
    )
}

export default Footer;