import { Images } from "@/assets/images";
import { AccountCard, Button } from "@/components";
import { useStyles } from "@/hooks/useStyles";
import { MainTabParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Image, Text, View } from "react-native";

export const Accounts = () => {
  const { globalStyles, accountScreenStyles } = useStyles();
  const [selectedTab, setSelectedTab] = useState<"Account" | "Card">("Account");
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  return (
    <View style={[accountScreenStyles.container]}>
      <View style={[accountScreenStyles.headerContainer]}>
        <Text
          style={[globalStyles.previous, accountScreenStyles.previous]}
          onPress={() => navigation.navigate("Home")}>
          {"<"}
        </Text>
        <Text style={[globalStyles.title2]}>Account and card</Text>
      </View>
      <View style={[accountScreenStyles.buttonsContainer]}>
        <Button
          title="Account"
          variant={selectedTab === "Account" ? "primary" : "secondary"}
          style={[accountScreenStyles.button]}
          onPress={() => setSelectedTab("Account")}
        />
        <Button
          title="Card"
          variant={selectedTab === "Card" ? "primary" : "secondary"}
          style={[accountScreenStyles.button]}
          onPress={() => setSelectedTab("Card")}
        />
      </View>
      {selectedTab === "Account" && (
        <View style={[accountScreenStyles.accountSection]}>
          <View style={[accountScreenStyles.profilePicContainer]}>
            <Image
              source={Images.profilePic}
              style={[accountScreenStyles.profilePic]}
            />
            <Text style={[globalStyles.title3]}>John Smith</Text>
          </View>
          <View style={[accountScreenStyles.accountCardContainer]}>
            <AccountCard />
            <AccountCard />
            <AccountCard />
          </View>
        </View>
      )}
      {selectedTab === "Card" && (
        <View style={[accountScreenStyles.cardSection]}>
          <View style={[accountScreenStyles.cardsContainer]}>
            <Image
              source={Images.visaCard}
              style={[accountScreenStyles.card]}
            />
            <Image
              source={Images.masterCard}
              style={[accountScreenStyles.card]}
            />
          </View>
          <Button title="Add card" />
        </View>
      )}
    </View>
  );
};
