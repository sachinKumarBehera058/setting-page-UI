import React, { useState, useRef, useEffect } from "react";
import ClickAwayListener from "react-click-away-listener";

const SearchBarComponent = ({width, placeholder="Search", isOpenInit=true }) => { 
    const [toggleMode, setToggleMode]  = useState(isOpenInit)  
    const inputRef = useRef(null);  
    const handleSearchFunctionality = () => {
        // perform the search functionality here 
    };
    const handleOpen = () => {
            setToggleMode(!toggleMode);
    };
    const handleClickAway = () => {
        setToggleMode(false);
    }
    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          setToggleMode(false);
        }
      };
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleClickAway);
        };
    }, []);
    return(
        <>
        {toggleMode ? 
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className="search-bar--wrapper" style={{width}}>
            <div className="search-bar--content">
                <div className="search-bar--imageicon" onClick={handleSearchFunctionality}><img src={"/attryb-ui/assets/icons/table/search.svg"} alt="" /></div>
                <div className="search-bar--input text-sm"><input ref={inputRef} className = "text-sm" type="text" placeholder={placeholder} name="search" /></div>
            </div>
            </div>
        </ClickAwayListener>
        :
            <div className="search-bar--imageicon search-bar--btn" onClick={handleOpen}>
                <img src={"attryb-ui/assets/icons/table/search.svg"} alt="searchIcon" />
            </div>
        }
        </>
    )
}
export default SearchBarComponent;


