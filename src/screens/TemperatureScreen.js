import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import MainHeader from "../components/MainHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TempInput from "../components/TempInput";

const TemperatureScreen = ({ navigation }) => {
    const { questionResult } = navigation.getParam('status')
    const { userTemp, setUserTemp } = useState('0.0');

    const checkTemp = (questionResult) => {
        console.log("Checking Temperature");
        console.log({userTemp});
        console.log({questionResult});
        if (({questionResult} === 0) || (parseFloat(userTemp) >= 100.4)) {
            navigation.navigate('PassFail', {status: questionResult})
        } else if (({questionResult} === 1) && (parseFloat(userTemp) <= 100.4)) {
            navigation.navigate('PassFail', {status: questionResult})
        }
    }

    return (
        <SafeAreaProvider>
            <MainHeader navigation={navigation} headerTitle={'Temperature'}/>
            <View style={styles.backgroundViewStyle}>
                <TempInput
                    term={userTemp}
                    onTermChange={setUserTemp}
                />
                <Button
                    title="Take Your Temperature"
                    onPress={checkTemp(questionResult)} />
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
