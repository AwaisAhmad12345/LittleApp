import React from 'react' 

import {Image, View, Text} from 'react-native'

const MenuItem = ({name, price, image, description}) => {

  return (
    <View>
      <View>
        <Text>{name}</Text>
        <Text>{description}</Text>
        <Text>{price}</Text>
      </View>
      <View>
        <Image source={
            
        }/>
      </View>
    </View>
}