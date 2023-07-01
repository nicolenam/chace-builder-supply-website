import "../styles/ProductGrid.scss";
import GridItem from "./GridItem";

const ProductGrid = () => {
  return (
    <section className="gridContainer">
      <h1>All Products</h1>
      <div className="grid">
      {/* if there is data this map method would be used */}
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </div>
    </section>
  );
};

export default ProductGrid;
