import "../styles/Gallery.scss";
import Item from "./Item";

const PopularProducts = () => {



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
          
          <Item key={product} product={product}/>
        
        ))}

      </div>

    </section>
  );
}

export default PopularProducts;
