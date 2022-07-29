import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'

import {categories} from '../../constantes/categorie'




const Mini = ({item }) => {
    console.log("images: " ,item.id, item.image, item.categorie, categories[item.categorie].nom)
 return (
   
    <View style={styles.item_card}>

        <View style={styles.item_bandeau}>
            <Text style={styles.item_text}>{categories[item.categorie].nom}</Text>
        </View>
        
    
        <Image style={styles.item_image}
          source={item.image}
        /> 
   
       
        <View style={styles.item_footer}>
            <Text style={styles.item_text}>
                {
                    (item.titre.length >= 25) ?
                    item.titre.substring(0,20) + '...' : item.titre }
            </Text>
        </View>

    </View>
  )
}

export default Mini

const styles = StyleSheet.create({
    item_text : {
        fontSize: 13,
        fontWeight: 'bold',
        textAlign:'center'
    },

    item_card : {
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: "#00000080",

        // padding:10,
        // margin: 10,
        height: 180,
        width: 200,
        // borderRadius: 20
    },

    item_image: {
        justifyContent: 'space-between',
        backgroundColor: '#00000030',
        borderWidth: 1,
        width: 170,
        height: 110

    },

    item_footer: {
        width: 200,
        height: 20,
        backgroundColor: '#D8EA17', 
    },

    item_bandeau: {
        width: 200,
        height: 20,
        backgroundColor: '#D8EA17', 
    }
})