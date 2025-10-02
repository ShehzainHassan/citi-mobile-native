import { useTheme } from "@/theme";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";

export const MessageIcon: React.FC<IconProps> = ({ selected }) => {
  const { theme } = useTheme();
  const color = selected ? theme.colors.neutral6 : theme.colors.neutral2;

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M1.614 3.55811L12 13.0001L22.385 3.55911"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M21 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H21C22.1046 21 23 20.1046 23 19V5C23 3.89543 22.1046 3 21 3Z"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
    </Svg>
  );
};
