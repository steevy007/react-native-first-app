import React from 'react'
import {
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native'

import Cover from './Cover'
const CoverList = ({ images }) => {

    const rendeCover = ({ item }) => {
        return (
            <TouchableOpacity>
                <Cover small img={item.imageSrc} />
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            style={styles.flex}
            contentContainerStyle={styles.padding}
            data={images}
            horizontal={true}
            renderItem={item => rendeCover(item)}
            keyExtractor={item => item.id}
        />

    )
}

const styles = StyleSheet.create({
    padding: {
        paddingHorizontal: 25
    },
    flex: {
        flex: 1
    }
})

export default CoverList