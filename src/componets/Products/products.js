import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../GlobalComponents/Container";
import Loader from "../GlobalComponents/Loader";

const Products = () => {
  const { products, isLoading } = useContext(MovieContext);

  return (
    <div className="products">
      <Container>
        {products.results && products.results.length === 0 && (
          <h1 className="error">Result not found</h1>
        )}
        {!isLoading ? (
          products.results &&
          products.results.map((movieItem, index) => (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w400/${movieItem.poster_path}`}
              alt="poster"
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