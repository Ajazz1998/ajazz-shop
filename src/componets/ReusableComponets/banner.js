// import { useContext } from "react";
// import { ShopContext } from "../../Context/ShopContext";
// import Container from "./Container";
// import Loader from "./loader";
// import './style.css';

// const Products = () => {
//   const { products, isLoading } = useContext(ShopContext);

//   return (
//       <Container>
//         <div className="bannner">
//             {products && products.length === 0 && (
//               <h1 className="error">Result not found</h1>
//             )}
//             {!isLoading ? (
//               <div className="b-box">
//                   <img
//                   src={`${products[0].img}`}
//                   alt="poster"
//                   className="img"
//                   />
//                     <p>{products[0].price}</p>
//                     <a href={products[0].link}><p>{products[0].title}</p></a>
//                     <p>{products[0].rate}</p>
//               </div>
//             ) : (
//               <Loader />
//             )}
//         </div>
        
//       </Container>
//   );
// };

// export default Products; 