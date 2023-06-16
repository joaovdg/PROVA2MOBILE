import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Link } from "@react-navigation/native";

const Card = ({imageUri, name, description}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Image source={{uri: imageUri}} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity style={styles.button}>
      <Link  to={{screen: "Login"}}>Trocar</Link>
      
        
      </TouchableOpacity>
    </View>
  )
}

const Cartas = () => {
  return (
    <View style={styles.container}>
      <Card 
        imageUri="https://cdn.pixabay.com/photo/2014/04/03/00/36/sword-308836_1280.png"
        name="Espada Longa"
        description="+50 DMG & +20 DEFESA"
        
      />
      <Card 
        imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBGAirYCfePLfEnjubc5NOXGny1ZVNL9ME0g&usqp=CAU"
        name="POÇÃO DE CURA"
        description="+50 DMG & +20 DEFESA"
      />
      <Card 
        imageUri="https://i.pinimg.com/236x/e8/16/26/e81626130dcc9f1861fffd32e51418b0.jpg"
        name="Arco do Legolas"
        description="+50 DMG & +30 DEFESA"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  
  },
  card: {
    width: 300,
    height: 400,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'
  },
  image: {
    width: 250,
    borderStyle: 'solid',
    borderWidth: 2,
    height: 220,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 25
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#8B0000',
    padding: 5,
    height:30,
    width:100,
    borderRadius: 5,
    textAlign:'center',
    marginTop: 60
  },
  buttonText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold'
  }
})

export default Cartas;