import { useState, useMemo } from "react";
import { GrFormNext, GrFormRefresh } from "react-icons/gr";
import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import "../../App.css";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import navDate from "../../consts/const";

const Navbar = ({ data, setDark, dark, setFilter, model }) => {
  const [navbar, setNavbar] = useState(false);
  const [search, setSearch] = useState("");  
  const [showSuggestions, setShowSuggestions] = useState(false);  

  const toggleTheme = () => {
    setDark(!dark);  
  };

  const toggleMenu = () => {
    setNavbar(!navbar); 
  };

  const Product = useMemo(() => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setShowSuggestions(value !== ""); 
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    setSearch("");  
    setShowSuggestions(false);  
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false); 
    }, 200);
  };

  return (
    <div className={`fixed z-50 w-full ${model ? "pointer-events-none" : ""}  ${dark ? "bg-slate-900" : "bg-white"}`}>
      {navbar ? 
        <div className={`flex items-center justify-between p-4 ${dark ? "dark" : ""}`}>
          <ul className={`flex items-center gap-8 ${dark ? "text-white" : "text-blue-600"} md:flex-row md:gap-12 md:space-x-8`}>
            {navDate.map((item) => (
              <Link key={item.link} to={item.link}>
                <li>{item.text}</li>
              </Link>
            ))}
            <select
              className="w-10 p-2 bg-white border border-gray-300 text-black rounded-md 
              shadow-sm focus:outline-none  focus:ring-blue-500 md:w-auto"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option className="text-black" value="smartphones">smartphones</option>
              <option className="text-black" value="laptops">laptops</option>
              <option className="text-black" value="headphones">headphones</option>
              <option className="text-black" value="gaming">gaming</option>
              <option className="text-black" value="home">home</option>
            </select>
          </ul>
          <button
            onClick={toggleMenu}
            className={`w-11 h-10 flex items-center justify-center text-white
              rounded-md focus:outline-none ${dark ? "bg-blue-950" : "bg-sky-600"}`}
          >
            <GrFormRefresh className="text-lg" />
          </button>
        </div>
      : 
        <div className={`flex items-center justify-between p-4 ${dark ? "dark" : ""}`}>
          <div className="relative">
            <form className="flex items-center" onSubmit={handleSearchClick}>
              <div className="w-full lg:w-96"> 
                <input
                  className={`w-56 h-10 rounded-md bg-gray-200 text-gray-700 focus:outline-none px-3 
                  ${dark ? "dark:bg-gray-700 dark:text-white" : ""}`}
                  type="search"
                  placeholder="Search"
                  value={search}
                  onChange={handleSearchChange}
                  onBlur={handleBlur}
                  onFocus={() => setShowSuggestions(search !== "")}
                />
                <button
                  className={`h-10 text-white rounded-md focus:outline-none absolute right-0 top-0 xl:hidden
                  ${dark ? "dark:bg-sky-950" : "bg-sky-700"}`}
                  type="submit"
                >
                  <IoSearchOutline className='w-10 h-5'/>
                </button>
                {showSuggestions && search && (
                  <div
                    className={`absolute w-full mt-1 bg-white shadow-lg rounded-md border sm:w-60 lg:w-72 
                    ${dark ? "dark:bg-gray-800" : ""}`}
                  >  
                    {Product.length > 0 ? (
                      <ul className="max-h-60 overflow-y-auto">
                        {Product.map((game) => (
                          <Link key={game._id} to={`/${game._id}`}>
                            <li  
                              className={`px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center justify-between 
                              ${dark ? "dark:hover:bg-gray-600" : ""}`}
                              onClick={() => {
                                setSearch(game.title);  
                                setShowSuggestions(false);  
                              }}
                            >
                              {game.title.slice(0, 15)} <IoSearchOutline />
                            </li>
                          </Link>
                        ))}
                      </ul>
                    ) : (
                      <div className="px-4 py-2 text-gray-500">No results found</div>
                    )}
                  </div>
                )}
              </div>
            </form>
          </div>
          <div className="gap-2 flex items-center">
            {dark ? (
              <button
                onClick={toggleTheme}
                className="w-14 h-10 text-white bg-blue-950 rounded-lg ml-1
                transition-all focus:outline-none items-center justify-center flex"
              >
                <FaMoon className="w-5 h-5 text-yellow-300" />
              </button>
            ) : (
              <button
                onClick={toggleTheme}
                className="w-14 h-10 text-white rounded-lg transition-all focus:outline-none
                bg-sky-600 items-center justify-center flex ml-1"
              >
                <BsFillSunFill className="w-5 h-5 text-yellow-300" />
              </button>
            )}
            <button
              onClick={toggleMenu}
              className={`w-11 h-10 text-white rounded-md focus:outline-none flex items-center justify-center ${dark ? "bg-blue-950" : "bg-sky-600"}`}
            >
              <GrFormNext className="text-lg" />
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default Navbar;
