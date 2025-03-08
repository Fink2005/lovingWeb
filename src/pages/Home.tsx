import React, {  useRef } from "react";
import { Link } from "react-router-dom";
import Loving from "../components/lottieFiles/Loving";
import { SparklesText } from "../components/magicui/sparkles-text";

const Home = () => {
const ccRef = useRef<any | null>(null)
  return (
    <Link to='/message'  className="bg-[#D5E5D5] block">    
      <div className="flex justify-center items-center h-screen">
        <div>
        {/* <audio id="player" autoPlay loop ref={ccRef}>
        <source src="/songs/videoplayback.webm" type="audio/webm"/>
        </audio>
        <iframe src="/songs/videoplayback.webm" allow="autoplay" id="audio" style={{display: 'none'}} />
        <iframe/>  */}
          <Loving />
          <SparklesText 
            sparklesCount={3}
            className="text-[#213956] font-bold text-center text-2xl"
            text="Mật thư"
          />
        </div>
      </div>
    </Link>
  );
};

export default Home;
