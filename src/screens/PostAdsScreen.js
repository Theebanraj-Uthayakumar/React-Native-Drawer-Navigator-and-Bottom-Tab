import React from "react";
import { Text, View, StyleSheet } from "react-native";

const PostAdsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PostAdsScreen, Hello Theeban</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
});

export default PostAdsScreen;
