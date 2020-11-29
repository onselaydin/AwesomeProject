import React from 'react';
import { StyleSheet, Text, View,Image, FlatList } from 'react-native';
import {Card,FAB} from 'react-native-paper';

const TaskList = () => {

  const data = [
    {id:1,name:"onsel",taskcomment:"vue developmen"},
    {id:2,name:"yagmur",taskcomment:"learn matematics"},
    {id:3,name:"sennur",taskcomment:"cooke pasta"},
    {id:4,name:"pinar",taskcomment:"learn mat her stundents"},
    {id:5,name:"onsel",taskcomment:"vue developmen"},
    {id:6,name:"yagmur",taskcomment:"learn matematics"},
    {id:7,name:"sennur",taskcomment:"cooke pasta"},
    {id:8,name:"pinar",taskcomment:"learn mat her stundents"},
  ]

  const renderList = ((item)=>{//data.map((item)=>{
    return(
      // key={item.id}
      <Card style={styles.mycard} > 
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
    <View>
      {/* { renderList } üstten sağa doğru tırnak var $item.id nin orda önemli dikkat et.*/}

      <FlatList 
        data={data}
        renderItem={({item})=>{
          return renderList(item)
        }}
        keyExtractor={item=>`${item.id}`}
      />
      <FAB
        style={styles.fab}
        small={false}
        icon="plus"
        theme={{colors:{accent:"blue"}}}
        onPress={()=> console.log('Pressed')}
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