import React from "react";

export default function Category({ category }) {
  return (
    <option className="value-input" value={category}>
      {category}
    </option>
  );
}
