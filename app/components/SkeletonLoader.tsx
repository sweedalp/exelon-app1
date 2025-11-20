import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function SkeletonLoader() {
  return (
    <View style={styles.row}>
      <View style={styles.card} />
      <View style={styles.card} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    height: 180,
    backgroundColor: '#e3e3e3',
    borderRadius: 10,
    marginBottom: 10,
  },
});


