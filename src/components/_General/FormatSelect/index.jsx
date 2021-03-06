import React from "react";
import { useSelector } from "react-redux";
import { useSaveFormat } from "../../../utils/hooks";
import "./_styles.scss";

/**
 * @name FormatSelect
 * @description Renders the select element with metric formats:
 * metric - Celsius
 * imperial - Fahrenheit
 * 
 * onChange - set new metric to reducer
 */
const FormatSelect = () => {
  const currentFormat = useSelector((state) => state.format);
  const changeFormat = useSaveFormat();

  const changeFormatHandle = (e) => {
    changeFormat(e.target.value);
  };

  return (
    <select className="formatSelect" onChange={changeFormatHandle} defaultValue={currentFormat}>
      <option value="metric">°C</option>
      <option value="imperial">°F</option>
    </select>
  );
};

export default FormatSelect;
