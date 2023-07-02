import React from "react";

const Shimmer = () => {
    return (
        <div className="restaurant-list">
          {Array(10)
            .fill("")
            .map((e, index) => (
              <div key={index} className="shimmer-card1"></div>
            ))}
        </div>
      );
    }

export default Shimmer;


