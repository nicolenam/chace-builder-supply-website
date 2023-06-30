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




      <div className="sc-gsTCUz sc-hKgILt sc-gATInX bhdLno gTLZXx jHlPUB">

          <div  className={`sc-gsTCUz sc-hKgILt sc-jfJzZe sc-jcRDWI sc-fkubWd bhdLno gTLZXx gdsrAv kPwfsx iXQHrd ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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

        
        ))}

      </div>

      {/* button */}



    </section>
  );
}

export default PopularProducts;
