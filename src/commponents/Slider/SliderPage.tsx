
import Slider from "react-slick";
import Styles from './SliderPage.module.css'
const  {slide, images}  = Styles;
// Men's images
import Men1 from '@assets/images/Relaxed_Fit_Hoodie.jpg';
import Men2 from '@assets/images/Washed_hoodie.jpg';
import Men3 from '@assets/images/T-shirt_Loose_fit.jpg';

// // Women's images
import Woman1 from '@assets/images/Cable-knit-jumper.jpg';
import Woman2 from '@assets/images/Teddy_jacket.jpg';
import Woman3 from '@assets/images/Wide_trousers.jpg';

// // Kids' images
import Kids1 from '@assets/images/Sweatshirt-2.jpg';
import Kids2 from '@assets/images/Felted_shacket.jpg';
import Kids3 from '@assets/images/Fluffy_zip-through_hoodie.jpg';

// // Baby's images
import Baby1 from '@assets/images/Print-motif_T-shirt.jpg';
import Baby2 from '@assets/images/Printed_cotton_jersey_top.jpg';
import Baby3 from '@assets/images/Print-motif_hoodie.jpg';

// // Sport images
import Sport1 from '@assets/images/Teddy_sports_jacket-2.jpg';
import Sport2 from '@assets/images/Short-sleeved_sports_top-2.jpg';
import Sport3 from '@assets/images/Mid layer jacket_sports.jpg';
interface Settings {
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  arrows?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
}
const SliderPage = () => {
    const settings:Settings = {
        dots: false,          
        infinite: true,
        autoplay:true,
        arrows: false,       
        autoplaySpeed: 3000,            
        speed: 500,
        slidesToShow: 1,     
        slidesToScroll: 1, 
      };
  return (
    <Slider {...settings}>
    <div className={slide} key="men">
    <div className={images}>
      <img src={Men1} alt='Relaxed Fit Hoodie' />  
      <img src={Men2} alt="Washed hoodie"/>
      <img src={Men3} alt='T-shirt Loose Fit' />
    </div>
    </div>
    <div className={slide} key="women">
    <div className={images}>
    <img src={Woman1} alt='Cable-knit Jumper' />
      <img src={Woman2} alt='Teddy Jacket' />
      <img src={Woman3} alt='Wide Trousers' />
    </div>
    </div>
    <div className={slide}key="kids">
      <div className={images}>
        <img src={Kids1} alt='Sweatshirt' />
        <img src={Kids2} alt='Felted Shacket' />
        <img src={Kids3} alt='Fluffy Zip-through Hoodie' />
      </div>
    </div>
    <div className={slide} key="baby">
      <div className={images}>
        <img src={Baby1} alt='Print-motif T-shirt' />
        <img src={Baby2} alt='Printed Cotton Jersey Top' />
        <img src={Baby3} alt='Print-motif Hoodie' />
      </div>
    </div>
    <div className={slide} key="sport">
      <div className={images}>
        <img src={Sport1} alt='Teddy Sports Jacket' />
        <img src={Sport2} alt='Short-sleeved Sports Top' />
        <img src={Sport3} alt='2-piece Sports Set' />
      </div>
    </div>
    </Slider>
  )
}

export default SliderPage;
