import { useTheme } from "@/theme";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";

export const HomeIcon: React.FC<IconProps> = ({ selected }) => {
  const { theme } = useTheme();
  const color = selected ? theme.colors.neutral6 : theme.colors.neutral2;

  return (
    <Svg width={24} height={23} viewBox="0 0 24 23" fill="none">
      <Path
        d="M1 10L12 1L23 10"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M10 22V16H14V22"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M4 12V22H20V12"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
    </Svg>
  );
};
