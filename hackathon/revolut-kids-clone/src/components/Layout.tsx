import { View } from "react-native";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  containerStyle?: string;
};

export const Row = ({ children, containerStyle }: ButtonProps) => {
  return <View className={`${containerStyle} flex-row`}>{children}</View>;
};
