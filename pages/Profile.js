import React from 'react';
import { StyleSheet, Text, View, Image,Linking,Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Title,Card, Button} from 'react-native-paper';
import { Ionicons,MaterialIcons,Entypo } from '@expo/vector-icons';

const openDial=()=>{
    if(Platform.OS === "android"){
        Linking.openURL("tel:05323456758")
    }
    else{
        Linking.openURL("telprompt:05323456758")
    }
}

const Profile = ()=>{
    return (
        <View style={styles.root}>
            <LinearGradient
                colors={["#0033ff","#6bc1ff"]}
                style={{height:"20%"}}
            />
            <View style={{alignItems:"center"}}>
                <Image
                    style={{width:140, height:140,borderRadius:140/2,marginTop:-50}}
                    source={{uri:"https://images.unsplash.com/photo-1564931768869-c66430fe1162?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"}}
                />
            </View>
           <View style={{alignItems:"center", margin:7}}>
               <Title>Önsel AYDIN</Title>
               <Text style={styles.mytext}>Developer</Text>
           </View>
           <Card style={styles.myCard} onPress={()=>{
               Linking.openURL("mailto:onselaydin@gmail.com")
           }}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="email" size={32} color="green" />
                    <Text style={styles.mytext}>onselaydin@gmail.com</Text>
                </View>
           </Card>
           <Card style={styles.myCard}>
                <View style={styles.cardContent} onPress={()=>openDial()}>
                    <Entypo name="phone" size={32} color="green" />
                    <Text style={styles.mytext}>123456889</Text>
                </View>
           </Card>
           <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="attach-money" size={32} color="green" />
                    <Text style={styles.mytext}>10 TL</Text>
                </View>
           </Card>
           <View style={{flexDirection:"row", justifyContent:"space-around", padding:10}}>
           <Button icon="account-edit" mode="contained" theme={{theme}} onPress={() => console.log('Pressed')}>
                Edit
            </Button>
            <Button icon="delete" mode="contained" theme={{theme}} onPress={() => console.log('Pressed')}>
                Fire Employee
            </Button>
           </View>
        </View>
    );
    
}
const theme = {
    colors:{
        primary:"#006aff"
    }
}
const styles=StyleSheet.create({
    root:{
        flex:1
    },
    myCard:{
        margin:3
    },
    cardContent:{
        flexDirection:"row",
        padding:8
    },
    mytext:{
        fontSize:18,
        marginTop:3,
        marginLeft:5
    }
})

export default Profile