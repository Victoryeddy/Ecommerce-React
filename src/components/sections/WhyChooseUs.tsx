import Button from "@/components/common/Button";
import Chair1 from "@/assets/SVG/chair1.svg";
import Chair2 from "@/assets/SVG/chair2.svg";
import Chair3 from "@/assets/SVG/chair3.svg";

import Truck from "@/assets/SVG/icon-truck.svg";
import Cart from "@/assets/SVG/bag.svg";
import Support from "@/assets/SVG/support.svg";
import Return from "@/assets/SVG/return.svg";

import ChooseUs from "@/assets/SVG/whyChooseUs.svg";
import ChooseUsOverlay from "@/assets/SVG/whyoverlay.svg";

export default function WhyChooseUs() {
  return (
    <>
      <div className="bg-neutral min-h-[100vh]">
        <div className="container mx-auto px-4">
          <div className="pt-[6rem] pb-[4rem]">
            <div className="lg:flex max-w-6xl mx-auto gap-4">
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
                <div className="grid grid-cols-1 lg:grid-cols-3">
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
                      className="h-[30vh] absolute left-0 top-[7rem] bg-header/10 rounded-2xl w-full z-[8] opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    hover:bg-primary-dark transform group-hover:-translate-y-2"
                    ></div>

                    <button
                      className="rounded-full bg-primary px-3 py-2 text-white absolute left-[40%] top-[20rem] 
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
                      className="h-[30vh] absolute left-0 top-[7rem] bg-header/10 rounded-2xl w-full z-[8] opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    hover:bg-primary-dark transform group-hover:-translate-y-2"
                    ></div>

                    <button
                      className="rounded-full bg-primary px-3 py-2 text-white absolute left-[40%] top-[20rem] 
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
                      className="h-[30vh] absolute left-0 top-[7rem] bg-header/10 rounded-2xl w-full z-[8] opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    hover:bg-primary-dark transform group-hover:-translate-y-2"
                    ></div>

                    <button
                      className="rounded-full bg-primary px-3 py-2 text-white absolute left-[40%] top-[20rem] 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    hover:bg-primary-dark transform group-hover:-translate-y-2"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:flex max-w-6xl mx-auto mt-[9rem]">
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
                    <p className="text-secondary font-semibold mt-[3.5rem]">Fast & Free Shipping</p>
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
                    <p className="text-secondary font-semibold mt-[3.5rem]">Easy to Shop</p>
                    <p className="text-secondary-light font-light pt-6">Quisque mi urna, consequat quam in, varius consequat lacus. In et nisi lobortis.</p>
                  </div>
                  <div className="lg:mt-6">
                    <div className="relative">
                      <img src={Cart} alt="" className="z-[9999] absolute" />
                      <div className=" w-7 h-7 bg-[#dce5e4] rounded-full p-3 absolute top-2 left-6 z-[9]"></div>
                    </div>
                    <p className="text-secondary font-semibold mt-[3.5rem]">24/7 Support</p>
                    <p className="text-secondary-light font-light pt-6">Quisque mi urna, consequat quam in, varius consequat lacus. In et nisi lobortis.</p>
                  </div>
                  <div className="lg:mt-6">
                    <div className="relative">
                      <img src={Return} alt="" className="z-[9999] absolute" />
                      <div className=" w-7 h-7 bg-[#dce5e4] rounded-full p-3 absolute top-2 left-6 z-[9]"></div>
                    </div>
                    <p className="text-secondary font-semibold mt-[3.5rem]">Hassle Free Returns</p>
                    <p className="text-secondary-light font-light pt-6">Quisque mi urna, consequat quam in, varius consequat lacus. In et nisi lobortis.</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:[50%] relative flex justify-end">
                <img src={ChooseUs} alt="" className="relative z-[999]" />
                <img
                  src={ChooseUsOverlay}
                  alt=""
                  className="absolute bottom-[75%] right-[55%] z-[9]"
                />
              </div>
            </div>


            <div className="lg:flex max-w-6xl mx-auto mt-[9rem]">
              <div className="w-full lg:[50%] relative">
                <img src={ChooseUs} alt="" className="relative z-[999]" />
                <img
                  src={ChooseUsOverlay}
                  alt=""
                  className="absolute bottom-[75%] z-[9]"
                />
              </div>
{/*               
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
                    <p className="text-secondary font-semibold mt-[3.5rem]">Fast & Free Shipping</p>
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
                    <p className="text-secondary font-semibold mt-[3.5rem]">Easy to Shop</p>
                    <p className="text-secondary-light font-light pt-6">Quisque mi urna, consequat quam in, varius consequat lacus. In et nisi lobortis.</p>
                  </div>
                  <div className="lg:mt-6">
                    <div className="relative">
                      <img src={Cart} alt="" className="z-[9999] absolute" />
                      <div className=" w-7 h-7 bg-[#dce5e4] rounded-full p-3 absolute top-2 left-6 z-[9]"></div>
                    </div>
                    <p className="text-secondary font-semibold mt-[3.5rem]">24/7 Support</p>
                    <p className="text-secondary-light font-light pt-6">Quisque mi urna, consequat quam in, varius consequat lacus. In et nisi lobortis.</p>
                  </div>
                  <div className="lg:mt-6">
                    <div className="relative">
                      <img src={Return} alt="" className="z-[9999] absolute" />
                      <div className=" w-7 h-7 bg-[#dce5e4] rounded-full p-3 absolute top-2 left-6 z-[9]"></div>
                    </div>
                    <p className="text-secondary font-semibold mt-[3.5rem]">Hassle Free Returns</p>
                    <p className="text-secondary-light font-light pt-6">Quisque mi urna, consequat quam in, varius consequat lacus. In et nisi lobortis.</p>
                  </div>
                </div>
              </div> */}
            </div>



          </div>
        </div>
      </div>
    </>
  );
}
