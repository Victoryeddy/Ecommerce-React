// import { lazy, Suspense } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "@/components/sections/Header"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import Blogs from "@/components/sections/Blogs"
import Newsletter from "@/components/sections/Newsletter"

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
