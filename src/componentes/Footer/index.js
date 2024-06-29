import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage:"url(/img/footer.png)"}}>
        <div>
            <a href="https://www.facebook.com/Angel.Tapia375//">
                <img src="/img/facebook.png" alt='facebook'/>
            </a>
            <a href="https://www.linkedin.com/in/angeltapialedesma/">
                <img src="/img/twitter.png" alt="linkedin"/>
            </a>
            <a href="https://www.instagram.com/_angel_tl_/">
                <img src="/img/instagram.png" alt="instagram"/>
            </a>
        </div>
        <img src="/img/Logo.png" alt="org"/> 
        <strong>Desarrollado por Angel Tapia</strong>
    </footer>
}

export default Footer;