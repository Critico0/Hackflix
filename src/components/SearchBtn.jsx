import { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";

import search from "../assets/icons/Search.svg";

function SearchBtn({onInputChange}) {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const target = useRef(null);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    onInputChange(newValue);
  };
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
            <input
              className="search_btn"
              type="text"
              placeholder="Title"
              value={searchValue}
              onChange={handleInputChange}
            ></input>
          </div>
        )}
      </Overlay>
    </>
  );
}

export default SearchBtn;
