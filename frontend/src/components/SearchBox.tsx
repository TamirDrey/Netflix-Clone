import { useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    const searchParams = new URLSearchParams(search);
    searchParams.set("q", query);
    navigate(`/search?${searchParams.toString()}`);
  }, [query, search, navigate]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchParams = new URLSearchParams(search);
    searchParams.set("q", query);
    navigate(`/search?${searchParams.toString()}`);
  };

  return (
    <form className="d-flex me-auto w-50" onSubmit={submitHandler}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search for products"
        aria-label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-outline-primary" type="submit">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBox;