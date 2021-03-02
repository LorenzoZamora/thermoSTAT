import React, { useState } from 'react';
import {View, Button, StyleSheet, Text, Linking} from 'react-native';
import MainHeader from "../components/MainHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";

const TemperatureScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');

    return (
        <SafeAreaProvider>
            <MainHeader navigation={navigation} headerTitle={'Temperature'}/>
            <View style={styles.backgroundViewStyle}>
                { navigation.getParam('status') === 0 ?
                    <Text>
                        <Text>You have COVID-19 symptoms</Text>
                        <Text>Click the link below to see testing sites</Text>
                        <Button
                            title="See local COVID-19 testing sites"
                            onPress={() => { Linking.openURL('https://www.naccho.org/membership/lhd-directory') }}
                        />
                    </Text>
                    :
                    <Text> YOU ARE WELL!</Text>
                }
                <Button title="Take Temp" onPress={navigation.navigate('PassFail')} />
            </View>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    backgroundViewStyle: {
        backgroundColor: '#e8e7ef',
        flex: 1,
        borderColor: '#c54145',
        borderWidth: 5,
        alignItems: 'center',
        borderBottomRightRadius: 47,
        borderBottomLeftRadius: 47,
        paddingVertical: '25%'
    }
});

export default TemperatureScreen;
