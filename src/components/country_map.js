import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

class CountryMap extends Component {

  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projection="mercator"
          projectionConfig={{ scale:1800 }}
          width={600}
          height={551}
          style={{
            width: "100%",
            height: "auto",

          }}
          >
          <ZoomableGroup center={[-72,4 ]}  disablePanning>
            <Geographies geography="../lib/colombia.json">
              {(geographies, projection) =>
                geographies.map((geography, i) =>
                  geography.id !== "ATA" && (
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      onClick={this.props.changeState}
                      style={{
                        default: {
                          cursor: "pointer",
                          fill: "#cbcbcbff",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        hover: {
                          fill: "#bf9446ff",
                          cursor: "pointer",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        pressed: {
                          fill: "#bf9446ff",
                          cursor: "pointer",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                      }}
                    />
              ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default CountryMap
