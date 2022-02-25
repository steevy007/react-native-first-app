import React from 'react'
import {
    View,
    StyleSheet,
    Text
}from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import {prefix} from '../utils/constants'
const Rating=()=>{
    const {container,star,rate,votes}=styles
    return(
        <View style={container}>
            <Ionicons style={star} name={`${prefix}-star`} />
            <Text style={rate}>4.8</Text>
            <Text style={votes}>(4599)</Text>
        </View> 
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        width:148,
        height:35,
        marginTop:20,
        paddingHorizontal:27,
        justifyContent:'space-between'
    },
    star:{
        color:'white'
    },
    rate:{
        color:'white',
        fontFamily:'Montserrat-Medium',
        fontSize:16
        
    },
    votes:{
        color:'white',
        fontFamily:'Montserrat-Black',
        fontSize:14
    }
})


export default Rating