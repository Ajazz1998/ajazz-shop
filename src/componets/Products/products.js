import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Container from "../ReusableComponets/Container";
import Loader from "../ReusableComponets/loader";
import { Link } from "react-router-dom";
import Pagination from '../ReusableComponets/Pagination';

import './p_style.css';

const Products = () => {
  const { products, paginate, postsPerPage, isLoading, currentPosts } = useContext(ShopContext);

  return (
    <div className="products">
    
      <Container>
        <div className="product">

            
            {!isLoading ? (
              currentPosts &&
              currentPosts.map((Products) => (
                
                <div className="p-box">
                   <Link to={`/products/${Products.id}`}><p>{Products.title}</p></Link>
                   <Link to={`/products/${Products.id}`}><img
                   key={Products.id}
                   src={`${Products.img}`}
                   alt="poster"
                   className="img"
                 /></Link>
                   
                  <div className="p-details">
                      <p className="price">{Products.price}</p>
                      
                      <p>{Products.rate}</p>
                  </div>

                </div>


              ))
            ) : (
              <Loader />
            )}

            
            <Pagination
            postsPerPage={postsPerPage}
            totalPosts={products.length}
            paginate={paginate}
          />
        </div>
        
      </Container>
    </div>
  );
};

export default Products; 