import React, {useState} from 'react';
import { StyleSheet, View, Modal,Alert } from 'react-native';
import {TextInput,Button} from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const Person = ()=>{
    const [Name,setName] = useState("")
    const [Phone,setPhone] = useState("")
    const [Email,setEmail] = useState("")
    const [Salary,setSalary] = useState("")
    const [Picture,setPicture] = useState("")
    const [modal,setModal] = useState(false)

    const pickFromGallery = async ()=>{
        const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if(granted){
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5
            })
            if(!data.cancelled){
                let newfile={ uri:data.uri,
                type:`test/${data.uri.split(".")[1]}`,
                name:`test.${data.uri.split(".")[1]}`}
                handleUpload(newfile)
            }
        }else{
            Alert.alert("Bu işlem için izin vermeniz gerkli.")
        }
    }
    const pickFromCamera = async ()=>{
        const {granted} = await Permissions.askAsync(Permissions.CAMERA)
        if(granted){
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5
            })
            //console.log(data);
            if(!data.cancelled){
                let newfile={ uri:data.uri,
                type:`test/${data.uri.split(".")[1]}`,
                name:`test.${data.uri.split(".")[1]}`}
                handleUpload(newfile)
            }
        }else{
            Alert.alert("Bu işlem için izin vermeniz gerkli.")
        }
    }

    const handleUpload=(image)=>{
        const data = new FormData()
        data.append('file',image)
        data.append('upload_preset','employeeApp')
        data.append('cloud_name','oncell')
        fetch("https://api.cloudinary.com/v1_1/oncell/image/upload",{
            method:"post",
            body:data
        }).then(res=>res.json()).
        then(data=>{
            console.log(data)
            setPicture(data.url)
            setModal(false)
        })
    }

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
                    icon={Picture==""?"upload":"check"} 
                    //icon="check"
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
                        <Button icon="camera" mode="contained" theme={theme} onPress={() => pickFromCamera()}>
                            camera
                        </Button>
                        <Button icon="image-area" mode="contained" theme={theme} onPress={() => pickFromGallery()}>
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