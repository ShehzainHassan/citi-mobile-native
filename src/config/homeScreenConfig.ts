import { Images } from "@/assets/images";
import { MainTabParamList } from "@/navigation/types";
import { ImageSourcePropType } from "react-native";

export interface HomeCardConfig {
  id: string;
  image: ImageSourcePropType;
  labelKey: string;
  route?: keyof MainTabParamList;
  enabled?: boolean;
}

export const HOME_CARD_GRID: HomeCardConfig[][] = [
  [
    {
      id: "accounts",
      image: Images.accountAndCard,
      labelKey: "accountAndCard",
      route: "Accounts",
    },
    {
      id: "transfer",
      image: Images.transfer,
      labelKey: "transfer",
    },
    {
      id: "withdraw",
      image: Images.withdraw,
      labelKey: "withdraw",
    },
  ],
  [
    {
      id: "prepaid",
      image: Images.prepaid,
      labelKey: "mobilePrepaid",
    },
    {
      id: "bill",
      image: Images.bill,
      labelKey: "payBill",
    },
    {
      id: "saveOnline",
      image: Images.saveOnline,
      labelKey: "saveOnline",
    },
  ],
  [
    {
      id: "creditCard",
      image: Images.creditCard,
      labelKey: "creditCard",
    },
    {
      id: "transactionReport",
      image: Images.transactionReport,
      labelKey: "transactionReport",
      route: "TransactionReport",
    },
    {
      id: "beneficiary",
      image: Images.beneficiary,
      labelKey: "beneficiary",
    },
  ],
];
