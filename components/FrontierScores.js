import React from "react"

export default function FrontierScores() {
  return (
    <>
      <div className="scores">
        <div>
          <p>Likeliness to Use </p>
          <h3> 8.4 </h3>
        </div>
        <div>
          <p>Likeliness to Recommend </p>
          <h3> 8.6 </h3>
        </div>
      </div>
      <div className="feedback">
        <p>
          &quot;Aesthetically pleasing design&quot;{" "}
          <span className="source">-Kevin</span>
        </p>
        <p>
          &quot;Quick and easy understanding of the product from the landing
          page alone&quot;
          <span className="source">-Cynthia</span>
        </p>
        <p>
          &quot;Overall intrigue and excitement about the product idea&quot;{" "}
          <span className="source">-Jason</span>
        </p>
      </div>
    </>
  )
}
