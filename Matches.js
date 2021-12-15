import React, { useEffect, useState } from 'react';
import {Text,  View,StyleSheet,Picker} from 'react-native';

export const Matches = () => {
  const [User,setUser] =useState("");
  const [SelectedYear,setSelectedYear] =useState(2011);
  const [totalMatches,settotalMatches] =useState(0);
  const [data,setData]=useState([]);


 
  const UpdateUser = (User) => {
    setUser(User);
  };

  useEffect(() => {
        fetch(`https://jsonmock.hackerrank.com/api/football_competitions?year=$(SelectedYear)`

        )
        .then((response)=>response.json())
        .then((result)=>{
        
      

            setSelectedYear(SelectedYear);
            setData(result.data);
            settotalMatches(result.data.length);
        }) ;

  },[SelectedYear]);
  console.log(data);
  return (
    <View>
       <Picker selectedValue = {setUser} onValueChange = {UpdateUser}>
          <Picker.Item label = "Steve" value = "steve" />
          <Picker.Item label = "Ellen" value = "ellen" />
          <Picker.Item label = "Maria" value = "maria" />
       </Picker>
       <Text style = {styles.text}>{setUser}</Text>
    </View>
 );
  };
export default Matches

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }
});