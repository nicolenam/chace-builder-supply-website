const Navigation = () => {
    return (
      <nav>
        <div className="">
            <a className="" href="/">
              <img
                src="/CHACE-LOGO-409w.png"
                alt="chace building supply logo"
                className=""
              />
            </a>
            <div className="">
              <div className="">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1C1C1E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <div className="">
                    <input
                      placeholder="Search for products..."
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <div className="" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#12856e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <p color="#12856e" className="">
                Sign In
              </p>
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#12856e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <p color="#12856e" className="">
                Menu
              </p>
            </div>
            <a className="" href="/cart">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#12856e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                <p color="#12856e" className="">
                  Cart
                </p>
              </div>
            </a>
            <div className="">
              <a className="" href="/quotes">
                <div color="#FFFFFF" className="">
                  <p color="#12856e" className="">
                    Get A Quote
                  </p>
                </div>
              </a>
            </div>
          </div>
        <div className="">
          <div className="">
            <a className="" href="/">
              <p color="#12856e" className="">
                All Products
              </p>
            </a>
            <a className="" href="/quotes">
              <p color="#12856e" className="">
                Quotes
              </p>
            </a>
            <a className="sc-JooDp huvkpK" href="/make-payment">
              <p color="#12856e" className="">
                Payments
              </p>
            </a>
            <a className="sc-JooDp huvkpK" href="/about">
              <p color="#12856e" className="">
                About
              </p>
            </a>
            <a className="sc-JooDp huvkpK" href="/contact">
              <p color="#12856e" className="">
                Contact
              </p>
            </a>
          </div>
          <div className="">
            <div className="">
              <div className="">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#12856e"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p color="#12856e" className="">
                    <span width="140">
                      <span>
                        <span>
                          <span>LMBR Yard Canada (De…</span>
                        </span>
                      </span>
                      <span style={{ position: "fixed", visibility: "hidden", top: "0px", left: "0px" }}>…</span>
                    </span>
                  </p>
                </div>
                <div className="">
                  <p color="#737373" className="">
                    325 Front St West, Toronto, ON
                  </p>
                </div>
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#12856e"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          </div>
        </div>
    </nav>
  );
  }
  
  export default Navigation;
  
  