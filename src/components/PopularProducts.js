import "../styles/PopularProduct.scss";
import Item from "./Item";

const PopularProducts = () => {

    const products = [
      {
        "measurement": "2x4x8' SPF",
        "id": 1,
        "sku" : 1000112108,
        "price": "$9.00",
        "inventory": true,
        "url": "/wood.webp"
      },
      {
        "measurement": "2x4x8' SPF",
        "id": 2,
        "sku" : 1000112108,
        "price": "$9.00",
        "inventory": true,
        "url": "/wood.webp"
      },
      {
        "measurement": "2x4x8' SPF",
        "id": 3,
        "sku" : 1000112108,
        "price": "$9.00",
        "inventory": true,
        "url": "/wood.webp"
      },
      {
        "measurement": "2x4x8' SPF",
        "id": 4,
        "sku" : 1000112108,
        "price": "$9.00",
        "inventory": true,
        "url": "/wood.webp"
      },
      {
        "measurement": "2x4x8' SPF",
        "id": 5,
        "sku" : 1000112108,
        "price": "$9.00",
        "inventory": true,
        "url": "/wood.webp"
      },
      {
        "measurement": "2x4x8' SPF",
        "id": 6,
        "sku" : 1000112108,
        "price": "$9.00",
        "inventory": true,
        "url": "/wood.webp"
      },
      {
        "measurement": "2x4x8' SPF",
        "id": 7,
        "sku" : 1000112108,
        "price": "$9.00",
        "inventory": true,
        "url": "/wood.webp"
      },
      {
        "measurement": "2x4x8' SPF",
        "id": 8,
        "sku" : 1000112108,
        "price": "$9.00",
        "inventory": true,
        "url": "/wood.webp"
      },
      {
        "measurement": "2x4x8' SPF",
        "id": 9,
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
