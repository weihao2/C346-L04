import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {FontAwesome6} from '@expo/vector-icons';

const Boat = ({ name, description, poster}) => {
    return (
        <View>
            <Text></Text>
            <Image source={poster}
                style={{width:'300', height:'400'}}/>
            <FontAwesome6 name={"sailboat"} size={40} color={"grey"} />
            <Text>{name}</Text>
            <Text>{description}</Text>
        </View>
    )
}

export default Boat;