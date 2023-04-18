import React, { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, loading } = useFetch("/movie/upcoming");
  const searchQueryHandle = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <>
      <div className="heroBanner">
        <div className="wrapper">
          <div className="herobannerContant">
            <span className="title">Welcome.</span>
            <span className="subTitle">
              Millions of movies , TV shows and people to discover Explore now.
            </span>
            <div className="searchInput">
              <input
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandle}
                type="text"
                placeholder="Search for a Movie or Tv show..."
              />
              <button>Search </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
