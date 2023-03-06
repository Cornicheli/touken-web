import React from "react";
import { touken } from "../constants/images";

export default function Header() {
  return (
    <figure className="ctn-logo">
      <img className="logo" src={touken} alt="touken" />
    </figure>
  );
}
