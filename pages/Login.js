import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import Header from '../components/Header';

export default class Login extends React.Component {
  //let [email, password] = useState("");
  state = { email:"",password:"" }
  clickLogin(){
    this.props.navigation.navigate('TaskList');
  }
  render(){
  return (
    <View style={styles.container}>
        <Header/>
        {/* <Text style={styles.logo}>Dinçer</Text> */}
        <View style={styles.inputView}>
            <TextInput  
                style={styles.inputText}
                placeholder="Eposta..." 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView}>
            <TextInput  
                style={styles.inputText}
                placeholder="Parola..." 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
            <Text style={styles.forgot}>Şifremi unuttum</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.clickLogin.bind(this)} style={styles.loginBtn}>
          <Text style={styles.loginText}>Giriş</Text>
        </TouchableOpacity>
        
       
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4287f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  logo:{
    fontWeight:"bold",
    fontSize:25,
    color:"#fb5b5a",
    marginBottom:40
  },
  loginText:{
    color:"white"
  }
});