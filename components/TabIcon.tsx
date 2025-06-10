import { images } from '@/constants/images';
import { Image, ImageBackground, Text, View } from 'react-native';

interface TabIconProps {
  focused: boolean;
  label: string;
  icon: any;
}

const TabIcon = ({ focused, icon, label }: TabIconProps) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-[52px] mt-[13px] items-center justify-center rounded-full overflow-hidden"
      >
        <Image
          source={icon}
          className="w-5 h-5"
          style={{ tintColor: '#151312' }}
        />
        <Text className="text-secondary text-base font-semibold ml-2">
          {label}
        </Text>
      </ImageBackground>
    );
  } else {
    return (
      <View className="size-full justify-center items-center mt-4 rounded-full">
        <Image source={icon} tintColor={'#A8B5DB'} className="size-5" />
      </View>
    );
  }
};

export default TabIcon;
