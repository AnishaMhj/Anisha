import Image from "next/image";
import logo from "../public/logo.png"

function Header() {
  return (
    //    <header className="sticky top-0 z-50 grid-cols-2 bg-white shadow-md">
    //bg-gray-900 
    <header className="bg-gray-900 sticky top-0 z-50 shadow-md p-2 md:px-10">
      <div className="flex justify-center">
        <div className="flex items-center w-20 h-10 text-white cursor-pointer my-auto">
          <a href="#">Home</a>
        </div>
        <div className="flex items-center w-20 h-10 text-white cursor-pointer my-auto">
          <a href="#">About</a>
        </div>
        <div className="flex items-center w-20 h-10 text-white cursor-pointer my-auto">
          <a href="#">Resume</a>
        </div>
        <div className="flex items-center w-20 h-10 text-white cursor-pointer my-auto">
          <a href="#">Works</a>
        </div>
        <div className="flex items-center w-20 h-10 text-white cursor-pointer my-auto">
          <a href="#">Contact</a>
        </div>

      </div>
    </header>
  )
}

export default Header

