import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Header = ({menu, search, playList}) => {
    
    console.log(search)
    const navigation = useNavigation();


  return (
    <View style={styles.header}>
        <View style={styles.left}>
            { menu ?  (

            <View tyle={styles.menu}>
               <Icon name="menu" color="white" size={25} 
                /> 
            </View>): null}
                 
            <View style={styles.logo}>
                <Text style={styles.logo_text}>YoTuBe</Text>
                <View style={styles.logo_icon}>
                    <Icon 
                        name="play-circle-outline"
                        color="yellow"
                        size={30} 
                    /> 
                </View>
            </View>   
        </View>

        { search ? (<View style={styles.right}>
            <TextInput
                style={styles.input}
                placeholder="cinema, jeux vidéos ...;"/>
            <Icon 
                name="search" 
                color="white"
                size={25} />
        </View>) : null}
        
        { playList ? (<View style={styles.logo_icon}>
                <Icon 
                    name="playlist-play"
                    
                    color="yellow"
                    size={30} 
                    // onPress={setShowThisCat(!showThisCat)}
                    /> 
                </View>) : null }  

    </View>

  

  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        padding: 5,
        margin: 15,
        flexDirection: 'row',
        height: 55,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor : 'black',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20  ,
        borderWidth:1,
        borderColor: "yellow"

    },

    left: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    logo : {
        marginLeft:5,
        width: 130,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent : "center",
        borderWidth: 1,
        borderColor: "yellow",
        borderRadius: 15,
    },

    logo_text: {
        color: 'yellow',
        fontSize: 23,
        color: 'yellow',
        fontWeight: 'bold',
        backgroundColor: 'White',
    },

    right: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    input: {
        marginRight: 5,
        width:110,
        height: 25,
        borderBottomWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        fontSize: 10,
        color: 'black',
        backgroundColor: "yellow",
        alignItems: 'center'
    }
    
})