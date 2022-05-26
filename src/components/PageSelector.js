import React, { useContext } from "react";
import { Context } from "../Context";
function PageSelector() {
  const { pageCount, setPageCount } = useContext(Context);

  function prevPage() {
    setPageCount((prevCount) => prevCount - 1);
    window.scrollTo(0, 0);
  }

  function nextPage() {
    setPageCount((prevCount) => prevCount + 1);
    window.scrollTo(0, 0);
  }
  return (
    <div className="page-selector">
      {pageCount === 1 ? (
        <button disabled>previous page</button>
      ) : (
        <button onClick={prevPage}>previous page</button>
      )}
      <span className="px1">Current Page: {pageCount}</span>
      <button onClick={nextPage}>next page</button>
    </div>
  );
}

export default PageSelector;
