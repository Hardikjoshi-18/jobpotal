import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchJobHandler = () =>{
    dispatch(setSearchedQuery(query));
    navigate('/browse')
  }
  
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#7209b7] font-medium">
          No. 1 Job Hunt Website
        </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Find Your <span className="text-blue-600">Dream Job</span> Today
          </h1>
        <p>
            Explore thousands of job opportunities from top companies. 
            Search, apply, and take the next step in your career.
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-centergap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream jobs"
            onChange={(e)=>setQuery(e.target.value)}
            className="outline-none border-none w-full"
          />
          <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
            <Search className="h-5 w-5"/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
