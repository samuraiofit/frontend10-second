import Copyright from "./FooterCopyright";
import Logo2 from "./FooterLogo";
import FooterMenu from "./FooterMenu";


function Footer(){
    return(
        <div className="footer">
        <Logo2/>
        <FooterMenu/>
        <Copyright/>
        </div>
    )
}

export default Footer;