import HomeLayout from "../Layouts/HomeLayout";

import aboutMainImage from "../assets/aboutMainImage.png";
import apj from '../assets/apj.png'
import billGates from '../assets/billGates.png'
import einstein from '../assets/einstein.png'
import nelsonMandela from '../assets/nelsonMandela.png'
import steveJobs from '../assets/steveJobs.png'


function AboutUs() {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        <div className="flex items-center gap-5 mx-10 ">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-xl text-gray-200 ">
              Our goal is to provide the affordable and quality education to the
              world. We are providing the platform for the aspiring teachers and
              students to share their skills.
            </p>
          </section>
          <div className="w-1/2">
            <img
              id="test1"
              src={aboutMainImage}
              alt=""
              className="drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="carousel w-1/2 my-16 m-auto h-auto">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={apj} className="w-full border rounded-full p-4" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle"> ❮ </a>
              <a href="#slide2" className="btn btn-circle"> ❯ </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={billGates} className="w-full border rounded-full p-4" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle"> ❮ </a>
              <a href="#slide3" className="btn btn-circle"> ❯ </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={steveJobs} className="w-full border rounded-full p-4" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle"> ❮ </a>
              <a href="#slide4" className="btn btn-circle"> ❯ </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={nelsonMandela} className="w-full border rounded-full p-4" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle"> ❮ </a>
              <a href="#slide5" className="btn btn-circle"> ❯ </a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <img src={einstein} className="w-full border rounded-full p-4" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle"> ❮ </a>
              <a href="#slide1" className="btn btn-circle"> ❯ </a>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;
