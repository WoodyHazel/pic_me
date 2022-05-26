import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  return (
    <footer className="footer">
      <div className="footer-nav">
        <Link to="/the_perfect_pic" onClick={scrollTop}>
          Shop
        </Link>
        <Link to="/info" onClick={scrollTop}>
          Info
        </Link>
        <Link to="/favorites" onClick={scrollTop}>
          Favorites
        </Link>
        <Link to="/cart" onClick={scrollTop}>
          Cart
        </Link>
        <button onClick={scrollTop}>
          top
          <FontAwesomeIcon icon={faChevronUp} className="icon" />
        </button>
      </div>
      <p className="copyright">
        Copyright &copy; 2022 Woody Hazel. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
