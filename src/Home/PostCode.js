import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./PostCode.css";
function PostCode({ show, handleCode, handleLang, handleClose }) {
  const code_modal_style = show
    ? "postcode display_block"
    : "postcode display_none";
  const [code, setCode] = useState("");
  const [lang, setLang] = useState("");
  return (
    <div className={code_modal_style}>
      <div className="text_box">
        <h3>Code</h3>
        <hr />
        <select
          value={lang}
          onChange={(e) => {
            setLang(e.target.value);
          }}
        >
          <option value="c-type">C/C++</option>
          <option value="py">Python</option>
          <option value="java">Java</option>
        </select>
        <textarea
          cols="100"
          autoFocus
          rows="15"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        <hr />
        <div className="code_submit">
          <Button
            variant="contained"
            onClick={() => {
              setCode("");
              handleClose();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setCode("");
              handleCode();
              handleLang();
              handleClose();
            }}
          >
            Done
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PostCode;
