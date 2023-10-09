import React from "react";
import { Link } from "react-router-dom";
import { motion} from "framer-motion";


const ItService = () => {
  return (
    <>
      <motion.section className="bg-primary w-screen py-32 md:py-20 lg:py-24 mb-0"
       initial={{ opacity: 0, y: 50}} 
        animate={{ opacity: 1, y: 0 }}
        exit={{opacity:0, y:20}} 
        transition={{ duration: 1 }}>
        <div className="container mx-auto xl:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="order-2 md:order-1 self-center md:p-static w-full md:w-auto text-center md:text-md-start">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold animate__animated animate__fadeInRightShorter animate__delay-200 text-white">
                IT SERVICES
              </h1>
            </div>
            <div className="order-1 md:order-2 self-center mt-4 md:mt-0 text-center md:text-md-end">
              <ul className="breadcrumb text-white text-opacity-75 animate__animated animate__fadeInRightShorter animate__delay-320">
                <li>
                  <span className="text-lg">IT-SERVICE </span>
                </li>
                <li className="ml-2">
                  <Link
                    to="/"
                    className="text-gray-400 opacity-2 hover:underline"
                  >
                    / HOME
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
      <div role="main" className="main">
        <section
          id="services"
          className="section bg-color-transparent border-0 mt-0 mb-1"
          style={{
            backgroundImage:
              "url(img/demos/it-services/backgrounds/dots-background-3.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",
          }}
        >
          <div className="container container-xl-custom pt-3 mt-4">
            <div className="row justify-content-center">
              <div className="col-md-10 text-center">
                <div className="overflow-hidden mb-2">
                  <span
                    className="d-block font-bold text-gray-400 leading-relaxed mb-0 appear-animation"
                    data-appear-animation="maskUp"
                    data-appear-animation-delay="600"
                  >
                    OUR EXPERTISE
                  </span>
                </div>
                <div className="overflow-hidden mb-4">
                  <p
                    className="text-black font-bold text-3xl leading-relaxed mb-0 appear-animation"
                    data-appear-animation="maskUp"
                    data-appear-animation-delay="800"
                  >
                    World-Class Solutions for your Business
                  </p>
                </div>
                <p
                  className=" mb-5 text-gray-400"
                  data-appear-animation="fadeInUpShorter"
                  data-appear-animation-delay="1000"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  imperdiet libero id nisi euismod, sed porta est consectetur.
                  Vestibulum auctor felis eget orci semper vestibulum.
                  Pellentesque ultricies nibh gravida, accumsan libero luctus,
                  molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus
                  vitae dui.
                </p>
              </div>
            </div>
            <div className="row row-gutter-sm justify-content-center pb-5 mb-5">
              <div
                className="col-md-6 col-xl-4 mb-4 appear-animation"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="1200"
              >
                <div className="card shadow-md">
                  <div className="card-body text-center p-5 my-3">
                    <img
                      src="../src/assets/pngegg.png"
                      className="mx-auto"
                      width="100"
                      alt=""
                      data-icon
                      data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary pb-1 mb-4'}"
                    />
                    <p className="text-blue-500 font-bold text-2xl mb-3">
                      Cloud Services
                    </p>
                    <p className="custom-text-size-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed imperdiet libero id nisi euismod, sed porta est
                      consectetur.
                    </p>
                    <a
                      href="demo-it-services-services-detail.html"
                      className="text-color-dark font-weight-bold custom-text-size-1"
                    >
                      READ MORE +
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-xl-4 mb-4 appear-animation"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="1400"
              >
                <div className="card shadow-md">
                  <div className="card-body text-center p-5 my-3">
                    <img
                      src="../src/assets/pngegg.png"
                      className="mx-auto"
                      width="100"
                      alt=""
                      data-icon
                      data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary pb-1 mb-4'}"
                    />
                    <h4 className="text-blue-500 font-bold text-2xl mb-3">
                      Tech Support
                    </h4>
                    <p className="custom-text-size-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed imperdiet libero id nisi euismod, sed porta est
                      consectetur.
                    </p>
                    <a
                      href="demo-it-services-services-detail.html"
                      className="text-color-dark font-weight-bold custom-text-size-1"
                    >
                      READ MORE +
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-xl-4 mb-4 appear-animation"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="1600"
              >
                <div className="card shadow-md">
                  <div className="card-body text-center p-5 my-3">
                    <img
                      src="../src/assets/pngegg.png"
                      className="mx-auto"
                      width="100"
                      alt=""
                      data-icon
                      data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary pb-1 mb-4'}"
                    />
                    <h4 className="text-blue-500 font-bold text-2xl mb-3">
                      Data Security
                    </h4>
                    <p className="custom-text-size-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed imperdiet libero id nisi euismod, sed porta est
                      consectetur.
                    </p>
                    <a
                      href="demo-it-services-services-detail.html"
                      className="text-color-dark font-weight-bold custom-text-size-1"
                    >
                      READ MORE +
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-xl-4 mb-4 mb-xl-0 appear-animation"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="200"
              >
                <div className="card  shadow-md">
                  <div className="card-body text-center p-5 my-3">
                    <img
                      src="../src/assets/pngegg.png"
                      className="mx-auto"
                      width="100"
                      alt=""
                      data-icon
                      data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary pb-1 mb-4'}"
                    />
                    <h4 className="text-blue-500 font-bold text-2xl mb-3">
                      Software Dev
                    </h4>
                    <p className="custom-text-size-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed imperdiet libero id nisi euismod, sed porta est
                      consectetur.
                    </p>
                    <a
                      href="demo-it-services-services-detail.html"
                      className="text-color-dark font-weight-bold custom-text-size-1"
                    >
                      READ MORE +
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-xl-4 appear-animation"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="400"
              >
                <div className="card  shadow-md">
                  <div className="card-body text-center p-5 my-3">
                    <img
                      src="../src/assets/pngegg.png"
                      className="mx-auto"
                      width="100"
                      alt=""
                      data-icon
                      data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary pb-1 mb-4'}"
                    />
                    <h4 className="text-blue-500 font-bold text-2xl mb-3">
                      Server Consulting
                    </h4>
                    <p className="custom-text-size-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed imperdiet libero id nisi euismod, sed porta est
                      consectetur.
                    </p>
                    <a
                      href="demo-it-services-services-detail.html"
                      className="text-color-dark font-weight-bold custom-text-size-1"
                    >
                      READ MORE +
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="col">
                <div className="overflow-hidden mb-4">
                  <p className="text-black font-bold text-center text-3xl mb-0 appear-animation">
                    Our Process
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="circle flex justify-evenly">
                <div className="w-24 h-24 bg-white border-2 border-slate-300 rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-blue-500 hover:text-white hover:bg-blue-500 rounded-full ">
                    1
                  </div>
                </div>
                <div className="w-24 h-24 bg-white border-2 border-slate-300 rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center text-4xl text-blue-500 hover:text-white hover:bg-blue-500 rounded-full">
                    2
                  </div>
                </div>
                <div className="w-24 h-24 bg-white border-2 border-slate-300 rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center text-4xl text-blue-500 hover:text-white hover:bg-blue-500 rounded-full">
                    3
                  </div>
                </div>
              </div>

              <div className="flex justify-evenly mt-14 ml-10 ">
                <div className="w-44  ">
                  <p className="text-xl text-black font-bold">1.Brainstorm</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="w-44  ">
                  <p className="text-xl text-black font-bold">2.DEVLOPMENT</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="w-44  ">
                  <p className="text-xl text-black font-bold">3.DELIVERY</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black h-80 px-6 py-12">
          <div className="container mx-auto">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">
                Let's Discuss Your Business IT Services Needs
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in mauris auctor, dignissim elit nec, vehicula ex.
              </p>
              <a
                href="demo-it-services-contact.html"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full inline-block text-lg transition duration-300 transform hover:scale-105"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItService;
