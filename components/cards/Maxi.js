import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'

import {categories} from '../../constantes/categorie'




const Maxi = ({item }) => {
    console.log("imagesMaxi: " ,item.id, item.image, item.categorie, categories[item.categorie].nom)
 return (
   
    <View style={styles.item_card}>
        <Image style={styles.item_image}
          source={item.image}>
        </Image>
        <View style={styles.item_bandeau}>
            <Text style={styles.item_text}>
                {item.titre.substring(0,40)}
            </Text>
        </View>
    </View>
  )
}



export default Maxi

const styles = StyleSheet.create({
    item_text : {
        fontSize: 13,
        fontWeight: 'bold',
        textAlign:'center',
        color:'black',
    
    },

    item_card : {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: "#00000030",
        padding:10,
        margin: 10,
        height: 250,
        width: 350,
        borderRadius: 20
    },

    item_image: {
        borderWidth: 1,
        width: 300,
        height:180,
        borderColor:"yellow",
        borderRadius: 20

    },

    item_bandeau: {
        width: 300,
        height: 30,
        padding:5,
        backgroundColor: '#D8EA17', 
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },

})