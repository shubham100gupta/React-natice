import React, {useState} from 'react';
import { StyleSheet, View, Text,Button} from 'react-native';

function App() {
  const [name, setName] = useState('Shubham');
  const [person, setperson] = useState({name:'ishika', age:20});

  const clickHandler = ()=>{
    setName('Gupta');
    setperson({name:'gupta', age:22 });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.size}>My name is {name}</Text>
      <Text  style={styles.size}>my name is {person.name} and my age is{person.age}</Text>
      <View style={styles.ButtonContainer}></View>
      <Button title='Update name' onPress={clickHandler}/>
      </View>     
  );
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',   
  },
  size:{
    fontSize:20,
    

  },
  ButtonContainer:{
    marginTop: 20,     
  }
 

});
export default App;
 
