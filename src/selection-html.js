import {apply} from "./selection";

export default function(value) {
  if (!arguments.length) return this.node().innerHTML;

  function setConstant() {
    this.innerHTML = value;
  }

  function setFunction() {
    var v = apply(value, this, arguments);
    this.innerHTML = v == null ? "" : v;
  }

  if (value == null) value = "";

  return this.each(typeof value === "function" ? setFunction : setConstant);
};
