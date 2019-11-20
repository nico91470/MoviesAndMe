import React from 'react'
import { View, TextInput, Button } from 'react-native'

class Search extends React.Component {

    render() {
        return (
            <View style={{ marginTop: 20, backgroundColor: 'red' }}>
                <TextInput style={styles.textInput}
                    placeholder='Titre du film' />
                <Button titre='Recherche' onPress={() => { }} />
            </View>
        )
    }
}

const styles = {
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
}

export default Search
