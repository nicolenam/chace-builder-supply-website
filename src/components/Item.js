import { useState } from 'react';
import "../styles/PopularProduct.scss";

const Item = ({product}) =>{

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
        <div key={product.id} className="row">
            <img src={product.url} alt={product.sku}/>
            <div className="details">
                <div>
                    <p className="measurement">{product.measurement}</p>
                    <p className="sku">sku: {product.sku}</p>
                </div>
                <div>
                    <p className="price">{product.price}</p>
                </div>
            </div>
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
    )
}

export default Item;