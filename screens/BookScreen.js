import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'
import Constants from 'expo-constants'
import Header from '../components/Header'
import Cover from '../components/Cover'
import Title from '../components/Title'
import Rating from '../components/Rating'
import Action from '../components/Action'
import CoverList from '../components/Coverlist'
const BookScreen = (props) => {
    const book1 = require("../assets/images/images/book1.png")
    const { container, subT,cont } = styles
    const images=[
        {imageSrc:require('../assets/images/images/book1.png'),id:'1'},
        {imageSrc:require('../assets/images/images/book2.png'),id:'2'},
        {imageSrc:require('../assets/images/images/book3.png'),id:'3'},
        {imageSrc:require('../assets/images/images/book4.png'),id:'4'},
        {imageSrc:require('../assets/images/images/book5.png'),id:'5'},
        {imageSrc:require('../assets/images/images/book6.png'),id:'6'},
    ]
    return (
        <ScrollView style={cont}>
            <View style={container}>
                <Header />
                <Cover img={book1} />
                <Title title={'The Jungle Book'} />
                <Title title={'Rudyard Kliping'} customStyle={subT} />
                <Rating />
                <Action />
                <Title left title={'You May Also Like'} customStyle={styles.leftStyle}/>
                <CoverList images={images} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cont:{
        flex:1,
        backgroundColor:'#000'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#000',
        paddingBottom: 20,
        marginTop: Constants.statusBarHeight
    },
    subT: {
        opacity: 0.7,
        fontFamily: 'Gilroy-Bold',
        fontSize: 25,
  
    },
    leftStyle:{
        fontFamily:'Montserrat-SemiBold',
        fontSize:14
    }
})

export default BookScreen