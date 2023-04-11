function Footer() {
    return(
        <footer>
            <div className="footer-main">
                <div className="row">
                    <div className="col-four tab-full mob-full footer-info">
                        <h4>About Our Site</h4>
                        <p>
                            Lorem ipsum Ut velit dolor Ut labore id fugiat in ut fugiat nostrud qui in dolore commodo eu
                            magna Duis cillum dolor officia esse mollit proident Excepteur exercitation nulla. Lorem ipsum
                            In reprehenderit commodo aliqua irure labore.
                        </p>
                    </div> {/* end footer-info */}
                    <div className="col-two tab-1-3 mob-1-2 site-links">
                        <h4>Site Links</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div> 
                    <div className="col-two tab-1-3 mob-1-2 social-links">
                        <h4>Social</h4>
                        <ul>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Dribbble</a></li>
                            <li><a href="#">Google+</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div> {/* end social links */}
                   
                </div> {/* end row */}
            </div> {/* end footer-main */}
            <div className="footer-bottom">
                <div className="row">
                    <div className="col-twelve">
                        <div className="copyright">
                            <span>Design by <a href="http://www.styleshout.com/">styleshout</a></span>
                        </div>
                        <div id="go-top">
                            <a className="smoothscroll" title="Back to Top" href="#top"><i className="icon icon-arrow-up" /></a>
                        </div>
                    </div>
                </div>
            </div> {/* end footer-bottom */}
        </footer>
    )
}

export default Footer