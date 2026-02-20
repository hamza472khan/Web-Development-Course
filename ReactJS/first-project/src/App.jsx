import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Header } from './Header';
import { Header } from './Header'
import {Hero} from './components/Hero'
import Catagory from './components/Category/Catagory'
import Cart from './components/cart'

const App = () => {
  return (
    <div>
      {/* <h1 className="text-[40px] font-bold italic border-[1.5px] border-[pink] rounded-3x1 bg-[red] text-center h-[60px] flex justify-center items-center hover:bg-green-400 hover:rounded transition-all duration-1000 ">Welcome to Thilwand</h1> */}
      {/* <Header/>
      <Hero/>
      <Catagory/> */}
      {/* <div className="border h-[400px] ">
        <div className="border w-[100px] h-[100px]"></div>
        <div className="border w-[100px] h-[100px]"></div>
        <div className="border w-[100px] h-[100px]"></div>
        <div className="border w-[100px] h-[100px]"></div>
        <div className="border w-[100px] h-[100px]"></div>
      </div> */}
      <Cart/>
      
    </div>
  );
};

export default App;
