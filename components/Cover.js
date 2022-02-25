import React from 'react'
import {
    View,
    Image,
    StyleSheet,
    Text
} from 'react-native'

const Cover=({img,small})=>{
    const {container,imageStyle,smallStyle}=styles
    const getContainerStyle=()=>(small?smallStyle:container)
    return(
        <View style={getContainerStyle()}>
            <Image style={imageStyle} source={img}  />
            
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width:162,
        height:243,
        borderColor:"white",
       
    },
    imageStyle:{
        width:"100%",
        height:"100%",
        borderRadius:10
    },
    smallStyle:{
        width:70,
        height:112,
        marginTop:20,
        marginHorizontal:5
    }
})

export default Cover