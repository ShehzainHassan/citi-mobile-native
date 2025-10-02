// Application constants and configuration values
// API endpoints, storage keys, screen names
// Validation rules, feature flags, error codes

export const API_CONFIG = {
  BASE_URL:
    process.env.EXPO_PUBLIC_API_BASE_URL || "https://api.citibank.com/v1",
  TIMEOUT: 30000,
} as const;

export const STORAGE_KEYS = {
  AUTH_TOKEN: "@citi_auth_token",
  USER_DATA: "@citi_user_data",
} as const;

import { Images } from "@/assets/images";

export const transactions = [
  {
    day: "Today",
    title: "Water bill",
    subtitle: "Unsuccessfully",
    icon: Images.waterBill,
    price: "- $280",
  },
  {
    day: "Yesterday",
    title: "Income: Salary Oct",
    subtitle: "",
    icon: Images.waterBill,
    price: "+ $1200",
  },
  {
    day: "Yesterday",
    title: "Electric Bill",
    subtitle: "Successfully",
    icon: Images.waterBill,
    price: "- $480",
  },
  {
    day: "Yesterday",
    title: "Income: Jane transfers",
    subtitle: "",
    icon: Images.waterBill,
    price: "- $500",
  },
  {
    day: "Yesterday",
    title: "Internet Bill",
    subtitle: "Successfully",
    icon: Images.waterBill,
    price: "- $100",
  },
];

export const barData = [
  {
    stacks: [
      { value: 300, color: "#FF4267" },
      { value: 200, color: "#FBB8FF" },
      { value: 500, color: "#3629B7" },
    ],
    label: "Jan",
  },
  {
    stacks: [
      { value: 250, color: "#FF4267" },
      { value: 180, color: "#FBB8FF" },
      { value: 400, color: "#3629B7" },
    ],
    label: "Feb",
  },
  {
    stacks: [
      { value: 200, color: "#FF4267" },
      { value: 220, color: "#FBB8FF" },
      { value: 450, color: "#3629B7" },
    ],
    label: "Mar",
  },
  {
    stacks: [
      { value: 100, color: "#FF4267" },
      { value: 200, color: "#FBB8FF" },
      { value: 700, color: "#3629B7" },
    ],
    label: "Apr",
  },
  {
    stacks: [
      { value: 180, color: "#FF4267" },
      { value: 240, color: "#FBB8FF" },
      { value: 600, color: "#3629B7" },
    ],
    label: "May",
  },
  {
    stacks: [
      { value: 220, color: "#FF4267" },
      { value: 260, color: "#FBB8FF" },
      { value: 550, color: "#3629B7" },
    ],
    label: "Jun",
  },
];
// Add more constants as needed...
