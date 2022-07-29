import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';


import Index from './Header';
import Tendance from './Tendance';
import Cat from './Categorie';
import Video from './Video';



const Home = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/background-white.jpg')}
      resizeMode="cover"
      style={styles.body}>
      <Index
        navigation = {navigation}></Index>

      <View style={styles.container}>
        <Text style={styles.titre}>TENDANCES</Text>
        <Tendance></Tendance>

        <Text style={styles.titre}>CATEGORIES</Text>
        <Cat></Cat>

        <Text style={styles.titre}>VIDEOS</Text>
        <View>
          <View>
            <View style={{alignItems: 'center'}}>
              <Video></Video>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;



const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    marginRight: 10,
    marginLeft: 10,
  },

  titre: {
    marginTop: 30,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#00000095',
    padding: 5,
    paddingLeft: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
});
