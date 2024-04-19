import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

export const HistoryScreen = ({ route }: any) => {
  const { history } = route.params

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={history}
        renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
        keyExtractor={({ item }) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 15,
  },
});
