import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import {prefix} from '../utils/constants'
const Header=(props)=>{
    const{container,closeIcon,cartIcon}=styles
    return(
        <View style={container}>
            <Ionicons style={closeIcon} name={`${prefix}-close`} />
            <Ionicons style={cartIcon} name={`${prefix}-cart`} />
            
         
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:"100%",
        alignItems:"center",
        paddingHorizontal:38,
        marginVertical:20,
        marginBottom:45,
        marginTop:35
    },
    closeIcon:{
        fontSize:40,
        color:"white"
    },
    cartIcon:{
        fontSize:30,
        color:"white"
    }
})

export default Header