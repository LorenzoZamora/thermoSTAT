import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import MainHeader from "../components/MainHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, Icon, Input } from "react-native-elements";

const TemperatureScreen = ({ navigation }) => {
    const [userTemp, setUserTemp] = useState('');

    const checkTemp = () => {
        if (navigation.getParam('status') === 0) {
            navigation.navigate('PassFail', {status: 0})
        } else if(navigation.getParam('status') === 1) {
            if (parseFloat(userTemp) < 100.4) {
                navigation.navigate('PassFail', {status: 1})
            } else if (parseFloat(userTemp) >= 100.4) {
                navigation.navigate('PassFail', {status: 0})
            }
        }
    }

    return (
        <SafeAreaProvider>
            <MainHeader navigation={navigation} headerTitle={'Temperature'}/>
            <View style={styles.backgroundViewStyle}>
                <View style={styles.descViewStyle}>
                    <Icon
                        type="material-community"
                        name="thermometer"
                        color="#0d1347"
                        size={30}
                    />
                    <Text style={styles.descTextStyle}>
                        {`Use the ThermoSTAT Thermometer to take your temperature and enter it below.`}
                    </Text>
                </View>
                <View style={{paddingBottom: 15}}/>
                <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType={'numeric'}
                    placeholder="00.0"
                    maxLength={5}
                    placeholderTextColor="#0d1347"
                    rightIcon={
                        <Icon
                            type="material-community"
                            name="temperature-fahrenheit"
                            color="#0d1347"
                            size={30}
                        />
                    }
                    inputStyle={{color: '#0d1347'}}
                    containerStyle={{width: 100, backgroundColor: '#eeb9ba', height: 60}}
                    defaultValue={userTemp}
                    onChangeText={userTemp => setUserTemp(userTemp)}
                />
                <View style={{paddingBottom: 15}}/>
                <Button
                    type="outline"
                    raised={true}
                    iconRight={true}
                    onPress={checkTemp}
                    title="Submit Temperature"
                    icon={
                        <Icon
                            type="ionicon"
                            name="push-outline"
                            color="#0d1347"
                            size={30}
                        />
                    }
                    titleStyle={styles.submitTempButtonStyle}
                    containerStyle={styles.submitTempViewStyle}
                />
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
    },
    submitTempButtonStyle: {
        color: '#0d1347',
        width: 125
    },
    submitTempViewStyle: {
        backgroundColor: 'white',
        borderColor: '#c54145'
    },
    descViewStyle: {
        backgroundColor: '#eeb9ba',
        borderRadius: 10,
        borderColor: '#c54145',
        padding: 10,
    },
    descTextStyle: {
        fontSize: 25,
        textAlign: 'center',
        width: 330,
        padding: 3
    }
});

export default TemperatureScreen;
