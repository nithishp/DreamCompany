import React, { useState } from "react";
import {hamburger} from "../assets/icons";
import  {navLinks} from "../constants"
import headerImage from "../persnalAsset/headerImage.png"
const Nav = () => {
    const [open,setOpen] = useState(false);
    console.log(open);
  return (
    <header className="pl-2 pb-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <img src={headerImage} alt="logo" width={130} height={29} />
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block mr-5">
          <img
            src={hamburger}
            alt="hamburger"
            height={25}
            width={25}
            onClick={() => setOpen(!open)}
          />
          {open && (
            <div className="absolute inset-0 w-screen h-screen bg-black/90 flex flex-col items-center justify-center gap-5" onClick={()=>setOpen(!open)}>
                <p className="text-2xl font-bold text-white absolute top-10 right-10" onClick={()=>setOpen(!open)} >X</p>
                
      
                {navLinks.map((item) => (
                
                    <a
                      href={item.href}
                      className="leading-normal text-2xl font-semibold text-white" 
                      onClick={()=>{
                        setOpen(!open)
                      }}
                    >
                      {item.label}
             </a>
            
                ))}
              
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
