import React, { Component } from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
// import "./styles.css";
class ProductSlider extends Component {
  
  constructor() {
    super();
    this.state = {
      slides: [
        {
          img: "https://cdn.pixabay.com/photo/2016/12/19/22/15/ladybug-1919216_1280.jpg"
        },
        {
          img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        },
        {
          img: "https://cdn.pixabay.com/photo/2016/12/19/22/15/ladybug-1919216_1280.jpg"
        },
        {
          img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        },
        {
          img: "https://cdn.pixabay.com/photo/2016/12/19/22/15/ladybug-1919216_1280.jpg"
        },
        {
          img: "https://cdn.pixabay.com/photo/2016/12/19/22/15/ladybug-1919216_1280.jpg"
        },
        {
          img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        },
        {
          img: "https://cdn.pixabay.com/photo/2016/12/19/22/15/ladybug-1919216_1280.jpg"
        },
        {
          img: "https://cdn.pixabay.com/photo/2016/12/19/22/15/ladybug-1919216_1280.jpg"
        },
        {
          img: "https://cdn.pixabay.com/photo/2016/12/19/22/15/ladybug-1919216_1280.jpg"
        }
      ]
    };
  }
  componentDidMount(){
    document.addEventListener("alpine:init", () => {
      Alpine.data("imageSlider", () => ({
        currentIndex: 1,
        images: [
          "https://unsplash.it/640/425?image=30",
          "https://unsplash.it/640/425?image=40",
          "https://unsplash.it/640/425?image=50",
        ],
        previous() {
          if (this.currentIndex > 1) {
            this.currentIndex = this.currentIndex - 1;
          }
        },
        forward() {
          if (this.currentIndex < this.images.length) {
            this.currentIndex = this.currentIndex + 1;
          }
        },
      }));
    });
  }
  render() {
    const settings = {
      ssr:true ,// means to render carousel on server-side.
      infinite:true,
      autoPlay:true,
      autoPlaySpeed:1000,
      customTransition:"all 2"
    }
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return (
      <div>
        
        <div className="slides">
        {this.state.slides.map((m,i)=>{
          return(
            <div key={i} style={{flex: "0 0 33.33%"}}>
              <Image src={m.img} height={200} width={200} alt="image"/>
            </div>
          )
        })}
        </div>



{/* <Carousel responsive={responsive} {...settings}>
  {this.state.slides.map((m,i)=>{
    return(
      <div key={i}>
        <Image src={m.img} height={200} width={200} alt="image"/>
      </div>
    )
  })}
</Carousel> */}
{/* <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

<main className="grid min-h-screen w-full place-content-center bg-gray-900">
    <div x-data="imageSlider" className="relative mx-auto max-w-2xl overflow-hidden rounded-md bg-gray-100 p-2 sm:p-4">
        <div className="absolute right-5 top-5 z-10 rounded-full bg-gray-600 px-2 text-center text-sm text-white">
            <span x-text="currentIndex"></span>/<span x-text="images.length"></span>
        </div>

        <button onClick={previous} className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md">
            <i className="fas fa-chevron-left text-2xl font-bold text-gray-500"></i>
        </button>

        <button onClick={forward}  className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md">
            <i className="fas fa-chevron-right text-2xl font-bold text-gray-500"></i>
        </button>

        <div className="relative h-80" style="width: 30rem">
            <template x-for="(image, index) in images">
                <div x-show="currentIndex == index + 1" x-transition:enter="transition transform duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition transform duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" className="absolute top-0">
                    <img src="image" alt="image" className="rounded-sm" />
                </div>
            </template>
        </div>
    </div>
</main> */}

        {/* <h2> Responsive Product Carousel</h2>
        <Slider {...settings}>
          {this.state.slides.map((slide, index) => {
            return (
              <div key={index}>
               {index}
                <Image priority height={200} width={200} src={slide.img} alt={`slide${index}`} />
              </div>
            );
          })}
        </Slider> */}
      </div>
    );
  }
}

export default ProductSlider;
//     var settings = {
//   dots: true,
//   infinite: true,
//   autoplay:true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   initialSlide: 0,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         initialSlide: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     }
//   ]
// };