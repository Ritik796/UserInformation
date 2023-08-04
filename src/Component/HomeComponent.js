import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function HomeComponent() {
  return (
    <>
      <div className="main">
        <div className="cont">
          <p>
            Personal data is quickly becoming a commodity in today's high
            technology world. This information is used by banks, investment and
            brokerage companies, credit card merchants, government agencies
            (local, state and federal), and consumer product-based companies.
            Most people probably don't realize the amount of information that's
            shared between companies, or how often it's done. Many companies
            sell and share customer data to help sell products and find out what
            new products they should produce. Other uses include gathering
            information about inventory levels to help better determine what
            types of products are bought at which store, when and how often.
            This can be used for inventory and production, to make sure that the
            store (or stores for chains, like Safeway and Long's Drugs) can have
            the products available when they're needed.
          </p>
          
          <Link to="/login">
            <button type="submit" className="homes">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
