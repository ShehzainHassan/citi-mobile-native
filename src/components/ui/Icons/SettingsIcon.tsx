import { useTheme } from "@/theme";
import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
import { IconProps } from "./types";

export const SettingsIcon: React.FC<IconProps> = ({ selected }) => {
  const { theme } = useTheme();
  const color = selected ? theme.colors.neutral6 : theme.colors.neutral2;

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0)">
        <Path
          d="M23 13.5V10.5L19.752 10.057C19.561 9.29471 19.2577 8.56507 18.852 7.892L20.836 5.282L18.718 3.161L16.108 5.145C15.4349 4.73934 14.7053 4.43603 13.943 4.245L13.5 1H10.5L10.057 4.248C9.29471 4.43903 8.56507 4.74234 7.892 5.148L5.282 3.161L3.161 5.282L5.145 7.892C4.73934 8.56507 4.43603 9.29471 4.245 10.057L1 10.5V13.5L4.248 13.943C4.43903 14.7053 4.74234 15.4349 5.148 16.108L3.164 18.718L5.285 20.839L7.895 18.855C8.56807 19.2607 9.29771 19.564 10.06 19.755L10.5 23H13.5L13.943 19.752C14.7053 19.561 15.4349 19.2577 16.108 18.852L18.718 20.836L20.839 18.715L18.855 16.105C19.2607 15.4319 19.564 14.7023 19.755 13.94L23 13.5Z"
          stroke={color}
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap="square"
        />
        <Path
          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          stroke={color}
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap="square"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width={24} height={24} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
