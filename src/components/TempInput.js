import React from "react";
import { SafeAreaView, View, TextInput, StyleSheet } from "react-native"
import { Icon } from 'react-native-elements'

const TempInput = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <SafeAreaView>
            <View style={styles.backgroundStyle}>
                <Icon
                    type="material-community"
                    name="thermometer"
                    style={styles.iconStyle}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter Temperature"
                    placeholderTextColor="#60605e"
                    keyboardType={'numeric'}
                    value={term}
                    onChangeText={onTermChange}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#eeb9ba',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row'
    },
    inputStyle: {
        borderColor: 'black',
        flex: 1,
        fontSize: 18,
        width: 250,
        padding: 16
    },
    iconStyle: {
        fontSize: 35,
        color: '#0d1347',
        alignSelf: 'center',
        marginHorizontal: 15,
        paddingTop: 13
    },
    textInputStyle: {
        width: 250,
        backgroundColor: '#dde8c9',
        padding: 16,
    },
});

export default TempInput;
