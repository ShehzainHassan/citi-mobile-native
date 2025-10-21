import { Images } from '@/assets/images';
import { Button, Header, Input } from '@/components';
import { useAuthStyles, useGlobalStyles } from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<MainTabParamList, 'ConfirmBeneficiary'>;

export const ConfirmBeneficiary = ({ navigation, route }: Props) => {
  const globalStyles = useGlobalStyles();
  const authStyles = useAuthStyles();

  const { beneficiaryData, image } = route.params;

  return (
    <SafeAreaView style={globalStyles.safeArea} edges={['top', 'bottom']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[authStyles.container]}
      >
        <Header
          title="Beneficiary"
          onPress={() => navigation.goBack()}
          variant="secondary"
          style={authStyles.headerContainer}
        />

        <View
          style={[
            globalStyles.roundedContainer,
            globalStyles.noVerticalPadding,
          ]}
        >
          <View style={globalStyles.imgWrapper}>
            {image ? (
              <Image source={{ uri: image }} style={globalStyles.profilePic} />
            ) : (
              <Image
                source={Images.profilePic}
                style={globalStyles.profilePic}
              />
            )}
            <Text style={[globalStyles.centerText, globalStyles.title3]}>
              {beneficiaryData.Name || ''}
            </Text>
          </View>

          <View
            style={[globalStyles.cardContainer, globalStyles.largeSpacedColumn]}
          >
            {Object.entries(beneficiaryData).map(([key, value]) => (
              <Input key={key} label={key} value={value} readOnly />
            ))}

            <Button
              title="Confirm"
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
