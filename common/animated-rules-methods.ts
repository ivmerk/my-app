import {Animated, Dimensions} from "react-native";

const {height, width}= Dimensions.get('window'); 
export const scrollY = new Animated.Value(0)
export  const translateY = scrollY.interpolate({
  inputRange: [0, 50],
  outputRange: [0, 50],
  extrapolate: 'clamp',
})
export   const opacity = scrollY.interpolate({
  inputRange: [0, 50],
  outputRange: [1, 0],
  extrapolate: 'clamp',
})

const maxHeightOfLogo = 5 * height / 100;
export const heightOfLogo = scrollY.interpolate({
  inputRange: [0, maxHeightOfLogo],
  outputRange: [maxHeightOfLogo, 0],
  extrapolate: 'clamp',
})
const maxWidthOfLogo = 4.5 * width / 100; 
export const widthOfLogo = scrollY.interpolate({
  inputRange: [0, maxWidthOfLogo],
  outputRange: [maxWidthOfLogo, 0],
  extrapolate: 'clamp',
})


const maxHeightOfSlider =  10 * height / 100;
export  const heightOfSlider = scrollY.interpolate({
  inputRange: [0, maxHeightOfSlider],
  outputRange: [maxHeightOfSlider, 0],
  extrapolate: 'clamp',
})
