import { lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = lazy(() => import("@/components/sections/Header"));
const WhyChooseUs = lazy(() => import("@/components/sections/WhyChooseUs"));
const Blogs = lazy(() => import("@/components/sections/Blogs"));
const Newsletter = lazy(() => import("@/components/sections/Newsletter"));

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      setTimeout(() => {
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Header />
      <WhyChooseUs />
      <Blogs />
      <Newsletter />
    </>
  );
}

export default App;
