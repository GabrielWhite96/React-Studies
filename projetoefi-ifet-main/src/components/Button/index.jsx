import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[7px]" };
const variants = {
  fill: {
    indigo_700: "bg-indigo-700 text-white-A700",
    amber_500: "bg-amber-500 text-black-900",
    orange_A700: "bg-orange-A700 text-black-900",
    light_green_A700: "bg-light_green-A700 text-black-900",
  },
};
const sizes = { xs: "p-[7px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "light_green_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "indigo_700",
    "amber_500",
    "orange_A700",
    "light_green_A700",
  ]),
};

export { Button };
