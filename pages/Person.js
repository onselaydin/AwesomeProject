import React, {useState} from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import {TextInput,Button} from 'react-native-paper';

const Person = ()=>{
    const [Name,setName] = useState("")
    const [Phone,setPhone] = useState("")
    const [Email,setEmail] = useState("")
    const [Salary,setSalary] = useState("")
    const [Picture,setPicture] = useState("")
    const [modal,setModal] = useState(false)

    return(
        <View style={styles.root}>
            <TextInput
                label='Name'
                style={styles.inputStyle}
                value={Name}
                theme={theme}
                mode="outlined"
                onChangeText={text => setName(text)}
            />
            <TextInput
                label='Phone'
                style={styles.inputStyle}
                value={Phone}
                theme={theme}
                mode="outlined"
                onChangeText={text => setPhone(text)}
            />
            <TextInput
                label='Email'
                style={styles.inputStyle}
                value={Email}
                theme={theme}
                mode="outlined"
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                label='Salary'
                style={styles.inputStyle}
                value={Salary}
                theme={theme}
                mode="outlined"
                onChangeText={text => setSalary(text)}
            />

            <Button style={styles.inputStyle} 
                    icon="upload" 
                    mode="contained" 
                    theme={theme}
                    onPress={() => setModal(true)}>
                Upload Image
            </Button>
            <Button style={styles.inputStyle} 
                    icon="content-save" 
                    mode="contained" 
                    theme={theme}
                    onPress={() => console.log("save")}>
                Save Image
            </Button>

            <Modal  animationType="slide" transparent={true} visible={modal}
                onRequestClose={()=>{
                    setModal(false)
                }}
                >
                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>
                        <Button icon="camera" mode="contained" theme={theme} onPress={() => console.log("press camera")}>
                            camera
                        </Button>
                        <Button icon="image-area" mode="contained" theme={theme} onPress={() => console.log("press camera")}>
                            gallery
                        </Button>

                    </View>
                    <Button onPress={() => setModal(false)}>
                            iptal
                        </Button>
                </View>
            </Modal>
        </View>
    )
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
    inputStyle:{
        margin:5
    },
    modalView:{
        position:"absolute",
        bottom:2,
        width:"100%",
        backgroundColor:"white"
    },
    modelButtonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10
    }
})

export default Person;