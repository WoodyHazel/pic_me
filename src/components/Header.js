import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="header">
      <Link className="link" to="/pic_me">
        <h2 className="brand">PicMe</h2>
      </Link>
      <div>
        <Link to="/info" className="link">
          <FontAwesomeIcon size="2x" icon={faCircleQuestion} className="icon" />
        </Link>
        <Link to="/favorites" className="link px1">
          <FontAwesomeIcon size="2x" icon={faHeart} className="icon" />
        </Link>
        <Link to="/cart" className="link">
          <FontAwesomeIcon size="2x" icon={faCartShopping} className="icon" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
