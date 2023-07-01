import "../styles/Footer.scss";

const Footer = () => {
    const dateobj = new Date();
    const year = dateobj.getFullYear();

    return (
        <footer className="sc-bdfBwQ sc-jCcPPI cIKpxU gMZQhb">
            <div className="sc-bdfBwQ sc-jCcPPI cIKpxU gMZQhb">
                <div className="sc-bdfBwQ sc-cBNfnY sc-gHTqTJ cIKpxU cHGPOa fQOZwY">
                    <h5 className="sc-eLgOdN sc-kaHvZy cEudwU jZfqQr"> Chace Building Supply </h5>
                    <div className="sc-hgxXdz eYOPgx">
                        <div className="sc-bdfBwQ sc-hgPISZ cIKpxU gtqbjT">
                            <div className="sc-bdfBwQ sc-dlfnbm sc-kemFKM cIKpxU bcaJjD gjGVCn">
                                <div className="sc-bdfBwQ cIKpxU">
                                    <p className="sc-fvhGYg bwWsNa">325 Front St West, Toronto&nbsp;ON</p>
                                    <p className="sc-fvhGYg bwWsNa">Phone: 1 (437) 747-8473</p>
                                    <a href="mailto:dev+test@toolbx.com?subject=" className="sc-fxNNfJ eHPhCZ sc-hFupcP jqYZPY" color="#12856e">
                                        dev+test@toolbx.com
                                    </a>
                                </div>
                                <div className="sc-bdfBwQ cIKpxU">
                                    <div className="sc-bdfBwQ sc-gZzbk cIKpxU keXZZy">
                                        <div>
                                            <p className="sc-fvhGYg bwWsNa">Mon-Fri 8 AM - 4 PM</p>
                                            <p className="sc-fvhGYg bwWsNa">Sat 9 AM - 12 PM</p>
                                            <p className="sc-fvhGYg bwWsNa">Sun CLOSED</p>
                                        </div>
                                        <p className="sc-fvhGYg bwWsNa">Store hours and closures may vary on statutory holidays</p>
                                    </div>
                                </div>
                                <a href="/locations" className="sc-cjHJEj kQbLAY">
                                    <p color="#12856e" className="sc-fvhGYg cJaeuh">
                                        Change Location
                                    </p>
                                </a>
                                <div className="sc-bdfBwQ sc-bLlEyN cIKpxU jsmFhI">
                                    <a href="/about" className="sc-JooDp huvkpK">
                                        <p color="#12856e" className="sc-fvhGYg cJaeuh">
                                            About
                                        </p>
                                    </a>
                                    <a className="sc-JooDp huvkpK" href="/contact">
                                        <p color="#12856e" className="sc-fvhGYg cJaeuh">
                                            Contact
                                        </p>
                                    </a>
                                </div>
                                <div className="sc-gsTCUz sc-ihnbgO bhdLno dWVYgZ">
                                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="sc-cjHJEj kQbLAY">
                                        <div color="#12856e" className="sc-fXvjs bzmlNw">
                                            <svg width="24" height="20" viewBox="0 0 24 20" fill="#12856e" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M23 1.03819C22.0424 1.71367 20.9821 2.2303 19.86 2.56819C19.2577 1.8757 18.4573 1.38488 17.567 1.16212C16.6767 0.939353 15.7395 0.995389 14.8821 1.32265C14.0247 1.6499 13.2884 2.23259 12.773 2.99191C12.2575 3.75122 11.9877 4.65053 12 5.56819V6.56819C10.2426 6.61376 8.50127 6.22401 6.93101 5.43364C5.36074 4.64327 4.01032 3.47683 3 2.03819C3 2.03819 -1 11.0382 8 15.0382C5.94053 16.4362 3.48716 17.1371 1 17.0382C10 22.0382 21 17.0382 21 5.53819C20.9991 5.25965 20.9723 4.98179 20.92 4.70819C21.9406 3.70169 22.6608 2.43091 23 1.03819Z"
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                        </div>
                                    </a>
                                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="sc-cjHJEj kQbLAY">
                                        <div color="#12856e" className="sc-fXvjs bzmlNw">
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="#12856e" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 1H6C3.23858 1 1 3.23858 1 6V16C1 18.7614 3.23858 21 6 21H16C18.7614 21 21 18.7614 21 16V6C21 3.23858 18.7614 1 16 1Z"
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M15 10.37C15.1234 11.2022 14.9812 12.0522 14.5937 12.799C14.2062 13.5458 13.5931 14.1514 12.8416 14.5297C12.0901 14.9079 11.2384 15.0396 10.4077 14.9059C9.57708 14.7723 8.80971 14.3801 8.21479 13.7852C7.61987 13.1902 7.22768 12.4229 7.09402 11.5922C6.96035 10.7615 7.09202 9.90989 7.47028 9.15837C7.84854 8.40685 8.45414 7.79374 9.20094 7.40624C9.94773 7.01874 10.7977 6.87658 11.63 7C12.4789 7.12588 13.2648 7.52146 13.8716 8.1283C14.4785 8.73515 14.8741 9.52107 15 10.37Z"
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path d="M16.5 5.5H16.51" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                    </a>
                                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="sc-cjHJEj kQbLAY">
                                        <div color="#12856e" className="sc-fXvjs bzmlNw">
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="#12856e" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15 7.5C16.5913 7.5 18.1174 8.13214 19.2426 9.25736C20.3679 10.3826 21 11.9087 21 13.5V20.5H17V13.5C17 12.9696 16.7893 12.4609 16.4142 12.0858C16.0391 11.7107 15.5304 11.5 15 11.5C14.4696 11.5 13.9609 11.7107 13.5858 12.0858C13.2107 12.4609 13 12.9696 13 13.5V20.5H9V13.5C9 11.9087 9.63214 10.3826 10.7574 9.25736C11.8826 8.13214 13.4087 7.5 15 7.5V7.5Z"
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path d="M5 8.5H1V20.5H5V8.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path
                                                    d="M3 5.5C4.10457 5.5 5 4.60457 5 3.5C5 2.39543 4.10457 1.5 3 1.5C1.89543 1.5 1 2.39543 1 3.5C1 4.60457 1.89543 5.5 3 5.5Z"
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                        </div>
                                    </a>
                                    <a href="https://houzz.com/" target="_blank" rel="noopener noreferrer" className="sc-cjHJEj kQbLAY">
                                        <div color="#12856e" className="sc-fXvjs bzmlNw">
                                            <svg width="22" height="24" viewBox="0 0 22 24" fill="#12856e" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M20.75 11.122V23H14.6807V16.444C14.6807 15.8917 14.233 15.444 13.6807 15.444H8.31933C7.76705 15.444 7.31933 15.8917 7.31933 16.444V23H1.25V1H4.59933V5.74667C4.59933 6.193 4.89512 6.5853 5.32424 6.70808L20.75 11.122Z"
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="sc-bdfBwQ sc-hgPISZ cIKpxU gtqbjT">
                            <p className="sc-hOqqkJ cWGOwq">All Products</p>
                            <div className="sc-jcVebW hrCIoP"></div>
                            <div className="sc-bdfBwQ sc-bLlEyN cIKpxU jsmFhI">
                                <a className="sc-JooDp huvkpK" href="/c/drywall">
                                    <p color="#12856e" className="sc-fvhGYg cJaeuh">
                                        Drywall
                                    </p>
                                </a>
                                <a className="sc-JooDp huvkpK" href="/c/dimensional-lumber">
                                    <p color="#12856e" className="sc-fvhGYg cJaeuh">
                                        Dimensional Lumber
                                    </p>
                                </a>
                                <a className="sc-JooDp huvkpK" href="/c/moulding-trim">
                                    <p color="#12856e" className="sc-fvhGYg cJaeuh">
                                        Moulding &amp; Trim
                                    </p>
                                </a>
                                <a className="sc-JooDp huvkpK" href="/c/plywood-osb">
                                    <p color="#12856e" className="sc-fvhGYg cJaeuh">
                                        Plywood &amp; OSB
                                    </p>
                                </a>
                                <a className="sc-JooDp huvkpK" href="/c/fencing-and-decking">
                                    <p color="#12856e" className="sc-fvhGYg cJaeuh">
                                        Fencing and Decking
                                    </p>
                                </a>
                                <a className="sc-JooDp huvkpK" href="/c/insulation">
                                    <p color="#12856e" className="sc-fvhGYg cJaeuh">
                                        Insulation
                                    </p>
                                </a>
                                <a className="sc-JooDp huvkpK" href="/c/2x4-spf">
                                    <p color="#12856e" className="sc-fvhGYg cJaeuh">
                                        2x4 SPF
                                    </p>
                                </a>
                                <a className="sc-JooDp huvkpK" href="/c/engineered-wood-products">
                                    <p color="#12856e" className="sc-fvhGYg cJaeuh">
                                        Engineered Wood Products
                                    </p>
                                </a>
                                <a className="sc-JooDp huvkpK" href="/c/adhesives-tape">
                                    <p color="#12856e" className="sc-fvhGYg cJaeuh">
                                        Adhesives &amp; Tape
                                    </p>
                                </a>
                                <a className="sc-JooDp huvkpK" href="/c/concrete-masonry">
                                    <p color="#12856e" className="sc-fvhGYg cJaeuh">
                                        Concrete &amp; Masonry
                                    </p>
                                </a>
                                <a href="/#all-products" className="sc-cjHJEj kQbLAY">
                                    <p color="#12856e" className="sc-fvhGYg cJaeue">
                                        View All Products
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="sc-bdfBwQ sc-hgPISZ cIKpxU gtqbjT">
                            <p className="sc-hOqqkJ cWGOwq">Pro Tools</p>
                            <div className="sc-jcVebW hrCIoP"></div>
                            <div className="sc-bdfBwQ sc-bLlEyN cIKpxU jsmFhI">
                                <a className="sc-JooDp huvkpK" href="/quotes">
                                    <p color="#12856e" className="sc-fvhGYg cJaeuh">
                                        Quote Request
                                    </p>
                                </a>
                                <a className="sc-JooDp huvkpK" href="/make-payment">
                                    <p color="#12856e" className="sc-fvhGYg cJaeuh">
                                        Payments
                                    </p>
                                </a>
                                <a className="sc-JooDp huvkpK" href="/email-registration">
                                    <p color="#12856e" className="sc-hOqqkJ hsIUPC">
                                        Register
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="sc-bdfBwQ sc-hgPISZ cIKpxU gtqbjT">
                            <p className="sc-hOqqkJ cWGOwq">Support</p>
                            <div className="sc-jcVebW hrCIoP"></div>
                            <div className="sc-bdfBwQ sc-bLlEyN cIKpxU jsmFhI">
                                <a className="sc-JooDp huvkpK" href="/returns-policy">
                                    <p color="#12856e" className="sc-fvhGYg cJaeuh">
                                        Returns Policy
                                    </p>
                                </a>
                                <a className="sc-JooDp huvkpK" href="/shipping-policy">
                                    <p color="#12856e" className="sc-fvhGYg cJaeuh">
                                        Shipping Policy
                                    </p>
                                </a>
                                <a className="sc-JooDp huvkpK" href="/privacy-policy">
                                    <p color="#12856e" className="sc-fvhGYg cJaeuh">
                                        Privacy Policy
                                    </p>
                                </a>
                                <a className="sc-JooDp huvkpK" href="/terms-and-conditions">
                                    <p color="#12856e" className="sc-fvhGYg cJaeuh">
                                        Terms &amp; Conditions
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="sc-bdfBwQ sc-hgPISZ cIKpxU gtqbjT">
                            <p className="sc-hOqqkJ cWGOwq">Payment Types</p>
                            <div className="sc-jcVebW hrCIoP"></div>
                            <div className="sc-gsTCUz bhdLno">
                                <img alt="visa card" src="/visa.svg" className="sc-kzDNYO bBMwHp" />
                                <div width="10" className="sc-eCssSg cOdfUJ"></div>
                                <img alt="master card" src="/mastercard.svg" className="sc-kzDNYO bBMwHp" />
                            </div>
                        </div>
                    </div>
                    <div className="sc-kHNMoK YuGGQ sc-iClJEh erSSIN">
                        <p className="sc-fvhGYg fDwjgM">© Chace Building Supply {year}. All rights reserved.</p>
                        <div className="sc-gsTCUz sc-dkaWxM bhdLno bFBCms">
                            <p className="sc-fvhGYg fDwjgM">Powered by</p>
                            <div width="8" className="sc-eCssSg iKUHmY"></div>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.toolbx.com" className="sc-cVkrFx hzPuOC">
                                <img alt="toolbx logo" src="/toolbx-logo-and-text-black.svg" className="footerLogo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
