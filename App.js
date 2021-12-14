
import React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import Inputs from './Inputs';


const Home = () => {
  const goToAbout = () => {
    Actions.about();
  };
  const goToForm = () => {
    Actions.form();
  };


  return(
<View>
      <TouchableOpacity style={{margin: 128}} onPress={goToAbout}>
      <Text>This is HOME!</Text>
      </TouchableOpacity>,
      <TouchableOpacity style={{margin: 128}} onPress={goToForm}>
      <Text>This is Form!</Text>
      </TouchableOpacity>,
      
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
      <Text>This is ABOUT!</Text>
    </TouchableOpacity>
    <Inputs/>
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
      <Text>This is ABOUT!</Text>
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
    </Scene>
  </Router>
  )
};

export default App;