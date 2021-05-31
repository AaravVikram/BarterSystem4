import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, KeyboardAvoidingView } from 'react-native';
import MyHeader from '../components/MyHeader'
import db from '../config';
import firebase from 'firebase';

export default class Exchange extends Component{

    constructor(){
        super();
        this.state = {
            itemName: "",
            description: "",
            username: firebase.auth().currentUser.email
        }
    }

    addItem = (itemName, description)=>{
        var username = this.state.username
        db.collection("exchange_requests").add({
            username: username,
            item_name: itemName,
            description: description
        })
        this.setState({
            itemName: "",
            description: ""
        })
        return alert("Item added successfully")
    }

    render(){
        return(
            <View style = {{flex: 1}}>
                <MyHeader title = "Add Items"/>
                <TextInput 
                style = {styles.formTextInput}
                placeholder = "Item Name" 
                maxLength = {8} 
                onChangeText = {text=>{
                    this.setState({itemName: text})
                }}
                value = {this.state.itemName}
                />
                <TextInput
                style = {[styles.formTextInput,{height: 100}]}
                multiline
                numberOfLines = {4}
                placeholder = "Description"
                onChangeText = {text=>{
                    this.setState({description: text})
                }}
                value = {this.state.description}
                />
                <TouchableOpacity style = {styles.button, {marginTop: 10}}
                onPress = {()=>{
                    this.addItem(this.state.itemName, this.state.description)
                }}
                >
                    <Text style = {{color: "#FFFF", fontSize: 18, fontWeight: "bold"}}>
                        Add Item
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({ 
    formTextInput:{ 
        width:"75%", 
        height:35, 
        alignSelf:'center', 
        borderColor:'#ffab91', 
        borderRadius:10, 
        borderWidth:1, 
        marginTop:20, 
        padding:10
     },
    button:{ 
        width:"75%", 
        height:50, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:10, 
        backgroundColor:"#ff5722", 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 8, }, 
        shadowOpacity: 0.44, 
        shadowRadius: 10.32, 
        elevation: 16, }, })