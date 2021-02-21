import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // dispatch(time({}));
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);



  const handleScroll = useCallback(() => {
    setIsSticky(window.scrollY >= 105);
  }, []);

  return (
    <div className={`header ${isSticky ? "sticky-header-main" : ""}`}>
      <div className="row">
        <div className="header-side1">
          <div className="logo-area">
           Logo
          </div>
        
        </div>
      </div>

    </div>
  );
};

export default React.memo(Header);
