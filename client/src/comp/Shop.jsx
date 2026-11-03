import React from "react";

const Shop = () => {
  return (
    <div className="smain">
      <h1 className="shophead">Shop fitness equipment</h1>
      <br />
      <p className="shoppara">
        Every product lists manufacturer-verified safety details, so you can
        pick <br />
        the right weight with confidence.
        <div className="shopgrid">
          <div className="item1">
            <span className="it1h">
              <b>Product type</b>
            </span>
            <br />
            <br />
            <input type="checkbox" />
            <label className="Dumbbells">Dumbbells</label>
            <br />
            <input type="checkbox" />
            <label className="Dumbbells">Dumbbells</label>
            <br />
            <input type="checkbox" />
            <label className="Dumbbells">Dumbbells</label>
            <br />
            <input type="checkbox" />
            <label className="Dumbbells">Dumbbells</label>
            <br />
            <input type="checkbox" />
            <label className="Dumbbells">Dumbbells</label>
          </div>
          <div className="item2"></div>
          <div className="item3"></div>
          <div className="item4"></div>
          <div className="item5"></div>
        </div>
      </p>
    </div>
  );
};

export default Shop;
