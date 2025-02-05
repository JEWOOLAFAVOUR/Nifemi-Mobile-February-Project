import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const _layout = () => {
  return (
    <View style={styles.page}>
      <View style={styles.box}>
        <View style={styles.box2}></View>
      </View>
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  box: {
    height: 300,
    width: 300,
    backgroundColor: 'blue',
  },
  box2: {
    height: 100,
    width: 100,
    backgroundColor: "pink",
    borderRadius: 100,
  },
});