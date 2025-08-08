import Navbar from "@/components/sections/Navbar";
import Button from "@/components/common/Button"
import Furniture from "@/assets/SVG/couch.svg"
import FurnitureOverlay from "@/assets/SVG/furniture-overlay.svg"

export default function Header() {
  return (
    <>
      <header className="bg-header min-h-[50vh]">
        <div className="container mx-auto px-4">
          <Navbar />

          <div className="pt-[6rem] pb-4">
            <div className="lg:flex max-w-6xl mx-auto gap-2">
              <div className="w-full lg:w-[40%]">
                <p>
                  <button
                    className="bg-white/20 text-white  backdrop-blur-md border-0 py-1 px-4 rounded-full text-sm font-medium"
                  >
                    Welcome to Furni.
                  </button>
                </p>
                <h1 className="text-white text-3xl lg:text-5xl font-semibold pt-5">Modern Interior <br className="hidden lg:flex"/> Design Studio</h1>
                <p className="text-white/70 font-light pt-6">Quisque mi urna, consequat et quam in, varius <br className="hidden lg:flex"/> consequat lacus. In et nisi lobortis felis ornare <br className="hidden lg:flex"/>semper pellentesque est ex ut du.</p>

                <div className="pt-[3.5rem] flex gap-4">
                <Button className="btn-secondary rounded-full">
                  Shop Now
                </Button>
                <Button className="btn-outline rounded-full">
                  Explore
                </Button>
                </div>
              </div>

              <div className="w-full lg:w-[60%] ">
                <div className="lg:flex hidden relative">

                <img src={Furniture} alt="" className="z-[99999]"/>
                <img src={FurnitureOverlay} alt="" className="absolute top-0 right-0 z-[9]"/>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
