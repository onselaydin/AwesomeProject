import React from 'react';
import { StyleSheet, Text, View,Image, FlatList } from 'react-native';
import {Card,FAB} from 'react-native-paper';

const TaskList = ({navigation}) => {

  const data = [
    {id:"1",name:"onsel",email:"abc@abc.com",salary:"5000",phone:"1234",position:"web dev",picture:"https://images.unsplash.com/photo-1589652717406-1c69efaf1ff8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",taskcomment:"vue developmen"},
    {id:"2",name:"yagmur",email:"aaa@abc.com",salary:"6000",phone:"1111",position:"student",picture:"https://images.unsplash.com/photo-1564931768869-c66430fe1162?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",taskcomment:"learn matematics"},
    {id:"3",name:"sennur",email:"bbb@abc.com",salary:"7000",phone:"2222",position:"teacher",picture:"https://images.unsplash.com/photo-1589652717406-1c69efaf1ff8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",taskcomment:"cooke pasta"},
    {id:"4",name:"pinar",email:"ccc@abc.com",salary:"4000",phone:"3333",position:"teacher",picture:"https://images.unsplash.com/photo-1564931768869-c66430fe1162?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",taskcomment:"learn mat her stundents"},
    {id:"5",name:"onsel",email:"ddd@abc.com",salary:"3000",phone:"4444",position:"software developer",picture:"https://images.unsplash.com/photo-1589652717406-1c69efaf1ff8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",taskcomment:"vue developmen"},
    {id:"6",name:"yagmur",email:"eee@abc.com",salary:"2000",phone:"5555",position:"image maker",picture:"https://images.unsplash.com/photo-1564931768869-c66430fe1162?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",taskcomment:"learn matematics"},
    {id:"7",name:"sennur",email:"fff@abc.com",salary:"8000",phone:"6666",position:"mom",picture:"https://images.unsplash.com/photo-1589652717406-1c69efaf1ff8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",taskcomment:"cooke pasta"},
    {id:"8",name:"pinar",email:"ggg@abc.com",salary:"9000",phone:"7777",position:"sister",picture:"https://images.unsplash.com/photo-1564931768869-c66430fe1162?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",taskcomment:"learn mat her stundents"},
  ]

  const renderList = ((item)=>{//data.map((item)=>{
    return(
      // key={item.id}
      <Card style={styles.mycard} 
                                  // Profil sayfasına item daki alanları ve değerleri gönderiyoruz.
       onPress={()=>navigation.navigate("Profile", {item})}> 
        <View style={styles.cardView}>
           <Image style={{width:60,height:60,borderRadius:30}}
           source={{uri:"https://images.unsplash.com/photo-1589652717406-1c69efaf1ff8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"}}/>
           <View style={{marginLeft:10}}>
             <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.taskcomment}</Text>
           </View>
        </View>

      </Card>
    )
  })

  return (
    <View style={{flex:1}}> 
      {/* { renderList } üstten sağa doğru tırnak var $item.id nin orda önemli dikkat et.*/}

      <FlatList 
        data={data}
        renderItem={({item})=>{
          return renderList(item)
        }}
        keyExtractor={item=>item.id}
      />
      <FAB onPress={()=>navigation.navigate("Person")}
        style={styles.fab}
        small={false}
        icon="plus"
        theme={{colors:{accent:"blue"}}}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mycard:{
    margin:5
  },
  cardView:{
    flexDirection:"row",
    padding:6
  },
  text:{
    fontSize:20,
    marginLeft:10
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  }
});

export default TaskList;