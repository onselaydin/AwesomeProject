import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Task({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Task List</Text>
        <Button
          title="Task List"
          onPress={() => navigation.navigate('TaskList')}
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
});
