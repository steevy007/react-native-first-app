import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
}from 'react-native'

const Action=(props)=>{
    const {container,price,priceContent,preview,previewContent}=styles
    return(
        <View style={container}>
            <TouchableOpacity style={price} onPress={()=>{}}>
                <Text style={priceContent}>19.19HT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={preview} onPress={()=>{}}>
                <Text style={previewContent}>Free Preview</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        width:271,
        height:48,
        justifyContent:'center',
        alignItems:'center'
    },
    price:{
        justifyContent:'center',
        alignItems:'center',
        width:150,
        height:48,
        backgroundColor:'white',
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15
    },
    priceContent:{
        fontFamily:'Montserrat-Black',
        fontSize:18
    },
    preview:{
        color:'white',
        justifyContent:'center',
        alignItems:'center',
        width:150,
        height:48,
        backgroundColor:'#ef8262',
        borderTopRightRadius:15,
        borderBottomRightRadius:15
    },
    previewContent:{
        fontFamily:'Gilroy-Bold',
        fontSize:16
    }
})

export default Action