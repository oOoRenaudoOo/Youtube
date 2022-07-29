import { StyleSheet, Text, View, SafeAreaView, FlatList, Item } from 'react-native'
import React from 'react'

import {videos} from '../constantes/video'


import Maxi from './cards/Maxi'



const Video = () => {
   
  return (

    <SafeAreaView>
      <FlatList
 
        data={videos}
        renderItem={({item}) => ( 
          
          <Maxi item={item}></Maxi>
                
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>

  )

}

export default Video



const styles = StyleSheet.create({

})