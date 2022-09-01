import { StyleSheet, Text, View } from 'react-native'
import React from 'react'






export default function InfoVideo({item}) {

    <View style={styles.detail_container}>
        <Text style={styles.title}>{item.titre} </Text>
        <View style={styles.cat_container}>  
            <Text style={styles.cat_text}>{categories[item.categorie].nom}</Text>
        </View>
        <View style={styles.description_container}>  
            <Text style={styles.description_text}>{item.description}</Text>
        </View>
    </View>

}



const styles = StyleSheet.create({
detail_container: {
    flex:1,
    margin: 30,
    padding: 10,
    color: '#fff',
}
})
