import React from "react";

const sizeClasses = {
  txtRobotoRomanMedium22: "font-medium font-roboto",
  txtRobotoRomanMedium20: "font-medium font-roboto",
  txtEpilogueRomanBold14: "font-bold font-epilogue",
  txtEpilogueRomanBold24: "font-bold font-epilogue",
  txtEpilogueRomanBold20Black900: "font-bold font-epilogue",
  txtEpilogueRomanBold20: "font-bold font-epilogue",
  txtEpilogueRomanBold20Gray600: "font-bold font-epilogue",
  txtEpilogueRomanBold20Gray700: "font-bold font-epilogue",
  txtEncodeSansSemiCondensedBold36: "font-bold font-encodesanssemicondensed",
  txtEpilogueRomanBold20Indigo80001: "font-bold font-epilogue",
  txtEncodeSansSemiCondensedMedium20:
    "font-encodesanssemicondensed font-medium",
  txtEpilogueRomanBold28: "font-bold font-epilogue",
  txtEpilogueRomanBold17: "font-bold font-epilogue",
  txtEpilogueRomanBold20Gray60001: "font-bold font-epilogue",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
