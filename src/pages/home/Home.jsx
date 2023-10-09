import React from "react";
import { Link } from "react-router-dom";
import { motion} from "framer-motion";

const Home = () => {
  
  return (
    <>
      <motion.section
        className="bg-primary w-screen py-32 md:py-20 lg:py-24 mb-0"
        initial={{ opacity: 0, y: 50}} 
        animate={{ opacity: 1, y: 0 }}
        exit={{opacity:0, y:20}} 
        transition={{ duration: 1 }}

      >
        <div className="container mx-auto xl:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="order-2 md:order-1 self-center md:p-static w-full md:w-auto text-center md:text-md-start">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold animate__animated animate__fadeInRightShorter animate__delay-200 text-white">
                RESOURCES
              </h1>
            </div>
            <div className="order-1 md:order-2 self-center mt-4 md:mt-0 text-center md:text-md-end">
              <ul className="breadcrumb text-white text-opacity-75 animate__animated animate__fadeInRightShorter animate__delay-400">
                <li>
                  <span className="text-lg">RESOURCES </span>
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

      <section className="bg-white dark:bg-gray-900 mt-10 ml-10 px-16 py-8">
        <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Payments tool for software companies
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Sales
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>
      <div className="flex mt-10 ml-9 px-14">
        <div class="w-[300px] h-[400px] rounded-md border relative mb-16 ml-16">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="Laptop"
            class="h-[200px] w-full rounded-md object-cover absolute  right-3 "
          />
          <div class="p-4 absolute bottom-0">
            <h1 class="text-lg font-semibold">About Macbook</h1>
            <p class="mt-3 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, debitis?
            </p>
            <button
              type="button"
              class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Read
            </button>
          </div>
        </div>
        <div class="w-[300px] h-[400px] rounded-md border relative mb-16 ml-16 mt-12">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="Laptop"
            class="h-[200px] w-full rounded-md object-cover absolute  left-3 "
          />
          <div class="p-4 absolute bottom-0">
            <h1 class="text-lg font-semibold">About Macbook</h1>
            <p class="mt-3 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, debitis?
            </p>
            <button
              type="button"
              class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Read
            </button>
          </div>
        </div>
        <div class="w-1/2 p-4 ">
          <div class="bg-white rounded-lg p-6">
            <h2 class="font-bold  text-gray-300">WHO WE ARE</h2>
            <p className="text-3xl font-extrabold w-80">
              We focus on bringing value and solving business challenges through
              the delivery of modern IT services and solutions.
            </p>
            <p class="mt-3 text-lg text-gray-600 w-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              imperdiet libero id nisi euismod, sed porta est consectetur.
              Vestibulum auctor felis eget orci semper vestibulum. Pellentesque
              ultricies nibh gravida, accumsan libero luctus, molestie nunc. In
              nibh ipsum, blandit id faucibus ac, finibus vitae dui.
            </p>
            <a
              href="demo-it-services-about-us.html"
              class="d-flex align-items-center custom-link-effect-1 text-primary-700 font-weight-bold text-decoration-none text-4 appear-animation"
              data-appear-animation="fadeInUpShorter"
              data-appear-animation-delay="1300"
            >
              Find Out More <i className="fa fa-chevron-right ml-3"></i>
            </a>
          </div>
        </div>
      </div>
      <section
        id="services"
        className="section custom-section-full-width bg-color-transparent border-0 mt-0 mb-1"
        style={{
          backgroundImage:
            "url(img/demos/it-services/backgrounds/dots-background-2.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
        }}
      >
        <div className="container container-xl-custom pb-5 mb-5">
          <div className="row">
            <div className="col">
              <div className="overflow-hidden mb-2">
                <span className="d-block font-semibold text-gray-400 text-center mb-0 appear-animation animate-maskUp animate-pulse">
                  OUR SERVICES
                </span>
              </div>
              <div className="overflow-hidden mb-5">
                <h2 className="text-4xl font-bold text-center line-height-2 mb-0 ">
                  World-Class Solutions for your Business
                </h2>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-md-6 col-lg-3 text-center mb-5">
              <img
                src="../src/assets/cloud.png"
                className="img-fluid ml-16"
                width="100"
                alt=""
              />
              <h4 className="text-primary font-bold text-2xl mb-3">
                Cloud Services
              </h4>
              <p className="custom-text-size-1 px-lg-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                viverra erat orci.
              </p>
              <a
                href="demo-it-services-services-detail.html"
                className="text-color-dark font-weight-bold custom-text-size-1"
              >
                READ MORE +
              </a>
            </div>
            <div className="col-md-6 col-lg-3 text-center mb-5 mb-lg-0 appear-animation animate-fadeInUpShorter animate-delay-850">
              <img
                src="../src/assets/cloud.png"
                className="img-fluid ml-16"
                width="100"
                alt=""
                data-icon
                data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary pb-2 mb-4'}"
              />
              <h4 className="text-primary font-bold text-2xl mb-3">
                Cloud Services
              </h4>
              <p className="custom-text-size-1 px-lg-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                viverra erat orci.
              </p>
              <a
                href="demo-it-services-services-detail.html"
                className="text-color-dark font-weight-bold custom-text-size-1"
              >
                READ MORE +
              </a>
            </div>
            <div className="col-md-6 col-lg-3 text-center mb-5 mb-lg-0 appear-animation animate-fadeInUpShorter animate-delay-1050">
              <img
                src="../src/assets/cloud.png"
                className="img-fluid ml-16"
                width="100"
                alt=""
                data-icon
                data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary pb-2 mb-4'}"
              />
              <h4 className="text-primary font-bold text-2xl mb-3">
                Cloud Services
              </h4>
              <p className="custom-text-size-1 px-lg-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                viverra erat orci.
              </p>
              <a
                href="demo-it-services-services-detail.html"
                className="text-color-dark font-weight-bold custom-text-size-1"
              >
                READ MORE +
              </a>
            </div>
            <div className="col-md-6 col-lg-3 text-center mb-5 mb-lg-0 appear-animation animate-fadeInUpShorter animate-delay-1250">
              <img
                src="../src/assets/cloud.png"
                className="img-fluid ml-16"
                width="100"
                alt=""
                data-icon
                data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary pb-2 mb-4'}"
              />
              <h4 className="text-primary font-bold text-2xl mb-3">
                Cloud Services
              </h4>
              <p className="custom-text-size-1 px-lg-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                viverra erat orci.
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
      </section>
    </>
  );
};

export default Home;
