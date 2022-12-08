import {Text, View, StyleSheet, Alert, Button, Animated} from 'react-native';
import React, {Component} from 'react';

export default class apiTest extends Component {
  createTwoButtonAlert = () => {
    Alert.alert(
      '2 Button Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: true},
    );
  };
  createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  // fadeAnim will be used as the value for opacity. Initial Value: 0
  state = {
    fadeAnim: new Animated.Value(0),
  };

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true
    }).start();
  };

  fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title={'2-Button Alert'} onPress={this.createTwoButtonAlert} />

        <Button
          title={'3-Button Alert'}
          onPress={this.createThreeButtonAlert}
        />

<Animated.View
          style={[
            {
              // Bind opacity to animated value
              opacity:this.state.fadeAnim
            }
          ]}
        >
          <Text>TESTT</Text>
        </Animated.View>
        <Button title="Fade In View" onPress={this.fadeIn} />
        <Button title="Fade Out View" onPress={this.fadeOut} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
