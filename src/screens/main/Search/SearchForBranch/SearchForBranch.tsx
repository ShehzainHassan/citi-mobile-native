import { Platform } from "react-native";
import { SearchForBranch as NativeComponent } from "./SearchForBranch.native";
import { SearchForBranch as WebComponent } from "./SearchForBranch.web";

export const SearchForBranch =
  Platform.OS === "web" ? WebComponent : NativeComponent;
