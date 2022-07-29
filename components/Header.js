import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Header = ({navigation}) => {
  return (
    <View style={styles.header}>
    <View style={styles.right}>
        <View>
            <Icon name="menu" color="white" size={25} 
                onPress={() => console.log('hello')}
            />
        </View>
        <View>
            <Icon name="home" color="white" size={25} 
            onPress={() => console.log('hello')}
            /> 
        </View>
    </View>
    <View style={styles.left}>
    <TextInput
        style={styles.input}
        placeholder="cinema, jeux vidéos ...;"
    />
    <Icon 
        name="search" 
        color="white"
        onPress={() => navigation.navigate('Detail')} 
        size={25} />
    </View>
    </View>

  

  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        padding: 10,
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor : '#00000070',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
        
    },

    right: {
        width: 80,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width:200,
        borderBottomWidth: 1,
        borderColor: "white",
        borderRadius: 10,
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        color: 'white'

    },

    left: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})