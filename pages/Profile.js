import React from 'react';
import { StyleSheet, Text, View, Image,Linking,Platform,Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Title,Card, Button} from 'react-native-paper';
import { MaterialIcons,Entypo } from '@expo/vector-icons';

const Profile = (props)=>{
    //alttaki satır ile TaskList den seçilen kaydın detayını getiriyoruz.
    const {_id,name,email,salary,phone,position,picture,taskcomment}= props.route.params.item
    console.log(_id);
    const deleteEmploye=()=>{
        //fetch("http://10.61.35.32:3000/")
        fetch("http://192.168.1.37:3000/delete",{
            method:"post",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                id:_id
            })
        })
        .then(res=>res.json())
        .then(deleteEmp=>{
            Alert.alert(`${deleteEmp.name} deleted`)
            props.navigation.navigate("TaskList")
        })
        .catch(err=>{
            Alert.alert(`${err} Silerken hata oldu.`)
        })
    }
    const openDial=()=>{
        if(Platform.OS === "android"){
            Linking.openURL(`tel:${phone}`)
        }
        else{
            Linking.openURL(`telprompt:${phone}`)
        }
    }
    return (
        <View style={styles.root}>
            <LinearGradient
                colors={["#0033ff","#6bc1ff"]}
                style={{height:"20%"}}
            />
            <View style={{alignItems:"center"}}>
                <Image
                    style={{width:140, height:140,borderRadius:140/2,marginTop:-50}}
                    source={{uri:picture}}
                />
            </View>
           <View style={{alignItems:"center", margin:7}}>
               <Title>{name}</Title>
            <Text style={styles.mytext}>{position}</Text>
           </View>
           <Card style={styles.myCard} onPress={()=>{
               Linking.openURL(`mailto:${email}`)
           }}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="email" size={32} color="green" />
                    <Text style={styles.mytext}>{email}</Text>
                </View>
           </Card>
           <Card style={styles.myCard}>
                <View style={styles.cardContent} onPress={()=>openDial()}>
                    <Entypo name="phone" size={32} color="green" />
                    <Text style={styles.mytext}>{phone}</Text>
                </View>
           </Card>
           <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="attach-money" size={32} color="green" />
                     <Text style={styles.mytext}>{salary}</Text>
                </View>
           </Card>
           <View style={{flexDirection:"row", justifyContent:"space-around", padding:10}}>
           <Button icon="account-edit" mode="contained" theme={{theme}} 
                onPress={() => {
                    props.navigation.navigate("Person",
                    {_id,name,picture,phone,salary,email,position}
                    )
                }}>
                Edit
            </Button>
            <Button icon="delete" mode="contained" theme={{theme}} onPress={() => deleteEmploye()}>
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