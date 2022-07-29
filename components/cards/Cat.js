import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'



const cat = ({item }) => {
    console.log("cat:  ," ,item.id, item.nom)
 return (
   
    <Pressable style={styles.item_cat}
        android_ripple={{color:'yellow'}}
        onPress={()=>{}}
        >
        <Text style={styles.item_text}>
            {item.nom}
        </Text>
    </Pressable>
  )
}

export default cat



const styles = StyleSheet.create({
    item_text : {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
    },

    item_cat: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#00000070",
        margin: 5,
        height: 30,
        width: 95,
        borderRadius: 10,
        borderWidth:1,
        borderColor:'yellow',
    },

    item_image: {
        justifyContent: 'space-between',
        backgroundColor: '#00000030',
        borderWidth: 1,
        width: 160,
        height: 100
    },
})