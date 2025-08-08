import Button from "@/components/common/Button";
import Chair1 from "@/assets/SVG/chair1.svg";
import Chair2 from "@/assets/SVG/chair2.svg";
import Chair3 from "@/assets/SVG/chair3.svg";

export default function WhyChooseUs() {
  return (
    <>
      <header className="bg-neutral min-h-[80vh]">
        <div className="container mx-auto px-4">
          <div className="pt-[6rem] pb-[4rem]">
            <div className="lg:flex max-w-5xl mx-auto gap-4">
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
                      <p className="text-secondary text-center pt-4 font-semibold">$500.00</p>
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
                      <p className="text-secondary text-center pt-4 font-semibold">$200.00</p>

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
                      <p className="text-secondary text-center pt-4 font-semibold">$600.00</p>

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
          </div>
        </div>
      </header>
    </>
  );
}
