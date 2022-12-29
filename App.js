import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  TextInput, CheckBox  } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {  RadioButton } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';
const Stack = createNativeStackNavigator();


const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='InputScreen'  >
          <Stack.Screen name='InputScreen'  component={InputScreen}  options={{headerShown: false}}>

          </Stack.Screen>
          <Stack.Screen name='DisplayScreen' component={DisplayScreen}>

          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  )
}
const InputScreen = ({navigation}) => {
  const [checked1, setChecked1] = useState(false);
  const [checked, setChecked] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Pakistan', value: 'apple'},
    {label: 'India', value: 'India'},
    {label: 'Afghanistan', value: 'Afghanistan'},
    {label: 'Srilanka', value: 'Srilanka'},
    {label: 'China', value: 'China'},
  ]);
  return (
  
    <View style={styles.container}>
        <Text style={{fontSize:30, fontWeight:'bold' , alignSelf:'center' , color:'pink' , shadowColor:'grey', shadowRadius:2 , textShadowColor:'grey',textShadowRadius:2, textDecorationColor:'red'}}>Input Screen </Text>
      <View style={{flexDirection:'row' , justifyContent:'center', alignItems:'center' , padding:3}}>
      <Text style={styles.textst} dataDetectorType='email'>Email    </Text>
      <TextInput style={styles.TInput}></TextInput>
      </View>
      <View style={{flexDirection:'row' , justifyContent:'center', alignItems:'center' , padding:3}}>
      <Text style={styles.textst}>Name   </Text>
      <TextInput style={styles.TInput}></TextInput>
      
      </View>
      <View style={{flexDirection:'row' , justifyContent:'center', alignItems:'center' , padding:3 , marginLeft:33 , margin:20}}>
      <Text style={styles.textst}>Country</Text>
      
      <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={{height:10,width:250,marginLeft:40 , backgroundColor:'pink'}}
    
    />
      </View>
      <View style={{flexDirection:'row' , justifyContent:'center', alignItems:'center' , padding:3}}>
      <Text style={styles.textst }>Gender:         </Text>

      <RadioButton 
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <Text style={styles.textst }>Male</Text>
      <RadioButton 
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      <Text style={styles.textst }>Female</Text>
      </View>
      
      <View style={{flexDirection:'row' , justifyContent:'center', alignItems:'center' , padding:3}}>
      <Text style={styles.textst }>Subjects:</Text>
      <Checkbox
      value="first"
      status={checked1 === 'first' ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked1('first');
      }}
    />
    <Text style={styles.textst }>Physics</Text>
    <Checkbox
      value="second"
      
      status={checked1 === 'second' ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked1('second');
      }}
    />
    <Text style={styles.textst }>Chemistry</Text>
    <Checkbox
      value="third"
      status={checked1 === 'third' ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked1('third');
      }}
    />
    <Text style={styles.textst }>Bio</Text>
      </View>
      <View style={{flexDirection:'row' , justifyContent:'center', alignItems:'center' , padding:3}}>
      <Text style={styles.textst }>Skills     </Text>
      <TextInput style={styles.TInput1 } multiline></TextInput>
      </View>
      <View style={{flexDirection:'row' , justifyContent:'center', alignItems:'center' , padding:3}}>
      <Text style={styles.textst }>Address</Text>
      <TextInput style={styles.TInput1} multiline></TextInput>
      </View>
      <View style={{ justifyContent:'center', alignItems:'center' , alignSelf:'center' , padding:8 , color:'pink' , backgroundColor:'pink' }}>
      <Button title='Submit' onPress={()=> navigation.navigate('DisplayScreen')}></Button>
      </View>
    </View>
    
  );
}

const DisplayScreen = ({navigation,route} )=>{
  return(
    <Text> CONFIRM YOUR INPUT</Text>
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
    alignItems:'flex-start',
    justifyContent: 'center',
    backgroundColor:'white'

  },
  TInput:{
    borderColor:'black',
    borderRadius:2,
    borderWidth:3,
    width:250,
    height:40,
    padding:10,
    alignContent:'center',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:40,
    borderColor:'purple',
  },
  textst:{
    color:'dark-grey',
    fontSize:20,
    
  },
  TInput1:{
    borderColor:'black',
    borderRadius:2,
    borderWidth:3,
    width:250,
    height:140,
    padding:10,
    alignContent:'center',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:40,
    borderColor:'purple',
  }
});

