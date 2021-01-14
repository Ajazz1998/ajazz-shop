import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Container from "../ReusableComponets/Container";
import Loader from "../ReusableComponets/loader";

const Products = () => {
  const { products, isLoading } = useContext(ShopContext);

  return (
    <div className="products">
      <Container>
        {products && products.length === 0 && (
          <h1 className="error">Result not found</h1>
        )}
        {!isLoading ? (
          products &&
          products.map((Products) => (
            <img
              key={Products.id}
              src={`${Products.img}`}
              alt="poster"
              className="img"
            />
          ))
        ) : (
          <Loader />
        )}
      </Container>
    </div>
  );
};

export default Products; 