import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import img from "../../../laziLoadimage/img";
import contentWrapper from "../../../contentWrapper/contentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);
  const searchQueryHandle = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <>
      <div className="heroBanner">
        <div className="backdrop-img">
          <img src={background} />
        </div>
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
