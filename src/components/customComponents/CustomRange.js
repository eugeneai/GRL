import React from "react";
import { Range, getTrackBackground } from "react-range";
import { connect } from 'react-redux';

const STEP = 1;
const MIN = 1;
const MAX = 8;

class CustomRange extends React.Component {
  
  state = {
    values: [this.props.width]
  }
  
  async change() {
    await this.props.dispatch({type: "TOGGLE_ACTIVE_TAB"})
    await this.props.dispatch({type: "SET_LINE_WIDTH", payload: this.state.values[0]})
    await this.props.dispatch({type: "TOGGLE_ACTIVE_TAB"})
  }
  
  render() {
    const { width } = this.props
    
    return (
        <Range
          values={[width]}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => {
            this.setState({values})
            this.change(values[0])
          }}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%"
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "3px",
                  margin: "0 15px",
                  width: "240px",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: [width],
                    colors: ["#898B8D", "#ccc"],
                    min: MIN,
                    max: MAX
                  }),
                  alignSelf: "center"
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "30px",
                width: "30px",
                borderRadius: "50%",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA",
                outline: "none",
              }}
            >
              <div
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: isDragged ? "#898B8D" : "#CCC"
                }}
              />
            </div>
          )}
        />
    );
  }
}
export default connect()(CustomRange)
