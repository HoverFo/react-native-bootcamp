import { useNavigation } from "@react-navigation/native";
import type { PeopleProps } from "api/types";
import React from "react";
import { List } from "react-native-paper";

import { Routes } from "~/navigation/Routes";

interface PeopleItemProps {
  people: PeopleProps;
}

const GengerIcon = ({ gender }: { gender: string }) => {
  switch (gender) {
    case "male":
      return <List.Icon icon="human-male" color="#3B82F6" />;
    case "female":
      return <List.Icon icon="human-female" color="#EC4899" />;
    default:
      return <List.Icon icon="robot" color="#9CA3AF" />;
  }
};

export const PeopleItem = ({ people }: PeopleItemProps) => {
  const { gender, starships } = people;

  const navigation = useNavigation<any>();
  const navigateToDetails = () => {
    navigation.navigate(Routes.PILOT_DETAILS_SCREEN, { people });
  };

  return (
    <List.Item
      title={people.name}
      description={`${starships.length} starships`}
      left={() => <GengerIcon gender={gender} />}
      right={(props) => <List.Icon {...props} icon="dots-horizontal" />}
      onPress={navigateToDetails}
    />
  );
};
