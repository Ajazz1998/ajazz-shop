
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Container from "../ReusableComponets/Container";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Carousels = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="products">
    
      <Container>
        <div className="">

        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>            {
              
          products &&
          products.map((Products) => (
            
            <div className="p-box">
               <a href={Products.link}><p>{Products.title}</p></a>
               <a href={Products.link}><img
               key={Products.id}
               src={`${Products.img}`}
               alt="poster"
               className="img"
             /></a>
               
              <div className="p-details">
                  <p className="price">{Products.price}</p>
                  
                  <p>{Products.rate}</p>
              </div>

            </div>
            

          ))
        }</SwiperSlide>
   
      </Swiper>



            
        </div>
        
      </Container>
    </div>
  );
};

export default Carousels; 