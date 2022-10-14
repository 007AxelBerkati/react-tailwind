import React from "react"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div name="home" className="w-full bg-[#0a192f] h-screen">
      {/* {Container} */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hy, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Axel Berkati
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Mobile Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] ">
          Currently studying at the University of Palangka Raya, majoring in
          Informatics Engineering. I'm very interested in matters related to IT
          and programming, especially in the Mobile Development section. I often
          make a small project to deepen understanding of the language
          programming being studied.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            Work
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
        <p></p>
      </div>
    </div>
  )
}

export default Home
