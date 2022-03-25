import React from "react"
import "../../styles/sass/components/background/redFlow.scss"

export default function RedFlow(props) {
  return (
    <svg
      width={1500}
      height={766}
      viewBox="0 0 1500 766"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="red-flow"
      {...props}
    >
      <path
        d="M1190 12.0629C1394 -39.4371 1413 86.0629 1500 160.563C1587 235.063 1651 404.563 1500 404.562C1349 404.562 1171 605.563 846 747.063C521 888.563 91.4983 161.063 -37.0017 588.063C-165.502 1015.06 -148.002 296.063 -12.0017 288.563C123.998 281.063 625.998 632.562 811.998 539.563C997.998 446.564 985.998 63.5629 1190 12.0629Z"
        fill="#DA6A71"
      />
      <path
        d="M1190 12.0629C1394 -39.4371 1413 86.0629 1500 160.563C1587 235.063 1651 404.563 1500 404.562C1349 404.562 1171 605.563 846 747.063C521 888.563 91.4983 161.063 -37.0017 588.063C-165.502 1015.06 -148.002 296.063 -12.0017 288.563C123.998 281.063 625.998 632.562 811.998 539.563C997.998 446.564 985.998 63.5629 1190 12.0629Z"
        fill="url(#pattern1)"
        fillOpacity={0.1}
      />
      <defs>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width={0.0886227}
          height={0.19853}
        >
          <use
            xlinkHref="#image0_123_420"
            transform="translate(0.0886227) scale(0.000291522 0.000653058) rotate(90)"
          />
        </pattern>
        <image
          id="image0_123_420"
          width={304}
          height={304}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}