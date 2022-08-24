import { StyleSheet, Text, View, SafeAreaView, FlatList, Item, DrawerLayoutAndroidComponent } from 'react-native'
import React from 'react'

import {videos} from '../constantes/video'


import Mini from './cards/Mini'



const Tendance = () => {
   
  return (

    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        data={videos.filter(item => item.tendance == 1)}
        renderItem={({item}) => ( 
     
          <Mini item={item}></Mini>
       
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>

  )

}

export default Tendance

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#00000040'
  }
})
