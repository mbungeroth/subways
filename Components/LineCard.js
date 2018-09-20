import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const LineCard = (props) => {
  const {line} = props;
  return (
    <View>
      <Text>
      Line: {line}
      </Text>
    </View>

  );
};

export default LineCard;
