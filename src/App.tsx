import { lazy } from 'react';

const Header = lazy(() => import("@/components/sections/Header"))
const WhyChooseUs = lazy(() => import("@/components/sections/WhyChooseUs")) 
const Blogs = lazy(() => import( "@/components/sections/Blogs"))
const Newsletter = lazy(() => import("@/components/sections/Newsletter")) 

function App() {
 

  return (
    <>
     <Header/>
     <WhyChooseUs/>
     <Blogs />
     <Newsletter />
    </>
  )
}

export default App
