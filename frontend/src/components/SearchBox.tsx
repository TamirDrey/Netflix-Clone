import { useAppSelector } from "@/store/hooks";
import {
  selectQuery,
  setQuery,
} from "@/store/reducers/searchReducer";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBox = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();
  const query = useAppSelector(selectQuery);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    dispatch(setQuery(newQuery));
    const searchParams = new URLSearchParams(search);
    searchParams.set("q", newQuery || "");
    navigate(`/search?${searchParams.toString()}`);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchParams = new URLSearchParams(search);
    searchParams.set("q", query || "");
    navigate(`/search?${searchParams.toString()}`);
  };

  return (
    <form className="d-flex me-auto w-50" onSubmit={submitHandler}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search for products"
        aria-label="Search"
        value={query || ""}
        onChange={handleInputChange}
      />
      <button className="btn btn-outline-primary" type="submit">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBox;
