import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Card} from 'react-native-paper';

const Header=()=>{
    return (
        <View style={styles.mycard}>
            <Image style={{width:200, height:50, borderLeftWidth:50/2}}
            source={{uri:"http://www.dincerlojistik.com.tr/common/images/logo.png"}}
            />
            {/* <Text>hello from header</Text> */}
        </View>
        
    )
}
const styles= StyleSheet.create({
    mycard:{
         margin:10,
         
        // padding:10,
        //marginBottom:1,
        //backgroundColor:"#003f5c"
    }
})
export default Header;