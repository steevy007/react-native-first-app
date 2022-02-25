import React from 'react'
import {
    Text,
    StyleSheet,
    View
} from 'react-native'

const Title = ({ title, customStyle, left }) => {
    const { container, titre, leftAlign } = styles;

    const getStyle = () => (left ? leftAlign : container)
    return (
        <View style={getStyle()}>
            <Text style={[titre, customStyle]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titre: {
        color: "white",
        fontFamily: "Montserrat-Medium",
        fontSize: 30,
        marginTop: 25
    },
    leftAlign: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width:"100%",
        paddingStart:30
    }
})

export default Title