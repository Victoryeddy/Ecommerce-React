import Button from "@/components/common/Button";
import Chair1 from "@/assets/SVG/chair1.svg";
import Chair2 from "@/assets/SVG/chair2.svg";
import Chair3 from "@/assets/SVG/chair3.svg";

import Slider from "@/components/sections/Slider";

import Truck from "@/assets/SVG/icon-truck.svg";
import Cart from "@/assets/SVG/bag.svg";
import Support from "@/assets/SVG/support.svg";
import Return from "@/assets/SVG/return.svg";

import ChooseUs from "@/assets/SVG/whyChooseUs.svg";
import ChooseUsOverlay from "@/assets/SVG/whyoverlay.svg";

import InteriorOverlay from "@/assets/SVG/interiorOverlay.svg";
import InteriorOne from "@/assets/interior1.png";


export default function WhyChooseUs() {
  return (
    <>
      <div className="bg-neutral min-h-[100vh]">
        <div className="container mx-auto px-6">
          <div className="pt-[6rem] pb-[4rem]">
            <div className="lg:flex max-w-6xl mx-auto gap-4"  data-aos="fade-right" data-aos-delay="500">
              <div className="w-full lg:w-[30%]">
                <h1 className="text-secondary text-2xl lg:text-3xl font-semibold pt-5">
                  Crafted with <br className="hidden lg:flex" /> excellent{" "}
                  <br className="hidden lg:flex" /> material.
                </h1>
                <p className="text-secondary-light font-light pt-6">
                  Quisque mi urna, consequat <br className="hidden lg:flex" />{" "}
                  quam in, varius consequat lacus.{" "}
                  <br className="hidden lg:flex" /> In et nisi lobortis felis
                  ornare <br className="hidden lg:flex" /> semper pellentesque.
                </p>

                <div className="pt-[3.5rem] flex gap-4">
                  <Button className="btn-primary rounded-full">Explore</Button>
                </div>
              </div>

              <div className="w-full lg:w-[70%]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <div className="p-5 relative group">
                    <div className="">
                      <div className="flex justify-center">
                        <img
                          src={Chair1}
                          alt=""
                          className="h-[12rem] z-[999] group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-secondary text-center pt-4">
                        Nordic Chair
                      </p>
                      <p className="text-secondary text-center pt-4 font-semibold">
                        $500.00
                      </p>
                    </div>
                    <div
                      className="h-[80%] absolute left-0 top-[7rem] bg-header/10 rounded-2xl w-full z-[8] opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    hover:bg-primary-dark transform group-hover:-translate-y-2"
                    ></div>

                    <button
                      className="rounded-full bg-primary px-3 py-2 text-white absolute left-[45%] top-[20rem] 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    hover:bg-primary-dark transform group-hover:-translate-y-2"
                    >
                      +
                    </button>
                  </div>
                  <div className="p-5 relative group">
                    <div className="">
                      <div className="flex justify-center">
                        <img
                          src={Chair2}
                          alt=""
                          className="h-[12rem] z-[999] group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-secondary text-center pt-4">
                        Kruzo Aero Chair
                      </p>
                      <p className="text-secondary text-center pt-4 font-semibold">
                        $200.00
                      </p>
                    </div>
                    <div
                      className="h-[80%] absolute left-0 top-[7rem] bg-header/10 rounded-2xl w-full z-[8] opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    hover:bg-primary-dark transform group-hover:-translate-y-2"
                    ></div>

                    <button
                      className="rounded-full bg-primary px-3 py-2 text-white absolute left-[45%] top-[20rem] 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    hover:bg-primary-dark transform group-hover:-translate-y-2"
                    >
                      +
                    </button>
                  </div>
                  <div className="p-5 relative group">
                    <div className="">
                      <div className="flex justify-center">
                        <img
                          src={Chair3}
                          alt=""
                          className="h-[12rem] z-[999] group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-secondary text-center pt-4">
                        Ergonomic Chair
                      </p>
                      <p className="text-secondary text-center pt-4 font-semibold">
                        $600.00
                      </p>
                    </div>
                    <div
                      className="h-[80%] absolute left-0 top-[7rem] bg-header/10 rounded-2xl w-full z-[8] opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    hover:bg-primary-dark transform group-hover:-translate-y-2"
                    ></div>

                    <button
                      className="rounded-full bg-primary px-3 py-2 text-white absolute left-[45%] top-[20rem] 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    hover:bg-primary-dark transform group-hover:-translate-y-2"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:flex max-w-6xl mx-auto mt-[9rem] " data-aos="fade-left" data-aos-delay="500" id="services">
              <div className="w-full lg:[50%]">
                <h1 className="text-secondary text-2xl lg:text-3xl font-semibold pt-5">
                  Why Choose Us
                </h1>
                <p className="text-secondary-light font-light pt-6">
                  Quisque mi urna, consequat quam in, varius consequat{" "}
                  <br className="lg:flex hidden" /> lacus. In et nisi lobortis.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-[4rem]">
                  <div>
                    <div className="relative">
                      <img src={Truck} alt="" className="z-[999] absolute" />
                      <div className=" w-7 h-7 bg-[#dce5e4] rounded-full p-3 absolute top-2 left-6 z-[9]"></div>
                    </div>
                    <p className="text-secondary font-semibold mt-[3.5rem]">
                      Fast & Free Shipping
                    </p>
                    <p className="text-secondary-light font-light pt-6">
                      Quisque mi urna, consequat quam in, varius consequat
                      lacus. In et nisi lobortis.
                    </p>
                  </div>

                  <div>
                    <div className="relative">
                      <img src={Support} alt="" className="z-[9999] absolute" />
                      <div className=" w-7 h-7 bg-[#dce5e4] rounded-full p-3 absolute top-2 left-6 z-[9]"></div>
                    </div>
                    <p className="text-secondary font-semibold mt-[3.5rem]">
                      Easy to Shop
                    </p>
                    <p className="text-secondary-light font-light pt-6">
                      Quisque mi urna, consequat quam in, varius consequat
                      lacus. In et nisi lobortis.
                    </p>
                  </div>
                  <div className="lg:mt-6">
                    <div className="relative">
                      <img src={Cart} alt="" className="z-[9999] absolute" />
                      <div className=" w-7 h-7 bg-[#dce5e4] rounded-full p-3 absolute top-2 left-6 z-[9]"></div>
                    </div>
                    <p className="text-secondary font-semibold mt-[3.5rem]">
                      24/7 Support
                    </p>
                    <p className="text-secondary-light font-light pt-6">
                      Quisque mi urna, consequat quam in, varius consequat
                      lacus. In et nisi lobortis.
                    </p>
                  </div>
                  <div className="lg:mt-6">
                    <div className="relative">
                      <img src={Return} alt="" className="z-[9999] absolute" />
                      <div className=" w-7 h-7 bg-[#dce5e4] rounded-full p-3 absolute top-2 left-6 z-[9]"></div>
                    </div>
                    <p className="text-secondary font-semibold mt-[3.5rem]">
                      Hassle Free Returns
                    </p>
                    <p className="text-secondary-light font-light pt-6">
                      Quisque mi urna, consequat quam in, varius consequat
                      lacus. In et nisi lobortis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:[50%] relative flex justify-end mt-12 lg:mt-0">
                <img src={ChooseUs} alt="" className="relative z-[999]" />
                <img
                  src={ChooseUsOverlay}
                  alt=""
                  className="absolute md:left-24 lg:bottom-[75%] lg:right-[55%] z-[9]"
                />
              </div>
            </div>

            <div className="lg:flex max-w-6xl mx-auto mt-[10rem]" data-aos="fade-right" data-aos-delay="500">
              <div className="w-full lg:w-[50%] relative">
                <img
                  src={InteriorOne}
                  alt=""
                  className="relative z-[999] w-full"
                />
                {/* <img
                  src={InteriorTwo}
                  alt=""
                  className="absolute z-[999] hidden lg:block lg:left-[20rem] lg:top-[12rem] bottom-0"
                />
                <img
                  src={InteriorThree}
                  alt=""
                  className="hidden lg:block lg:absolute z-[999] lg:left-[25rem] lg:top-0"
                /> */}
                <img
                  src={InteriorOverlay}
                  alt=""
                  className="absolute bottom-[68%] z-[9] md:right-[8rem] lg:right-[45%]"
                />
              </div>

              <div className="w-full lg:[50%]" id="aboutUs">
                <div className="lg:max-w-xl lg:ms-auto">
                  <h1 className="text-secondary text-2xl lg:text-3xl font-semibold pt-5">
                    We Help You Make Modern Interior
                  </h1>

                  <p className="text-secondary-light font-light pt-6">
                    Quisque mi urna, consequat et quam in, varius consequat
                    lacus. In et nisi lobortis felis ornare semper. Mauris
                    lacinia, tortor vitae suscipit euismod, enim nunc vehicula
                    ante, eu pellentesque est ex ut dui.
                  </p>

                  <div className="pt-8">
                    <ul className="list-none grid grid-cols-2 gap-3">
                      <li className="bg-[url('/Ellipse.svg')] bg-no-repeat bg-left pl-8 py-1 text-secondary-light font-light">
                        Quisque mi urna, consequat et quam in.
                      </li>
                      <li className="bg-[url('/Ellipse.svg')] bg-no-repeat bg-left pl-8 py-1 text-secondary-light font-light">
                        Quisque mi urna, consequat et quam in.
                      </li>
                      <li className="bg-[url('/Ellipse.svg')] bg-no-repeat bg-left pl-8 py-1 text-secondary-light font-light">
                        Quisque mi urna, consequat et quam in.
                      </li>
                      <li className="bg-[url('/Ellipse.svg')] bg-no-repeat bg-left pl-8 py-1 text-secondary-light font-light">
                        Quisque mi urna, consequat et quam in.
                      </li>
                    </ul>
                  </div>

                  <div className="pt-[3.5rem] flex gap-4">
                    <Button className="btn-primary rounded-full">
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            </div>


            <div className=" max-w-6xl mx-auto mt-[10rem]" data-aos="fade-left" data-aos-delay="500">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <div className="p-5 relative group">
                    <div className="">
                      <div className="flex justify-center">
                        <img
                          src={Chair1}
                          alt=""
                          className="h-[12rem] z-[999] group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-secondary text-center pt-4">
                        Nordic Chair
                      </p>
                      <p className="text-secondary text-center pt-4 font-semibold">
                        $500.00
                      </p>
                    </div>
                    <div
                      className="h-[80%] absolute left-0 top-[7rem] bg-header/10 rounded-2xl w-full z-[8] opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    hover:bg-primary-dark transform group-hover:-translate-y-2"
                    ></div>

                 
                  </div>
                  <div className="p-5 relative group">
                    <div className="">
                      <div className="flex justify-center">
                        <img
                          src={Chair2}
                          alt=""
                          className="h-[12rem] z-[999] group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-secondary text-center pt-4">
                        Kruzo Aero Chair
                      </p>
                      <p className="text-secondary text-center pt-4 font-semibold">
                        $200.00
                      </p>
                    </div>
                    <div
                      className="h-[80%] absolute left-0 top-[7rem] bg-header/10 rounded-2xl w-full z-[8] opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    hover:bg-primary-dark transform group-hover:-translate-y-2"
                    ></div>

                  
                  </div>
                  <div className="p-5 relative group">
                    <div className="">
                      <div className="flex justify-center">
                        <img
                          src={Chair3}
                          alt=""
                          className="h-[12rem] z-[999] group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-secondary text-center pt-4">
                        Ergonomic Chair
                      </p>
                      <p className="text-secondary text-center pt-4 font-semibold">
                        $600.00
                      </p>
                    </div>
                    <div
                      className="h-[80%] absolute left-0 top-[7rem] bg-header/10 rounded-2xl w-full z-[8] opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    hover:bg-primary-dark transform group-hover:-translate-y-2"
                    ></div>

                  
                  </div>
                </div>
            </div>

            <div className=" max-w-6xl mx-auto mt-[10rem]">
                <Slider/>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}
