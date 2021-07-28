import React, { FC } from 'react';
import { View, Text } from 'react-native';
import Star from 'react-native-vector-icons/EvilIcons';

type PropTypes = {
  title: string;
  rating: number;
  price: number;
};

export const Product: FC<PropTypes> = ({ title, rating, price }) => {
  const numberOfStars = rating.toFixed();
  console.log(numberOfStars);
  const dummyArrayForStars = new Array(numberOfStars).fill('star');

  return (
    <View>
      {dummyArrayForStars.map((_, i) => {
        console.log(i);
        return <Star key={Math.random()} name='star' size={20} />;
      })}
      <Text>{title}</Text>
      <Text>from {price}</Text>
    </View>
  );
};
