import { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";

import search from "../assets/icons/Search.svg";

function SearchBtn() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <span ref={target} onClick={() => setShow(!show)}>
        <img className="icon" src={search}></img>
      </span>
      <Overlay target={target.current} show={show} placement="left">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: "absolute",
              padding: "2px 10px",
              color: "white",
              borderRadius: 0,
              ...props.style,
            }}
          >
            <input className="red" type="text" placeholder="Title"></input>
          </div>
        )}
      </Overlay>
    </>
  );
}

export default SearchBtn;
