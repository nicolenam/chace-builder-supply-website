import "../styles/Navigation.scss";

const Navigation = () => {
  return(
    <nav>
      <div className="navContainer">
        {/* logo */}
        <div className="logo">
          <img src="/logo.webp"/>
        </div>
        {/* input */}
        <div className="search">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C1C1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <div>
            <input placeholder="Search for products..."/>
          </div>
        </div>
        {/* menu */}
        <div className="menuList">
          <div className="menuListItem">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#12856e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <p className="menuItems">Sign In</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#12856e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            <p className="menuItems">Menu</p>
          </div>
          <a className="cart" href="/cart">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#12856e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              <p className="menuItems">Cart</p>
            </div>
          </a>
          <div className="quotes">
            <a href="/quotes">
              <div>
                <p>Get A Quote</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div class="sc-gsTCUz sc-hKgILt sc-cjjFDq bhdLno gTLZXx iZCKGE"><a class="sc-cjHJEj kQbLAY"><p color="#12856e" class="sc-hOqqkJ sc-iXYxDx hsIUPF gqBqms">All Products</p></a><a class="sc-JooDp huvkpK" href="/quotes"><p color="#12856e" class="sc-hOqqkJ sc-iXYxDx hsIUPF gqBqms">Quotes</p></a><a class="sc-JooDp huvkpK" href="/make-payment"><p color="#12856e" class="sc-hOqqkJ sc-iXYxDx hsIUPF gqBqms">Payments</p></a><a class="sc-JooDp huvkpK" href="/about"><p color="#12856e" class="sc-hOqqkJ sc-iXYxDx hsIUPF gqBqms">About</p></a><a class="sc-JooDp huvkpK" href="/contact"><p color="#12856e" class="sc-hOqqkJ sc-iXYxDx hsIUPF gqBqms">Contact</p></a></div>
        <div class="sc-gFbBKL ldldDu"><div class="sc-gsTCUz sc-DDwIH bhdLno jumqcW"><div class="sc-bdfBwQ sc-lolLtc cIKpxU dUNriQ"><div class="sc-gsTCUz sc-hKgILt sc-dStTzh bhdLno gTLZXx cluFF"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#12856e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><p color="#12856e" class="sc-dacFzL sc-VZlmk bTSVLV"><span width="140"><span><span><span>LMBR Yard Canada (De…</span></span></span><span>…</span></span></p></div><div class="sc-gsTCUz sc-iWExUG bhdLno clEIld"><p color="#737373" class="sc-dacFzL hNyKPf">325 Front St West, Toronto, ON</p></div></div><div class="sc-cVkKhd eYtPzt"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#12856e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></div></div></div>
      </div>
    </nav>
  )
}
  
  export default Navigation;
  
  