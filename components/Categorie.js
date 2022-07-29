import { StyleSheet, Text, View, SafeAreaView, FlatList, Item } from 'react-native'
import React from 'react'

import {categories} from '../constantes/categorie'
import Cat from './cards/Cat'



const Categorie = () => {
   
  return (

    <SafeAreaView>
      <FlatList style={styles.container}
        alignItems = "center"
        horizontal
        data={categories}
        renderItem={({item}) => ( 
          
          <Cat item={item} style></Cat>
                
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>

  )

}

export default Categorie

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#00000010",
        height:40,

    }

})