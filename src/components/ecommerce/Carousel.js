import Slider from "react-slick";
// import Image from "next/image";

export default function Carousel(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
      <div className="conatiner p-10">
        <Slider {...settings}>
          <div>
            <img className="w-full" src='https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/8/13/a2cdbfc5-51d7-4bd1-8f2d-ebf072caa882.jpg.webp?ect=3g' />
          </div>
          <div>
            <img className="w-full" src='https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/8/13/a2cdbfc5-51d7-4bd1-8f2d-ebf072caa882.jpg.webp?ect=3g' />
          </div>
          <div>
            <img className="w-full" src='https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/8/13/a2cdbfc5-51d7-4bd1-8f2d-ebf072caa882.jpg.webp?ect=3g' />
          </div>
          <div>
            <img className="w-full" src='https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/8/13/a2cdbfc5-51d7-4bd1-8f2d-ebf072caa882.jpg.webp?ect=3g' />
          </div>
        </Slider>
      </div>
    );
}