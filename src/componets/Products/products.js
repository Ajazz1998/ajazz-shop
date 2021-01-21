import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Container from "../ReusableComponets/Container";
import Loader from "../ReusableComponets/loader";

import './p_style.css';

const Products = () => {
  const {  isLoading, currentPosts } = useContext(ShopContext);

  return (
    <div className="products">
    
      <Container>
        <div className="product">
            {currentPosts && currentPosts.length === 0 && (
              <h1 className="error">Result not found</h1>
            )}
            
            {!isLoading ? (
              currentPosts &&
              currentPosts.map((Products) => (
                
                <div className="p-box">
                   <a href={Products.link}><p>{Products.title}</p></a>
                        <img
                        key={Products.id}
                        src={`${Products.img}`}
                        alt="poster"
                        className="img"
                      />
                  <div className="p-details">
                      <p className="price">{Products.price}</p>
                      
                      <p>{Products.rate}</p>
                  </div>

                </div>

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