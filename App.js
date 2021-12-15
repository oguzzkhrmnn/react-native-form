
import React from 'react';
import {Text, TouchableOpacity, View,Image } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import Inputs from './Inputs';
import { Matches } from './Matches';


const Home = () => {
  const goToAbout = () => {
    Actions.about();
  };
  const goToForm = () => {
    Actions.form();
  };
  const goToMatches = () => {
    Actions.matches();
  };


  return(
<View>
      <TouchableOpacity style={{margin: 128}} onPress={goToAbout}>
      <Text>This is About!</Text>
      <Image source={require('./img/goz.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={{margin: 128}} onPress={goToForm}>
      <Text>This is Form!</Text>
      <Image source={require('./img/goz.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={{margin: 128}} onPress={goToMatches}>
      <Text>This is Matches</Text>
      </TouchableOpacity>
      </View>
  );
};
const Form = () => {
  const goToHome = () => {
    Actions.home();
  };
  return(
    <View>
      <TouchableOpacity style={{margin: 128}} onPress={goToHome}>
      <Text>This is Home!</Text>
    </TouchableOpacity>
    <Inputs/>
    <Image source={require('./img/tablo.jpg')} 
      style={{ width: 200, height: 150 }}
    />
  
  </View>
  );
};

const About = () => {
  const goToHome = () => {
    Actions.home();
  };
  const goToForm = () => {
    Actions.form();
  };

  return(
    <View>
    <TouchableOpacity style={{margin: 128}} onPress={goToHome}>
      <Text>This is Home!</Text>
    
    </TouchableOpacity>
    <TouchableOpacity style={{margin: 128}} onPress={goToForm}>
    <Text>This is Form!</Text>
  </TouchableOpacity>
  

  </View>
  );
};

const App = () => {
  return(
  <Router>
    <Scene>
      <Scene key="home" component={Home} title="Home" initial={true}></Scene>
      <Scene key="about" component={About} title="About"></Scene>
      <Scene key="form" component={Form} title="Form"></Scene>
      <Scene key="matches" component={Matches} title="Matches"></Scene>
    </Scene>
  </Router>
  )
};

export default App;