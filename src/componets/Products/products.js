import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Container from "../ReusableComponets/Container";
import Loader from "../ReusableComponets/loader";
import './p_style.css';

const Products = () => {
  const { products, isLoading } = useContext(ShopContext);

  return (
    <div className="products">
      <Container>
        <div className="product">
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
        </div>
        
      </Container>
    </div>
  );
};

export default Products; 