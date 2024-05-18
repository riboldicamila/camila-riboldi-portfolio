import React from "react";
import "./Button.css";

function PrimaryButton({ href, className, text }) {
  const classNameDefine = `primary-button${className ? ` ${className}` : ""}`;

  return (
    <div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNameDefine}
      >
        {text}
      </a>
    </div>
  );
}

export default PrimaryButton;
