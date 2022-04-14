import { Box, Text } from "native-base";
import { StyleSheet } from "react-native";
import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

interface CircularProgressProps {
  label?: string;
  centerLabel?: string;
  value: number;
  startAngle?: number;
  color?: string;
}

const CircularProgress = ({
  label,
  centerLabel,
  startAngle,
  value,
  color,
}: CircularProgressProps) => {
  const getFillColor = () => {
    if (value >= 100) return "red";
    else if (color) return color;
    else return "#149078";
  };

  return (
    <Box style={styles.container} paddingBottom={2}>
      <Text paddingBottom={2}>{label}</Text>
      <AnimatedCircularProgress
        size={50}
        width={5}
        fill={value}
        arcSweepAngle={360}
        rotation={startAngle ?? 0}
        tintColor={getFillColor()}
        backgroundColor="#d3d3d3"
      >
        {() => <Text>{centerLabel}</Text>}
      </AnimatedCircularProgress>
    </Box>
  );
};

export default CircularProgress;
