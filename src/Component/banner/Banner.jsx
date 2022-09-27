import React from "react";
import Banner1 from '../assets/smile.png'
import Banner2 from "../assets/Tawrash_pic.jpg";
import Banner3 from "../assets/IMG_20220314_212002.jpg";
import Banner4 from "../assets/IMG_20220314_211405.jpg";


function Banner()
{
    return (
      <React.Fragment>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={Banner1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Banner2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Banner3} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Banner4} alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </React.Fragment>
    );
        
}
export default Banner;