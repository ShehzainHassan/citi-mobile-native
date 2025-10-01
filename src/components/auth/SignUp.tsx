import { Images } from "@/assets/images";
import { useStyles } from "@/hooks/useStyles";
import { AuthStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Text, TextInput, View } from "react-native";
import { Button, Checkbox } from "../ui";
export const SignUp = () => {
  const { globalStyles, authStyles, signUpStyles } = useStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.headerContainer}>
        <Text style={[globalStyles.previous]}>{"<"}</Text>
        <Text style={globalStyles.header}>Sign up</Text>
      </View>
      <View style={globalStyles.roundedContainer}>
        <View style={globalStyles.titleContainer}>
          <Text style={globalStyles.title1}>Welcome to Citibank,</Text>
          <Text style={globalStyles.caption}>
            Hello there, create your new account
          </Text>
        </View>
        <View style={globalStyles.centerContainer}>
          <Image
            source={Images.signUp}
            style={globalStyles.authLogo}
            resizeMode="contain"
          />
        </View>
        <View style={globalStyles.inputContainer}>
          <TextInput placeholder="Name" style={[globalStyles.input]} />
          <TextInput placeholder="Text input" style={[globalStyles.input]} />
          <TextInput
            placeholder="Password"
            style={[globalStyles.input]}
            secureTextEntry
          />
          <View style={signUpStyles.checkboxContainer}>
            <Checkbox />
            <Text style={signUpStyles.text}>
              By creating an account your agree to our{" "}
              <Text style={globalStyles.heading3}>Term and Condtions</Text>
            </Text>
          </View>
        </View>

        <Button title="Sign up" style={signUpStyles.signUpButton} />

        <View style={authStyles.footerContainer}>
          <Text style={globalStyles.caption}>Have an account?</Text>
          <Text
            style={globalStyles.heading3}
            onPress={() => navigation.navigate("SignIn")}>
            Sign in
          </Text>
        </View>
      </View>
    </View>
  );
};
