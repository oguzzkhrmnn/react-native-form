import { white } from "color-name";
import React, {Component, useState} from "react";
import{
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from "react-native";


export default function Inputs() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleEmail = (text) => {
        setEmail(text);
    };

    const handlePassword = (text) => {
        setPassword(text);
    };

    const login = (email, pass) => {
        alert("email: " + email + "password : " + pass);
    };


    return(

        <View style={styles.container}>

            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Password"
                placeholderTextColor="nane"
                onChangeText={handleEmail}
            />

            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Password"
                placeholderTextColor="#9a73ef"
                onChangeText={handlePassword}
            />


            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => login(email, password)}
            >
                <Text style={styles.submitButtonText}>Submit</Text>

            </TouchableOpacity>


        </View>
    );
    
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: "#7a42f4",
        borderWidth: 1,
        width: "50%",
    },
    submitButton : {
        backgroundColor: "#7a42f4",
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText : {
        color: "white",
    },
});