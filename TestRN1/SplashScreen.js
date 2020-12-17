import React from 'react';
import{View,Text,Buttonm, Dimensions,StyleSheet}from'react-native';

const SplashScreen = () =>{
    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text>Header</Text>
            </View>
            <View style = {styles.footer}>
                <Text>Footer</Text>
            </View>
            
        </View>
    )
};

export default SplashScreen;

const{height} = Dimensions.get("screen");
const height_logo = height * 28;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#009387'
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    footer:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical: 50,
        paddingHorizontal:30
    },
})