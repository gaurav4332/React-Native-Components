import React, { memo } from "react";
import Svg from "react-native-svg";
import { useDerivedValue, withTiming } from "react-native-reanimated";
import AnimatedColor from "./AnimatedColor";
import AnimatedCheckMarkPath from "./const AnimatedCheckMarkPath = memo((props) => {";

const CustomCheckBox = memo(
  ({
    checked,
    checkMarkColor,
    checkedBorderColor,
    unCheckedBorderColor,
    checkedBackgroundColor,
    unCheckedBackgroundColor,
    height,
    width,
  }) => {
    const progress = useDerivedValue(() => withTiming(checked ? 1 : 0));

    return (
      <Svg width={width} height={height} viewBox="0 0 49 49">
        {/* empty box */}
        <AnimatedColor
          progress={progress}
          checkedBorderColor={checkedBorderColor}
          unCheckedBorderColor={unCheckedBorderColor}
          checkedBackgroundColor={checkedBackgroundColor}
          unCheckedBackgroundColor={unCheckedBackgroundColor}
        />
        {/* checked box line */}
        <AnimatedCheckMarkPath
          progress={progress}
          checkMarkColor={checkMarkColor}
        />
      </Svg>
    );
  }
);

export default CustomCheckBox;
