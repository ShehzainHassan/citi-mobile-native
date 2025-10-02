import React from "react";
import Svg, { Path } from "react-native-svg";

interface BackIconProps {
  color?: string;
  width?: number;
  height?: number;
}

export const BackIcon: React.FC<BackIconProps> = ({
  color = "#343434",
  width = 9,
  height = 16,
}) => (
  <Svg width={width} height={height} viewBox="0 0 9 16" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.343168 7.99727C0.343168 7.71062 0.447034 7.424 0.654328 7.20545L7.18073 0.328138C7.59589 -0.109349 8.269 -0.109349 8.684 0.328138C9.09899 0.765448 9.09899 1.47462 8.684 1.91214L2.90907 7.99727L8.68379 14.0824C9.09879 14.5199 9.09879 15.229 8.68379 15.6663C8.2688 16.104 7.59569 16.104 7.18053 15.6663L0.654127 8.78909C0.446798 8.57044 0.343168 8.28382 0.343168 7.99727Z"
      fill={color}
    />
  </Svg>
);
