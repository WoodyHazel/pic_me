import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

import { tilePhotos } from "../utils";
import Product from "../components/Product";
import { Context } from "../Context";
import Form from "../components/Form";
import PageSelector from "../components/PageSelector";

function Home() {
  const { allProducts } = useContext(Context);

  const products = allProducts.map((product, i) => {
    return (
      <Product key={product.id} product={product} className={tilePhotos(i)} />
    );
  });

  const [headerImg, setHeaderImg] = useState(
    "https://images.unsplash.com/photo-1632226901385-e07fe19a345e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
  );
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/random?query=nature&orientation=landscape&client_id=oKf3ItP74Z0Ym5rA4n98Yra0VtDeQL0pV10f7oj6M9s`
    )
      .then((res) => res.json())
      .then((data) => setHeaderImg(data.urls.regular));
  }, [count]);

  const style = {
    backgroundImage: `url(${headerImg})`,
  };

  return (
    <div className="home page">
      <div style={style} className="container">
        <header>
          <FontAwesomeIcon
            size="lg"
            icon={faArrowsRotate}
            className="icon"
            onClick={() => setCount((prevCount) => prevCount + 1)}
          />
          <h1>
            Welcome to<span className="brand">PicMe</span>
          </h1>
          <span>-</span>
          <h2>the Best Online Store for Top Quailty Photos</h2>
        </header>
        <Form />
      </div>
      <PageSelector />
      <div className="product-grid">{products}</div>
      <PageSelector />
    </div>
  );
}

export default Home;
