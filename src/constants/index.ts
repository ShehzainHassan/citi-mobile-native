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

export const INTEREST_RATE_TABLE = {
  columns: ["Interest kind", "Deposit", "Rate"],
  rows: [
    ["Individual customers", "1m", "4.50%"],
    ["Corporate customers", "2m", "5.50%"],
    ["Individual customers", "12m", "5.90%"],
    ["Individual customers", "1m", "4.50%"],
    ["Corporate customers", "2m", "5.50%"],
    ["Individual customers", "12m", "5.90%"],
    ["Individual customers", "1m", "4.50%"],
    ["Corporate customers", "2m", "5.50%"],
    ["Individual customers", "12m", "5.90%"],
    ["Individual customers", "1m", "4.50%"],
    ["Corporate customers", "2m", "5.50%"],
    ["Individual customers", "12m", "5.90%"],
    ["Individual customers", "1m", "4.50%"],
    ["Corporate customers", "2m", "5.50%"],
    ["Individual customers", "12m", "5.90%"],
    ["Corporate customers", "2m", "5.50%"],
    ["Individual customers", "12m", "5.90%"],
    ["Corporate customers", "2m", "5.50%"],
    ["Individual customers", "12m", "5.90%"],
  ],
};

export const EXCHANGE_RATE_TABLE = {
  columns: ["Country", "Buy", "Sell"],
  rows: [
    { countryCode: "VN", countryName: "Vietnam", buy: "1.403", sell: "1.746" },
    {
      countryCode: "NI",
      countryName: "Nicaragua",
      buy: "9.123",
      sell: "12.09",
    },
    { countryCode: "KR", countryName: "Korea", buy: "3.704", sell: "5.151" },
    { countryCode: "RU", countryName: "Russia", buy: "116.0", sell: "144.4" },
    { countryCode: "CN", countryName: "China", buy: "1.725", sell: "2.234" },
    { countryCode: "PT", countryName: "Portugal", buy: "1.403", sell: "1.746" },
    { countryCode: "KR", countryName: "Korea", buy: "3.704", sell: "5.151" },
    { countryCode: "FR", countryName: "France", buy: "116.0", sell: "144.4" },
    {
      countryCode: "NI",
      countryName: "Nicaragua",
      buy: "9.123",
      sell: "12.09",
    },
    { countryCode: "CN", countryName: "China", buy: "1.725", sell: "2.234" },
    { countryCode: "VN", countryName: "Vietnam", buy: "1.403", sell: "1.746" },
    { countryCode: "RU", countryName: "Russia", buy: "116.0", sell: "144.4" },

    { countryCode: "PT", countryName: "Portugal", buy: "1.403", sell: "1.746" },
    { countryCode: "KR", countryName: "Korea", buy: "3.704", sell: "5.151" },
    { countryCode: "FR", countryName: "France", buy: "116.0", sell: "144.4" },
  ],
};
export const LANGUAGES = [
  { code: "vn", name: "Vietnamese" },
  { code: "fr", name: "French" },
  { code: "us", name: "English" },
  { code: "jp", name: "Japanese" },
  { code: "pt", name: "Portuguese" },
  { code: "cn", name: "Chinese" },
  { code: "kr", name: "Korean" },
  { code: "ni", name: "Nicaraguan" },
  { code: "ru", name: "Russian" },
];

// Add more constants as needed...
