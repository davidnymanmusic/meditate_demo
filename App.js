import React from 'react'
import {
  Text,
  View,
	ScrollView
} from 'react-native'
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper'

var styles = {
  wrapper: {
		backgroundColor: 'black'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9dc6d1',
		paddingTop: 18,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b2c9be'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9db0d1'
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 30,
		fontFamily: 'Avenir-Book',
  }
}

export default () => <Swiper style={styles.wrapper} showsButtons>
  <View style={styles.slide1}>
		<ScrollView>
    <Text style={styles.text}>Beautiful</Text>
		 </ScrollView>
  </View>
  <View style={styles.slide2}>
		<Animatable.Text animation="slideInDown" iterationCount={'infinite'} direction="alternate" duration={3000}><Text style={styles.text}>Beautiful</Text></Animatable.Text>

  </View>
  <View style={styles.slide3}>
    <Text style={styles.text}>And simple</Text>
  </View>
</Swiper>



// 		fontFamily: 'Avenir-Book',

// color: #b2c9be
    // backgroundColor: '#9dc6d1',
