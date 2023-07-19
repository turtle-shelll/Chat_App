import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const widthToDp = number => {
    let givenWidth = typeof number == 'number' ? number : parseFloat(number);
    //console.log(number , PixelRatio.roundToNearestPixel((width * givenWidth) / 100))
    return PixelRatio.roundToNearestPixel((width * givenWidth) / 100) > 1
        ? Math.round(PixelRatio.roundToNearestPixel((width * givenWidth) / 100), 0)
        : 1;
};

const heightToDp = number => {
    let givenHeight = typeof number == "number" ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((height * givenHeight) / 100) > 1
        ? Math.round(
            PixelRatio.roundToNearestPixel((height * givenHeight) / 100),
            0,
        )
        : 1;
    //return Math.round(PixelRatio.roundToNearestPixel((height * givenHeight) / 100), 0);
};

export {
    widthToDp, heightToDp
};
