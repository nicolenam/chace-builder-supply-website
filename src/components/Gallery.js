import { useState } from 'react';
import "../styles/Gallery.scss";

const PopularProducts = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
      console.log("enter");
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
      console.log("leave");
    };

    const products = [
      {
        "measurement": "2x4x8' SPF",
        "sku" : 1000112108,
        "price": "$9.00",
        "inventory": true,
        "url": "/wood.webp"
      },
      {
        "measurement": "2x4x8' SPF",
        "sku" : 1000112108,
        "price": "$9.00",
        "inventory": true,
        "url": "/wood.webp"
      },
      {
        "measurement": "2x4x8' SPF",
        "sku" : 1000112108,
        "price": "$9.00",
        "inventory": true,
        "url": "/wood.webp"
      },
      {
        "measurement": "2x4x8' SPF",
        "sku" : 1000112108,
        "price": "$9.00",
        "inventory": true,
        "url": "/wood.webp"
      },
      {
        "measurement": "2x4x8' SPF",
        "sku" : 1000112108,
        "price": "$9.00",
        "inventory": true,
        "url": "/wood.webp"
      },
      {
        "measurement": "2x4x8' SPF",
        "sku" : 1000112108,
        "price": "$9.00",
        "inventory": true,
        "url": "/wood.webp"
      },
      {
        "measurement": "2x4x8' SPF",
        "sku" : 1000112108,
        "price": "$9.00",
        "inventory": true,
        "url": "/wood.webp"
      },
      {
        "measurement": "2x4x8' SPF",
        "sku" : 1000112108,
        "price": "$9.00",
        "inventory": true,
        "url": "/wood.webp"
      },
      {
        "measurement": "2x4x8' SPF",
        "sku" : 1000112108,
        "price": "$9.00",
        "inventory": true,
        "url": "/wood.webp"
      },
      
    ]

  return (
    <section className="popularProduct">

      <h3>Popular Products</h3>

      <div  className="scrollmenu">

        {products.map((product) => (
          <div key={product} className="row">
            <img src={product.url} alt={product.sku}/>
            <p>{product.measurement}</p>
            <p>sku: {product.sku}</p>
            <p>{product.price}</p>
          </div>
        ))}

      </div>

      {/* <div className="sc-gsTCUz sc-hKgILt sc-gATInX bhdLno gTLZXx jHlPUB">
                        <div className="sc-gsTCUz sc-hKgILt sc-jfJzZe sc-fnlXYz bhdLno gTLZXx gdsrAv gmzLtL">
                          <div  className={`sc-gsTCUz sc-hKgILt sc-jfJzZe sc-jcRDWI sc-fkubWd bhdLno gTLZXx gdsrAv kPwfsx iXQHrd ${
                          isHovered ? 'hovered' : ''
                          }`}
                               onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sc-eCjkpP iDHATf">
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            {
                              isHovered ?
                              <p className="sc-hOqqkJ cWGOwq show">Add To Cart</p>
                              :
                              <p className="sc-hOqqkJ cWGOwq show">Add</p>
                            }
                          </div>
                          </div>
                          </div> */}



      

        {/* <div className="popHeadingDiv">
          <h3>Popular Products</h3>
        </div>
        <div className="sc-gsTCUz sc-koaBLD bhdLno gNJvAP">
          <div className="sc-kTaSZA bGjmkd indiana-scroll-container">
            <div className="sc-gsTCUz sc-bKNyAY bhdLno kBOEFC">
              <div className="sc-jhLFZp jwIrcu">
                <a className="sc-gInsOo grsaJH" href="/p/10-x-1-14-in-flat-socket-head-tapping-screw-18-8-stainless-steel-3pcs/1000181637">
                  <div className="sc-bdfBwQ sc-dYzljZ cIKpxU bEFvXX">
                    <div className="sc-bdfBwQ sc-eUWgFQ cIKpxU dEcYjv">
                      <div className="sc-gsTCUz sc-hxqDJO bhdLno emWfRI">
                        <img src="/p_1677733749556_8d140761-a706-49d7-97c5-441dd0fb5344_1000181637.png" className="sc-jeGSBP sc-gfHAkt eoPaIm" alt="metal screws"/>
                      </div>
                      <div className="sc-gsTCUz sc-hKgILt sc-oHXjo bhdLno gTLZXx fHFdtO">
                        <div>
                          <div className="sc-bdfBwQ cIKpxU">
                            <p className="sc-hOqqkJ cWGOwq">
                              <span width="0">
                                <span>
                                  <span>#10 x 1 1/4-in Flat Socket Head</span>
                                  <br />
                                  <span>Tapping Screw, 18-8 Stainless</span>
                                  <br />
                                  <span>Steel, 3pcs</span>
                                </span>
                                <span style={{ position: 'fixed', visibility: 'hidden', top: '0px', left: '0px' }}>…</span>
                              </span>
                            </p>
                            <div height="5" className="sc-eCssSg gOuDOV"></div>
                            <p className="sc-dacFzL gKTGjT">SKU: 1000181637</p>
                          </div>
                          <div className="sc-bdfBwQ cIKpxU">
                            <div className="sc-bdfBwQ sc-ezront cIKpxU bEwbmb">
                              <div className="sc-gsTCUz sc-gJrzqj bhdLno kvraIO">
                                <p className="sc-jQbIHB dljKfj">$6.99</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sc-gsTCUz sc-hKgILt sc-gATInX bhdLno gTLZXx jHlPUB">
                        <div className="sc-gsTCUz sc-hKgILt sc-jfJzZe sc-fnlXYz bhdLno gTLZXx gdsrAv gmzLtL">
                          <div  className={`sc-gsTCUz sc-hKgILt sc-jfJzZe sc-jcRDWI sc-fkubWd bhdLno gTLZXx gdsrAv kPwfsx iXQHrd ${
                          isHovered ? 'hovered' : ''
                          }`}
                               onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sc-eCjkpP iDHATf">
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            {
                              isHovered ?
                              <p className="sc-hOqqkJ cWGOwq show">Add To Cart</p>
                              :
                              <p className="sc-hOqqkJ cWGOwq show">Add</p>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div> */}
    </section>
  );
}

export default PopularProducts;
