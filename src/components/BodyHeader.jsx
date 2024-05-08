import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { YOUR_API_KEY, fetchTagsUrl } from "../utils/constants";
import Slider from "react-slick";

const buttons = [
  "All",
  "Live",
  "Music",
  "Mixes",
  "News",
  "Lo-fi",
  "Mantras",
  "Comedy",
  "T-Series",
  "Bollywood Music",
  "Movie music",
  "India pop music",
];
  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 10,
  //   slidesToScroll: 1,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: false,
  //         dots: false
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 6,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 8,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "visible", color: "gray" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "black" }}
        onClick={onClick}
      />
    );
  }
const BodyHeader = () => {
  const [clickedButton, setClickedButton] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = (button) => {
    setClickedButton(button.replace(" ", "+"));
    navigate(`/explore?tags=${button.replace(" ", "+")}`);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 9, // Adjust the number of buttons to show
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
     prevArrow: <SamplePrevArrow />,
       initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    
 <div className=" bg-">
    
    <Slider {...settings}>
      {buttons.map((button) => (
        <button
          key={button}
          className={`cursor-pointer border border-gray-300 rounded-md py-2 px-4 font-semibold text-sm ${
            clickedButton === button ? "bg-gray-200" : ""
          }`}
          onClick={() => handleButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </Slider>
   
 </div>
  );
  };

export default BodyHeader;
