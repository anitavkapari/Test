/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
	
	const showAlert = () =>{
      Alert.alert(
         'You Refer to...'
      )
   }
   const showAlert1 = () =>{
      Alert.alert(
         'Jone Your Booking Submited...'
      )
   }
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
		  <View>
		  	<View style={{backgroundColor:'black'}}>
			<View style ={styles.profile}> 
			<Image style={{marginLeft:5,width: 40, height: 40}}source={require('./user1.png')}/>	
			<Text style={styles.sectionTitle}>Jone</Text>
			</View>
			<View style={{backgroundColor:'gray',width: 400, height: 1,margin:5}}>
			</View>
			<View style ={styles.profile}>
			<View>
			<Text style={styles.totalrfl}>Total Refaral</Text>
			<Text style={styles.text}>10</Text>
			</View>
			<TouchableOpacity style = {{	marginLeft:180, tintColor: '#fff'}}onPress = {showAlert}>
          	<Text style={{padding:5,
		marginTop:10,
        fontSize: 18,  
		height: 35,
		width:100,
        color: '#FF6F00',  
		textAlign:'center',
		    borderRadius: 25,
        backgroundColor: 'white',}}>REFER</Text>
</TouchableOpacity>
			</View>
			</View>
	<Text style={styles.text2}>Conversion</Text>
<View style={styles.view2}>
			</View>
			<View style ={{flexDirection: 'row',marginTop:15,marginLeft:15}}>
		  	<View style={styles.view3}>
			<Text style={styles.text1}>Site                   Visit</Text>
			<Text style={styles.text}>250</Text>
			</View>
			<View style={styles.view3}>
			<Text style={styles.text1}>Booking                   Amount</Text>
			<Text style={styles.text}>150</Text>
			</View>
			<View style={styles.view3}>
			<Text style={styles.text1}>First                   Cheque</Text>
			<Text style={styles.text}>100</Text>
			</View>
			</View>
			<View style ={styles.profile}>
			<View>
			<Text style={styles.text2}>Rewards</Text>
			<View style={styles.view2}>
			</View>
			</View>
			<Text style={styles.viewall}>View All</Text>
			</View>
	<View style ={{flexDirection: 'row',height: 35,borderWidth: 1.0, margin:5,borderColor: 'gray',borderRadius: 25}}>
	<TouchableOpacity style = {styles.touchablehighlight}>
          	<Text style={styles.text3}>Site Visit</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.touchablehighlight} onPress = {showAlert1}>
          	<Text style={{padding:7,
        fontSize: 13,  
		width:120,
        color: 'white',  
		textAlign:'center',
		borderColor: 'gray',borderRadius: 25,
        backgroundColor: 'black',}}>Booking Amount</Text>
</TouchableOpacity>

<TouchableOpacity style = {styles.touchablehighlight}>
          	<Text style={styles.text3}>First Cheque</Text>
</TouchableOpacity>
	</View>
	
	<View style ={{flexDirection: 'row',marginTop:15,marginLeft:15}}>
		  	<View style={styles.view3}>
			<Image style={styles.car}source={require('./car.jpg')}/>	
			<Text style={styles.text}>Gift Get 1</Text>
			</View>
			<View style={styles.view3}>
			<Image style={styles.car}source={require('./car.jpg')}/>	
			<Text style={styles.text}>Gift Get 2</Text>
			</View>
			<View style={styles.view3}>
			<Image style={styles.car}source={require('./car.jpg')}/>	
			<Text style={styles.text}>Gift Get 3</Text>
			</View>
			</View>
			<Image style={{width: 400, height: 120,margin:15}}source={require('./wincar.jpg')}/>	
			<Image style={{width: 400, height: 120,margin:15}}source={require('./wincar.jpg')}/>	
			</View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  car:{width: 115, height: 65},
  view2:{backgroundColor:'#FF6F00',width: 70, height: 3,marginLeft:15},
  touchablehighlight:{	marginLeft:10, tintColor: '#fff'},
  text3:{padding:7,
        fontSize: 12,  
		height: 35,

		width:120,
        color: 'black',  
		textAlign:'center',
		    borderRadius: 25,},
  engine: {
    position: 'absolute',
    right: 0,
  },
  view34:{backgroundColor:'red',},
  view3:{backgroundColor:'black',width: 115,marginLeft:10, height: 100},
   viewall: {
fontSize: 15,marginLeft:220,marginTop:15,fontWeight: '600',color: Colors.black  },
    text: {
 fontSize:18,marginTop:3,fontWeight: '600',color: Colors.white,textAlign:'center'
  },
      totalrfl: {
fontSize: 12,marginLeft:15,marginTop:10,fontWeight: '600',color: Colors.white  },
  text1: {
 fontSize:15,marginTop:15,fontWeight: '600',color: '#FF6F00',textAlign:'center'
  },
  text2:{fontWeight: 'bold' ,fontSize:25,marginLeft:15,marginTop:3,fontWeight: '600',color: Colors.black},
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
          justifyContent: 'center',
    fontSize: 20,
    fontWeight: '600',
	marginTop:5,
	marginLeft:10,
    color: Colors.white,
  },
  profile: {
  	       flexDirection: 'row',
		   margin:10,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
