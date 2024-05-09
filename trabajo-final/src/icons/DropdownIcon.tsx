import React from "react";

interface DropdownIconProps {
  props?: React.SVGProps<SVGSVGElement>;
}

export const DropdownIcon = (props: DropdownIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="17"
    viewBox="0 0 18 17"
    fill="none"
  >
    <path
      d="M4.5 6.5L8.78571 10.5L13.0714 6.5"
      stroke="#11181C"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
