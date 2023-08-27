import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Albumcard from "../Albumcard/Albumcard";

const Sliderview = ({itemsDetail}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 7,
        slidesToScroll: 7,
    };

    return <Slider {...settings}>
        {
            itemsDetail.map(item=>(
                <Albumcard key={item.id} albumDetails={item} />
            ))
        }
    </Slider>

}

export default Sliderview;