import React from "react";
import X from "../images/x.png";
import O from "../images.o.png";
import Nocircle from "../images/Nocircle.png";

export const selectImg = (img) => {
  switch (img) {
    case "x":
      return X;
    case "o":
      return O;
    default:
      return Nocircle;
  };
};