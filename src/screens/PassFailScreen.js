import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { Button, Icon, ThemeProvider } from 'react-native-elements'
import MainHeader from "../components/MainHeader";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import moment from 'moment';

const theme = {
    Icon: {
        color: "#0d1347",
        size: 30
    }
};

const PassFailScreen = ({ navigation }) => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        let month = new Date().getMonth() + 1;
        let date = new Date().getDate();
        let year = new Date().getFullYear();
        let hours = new Date().getHours();
        let min = new Date().getMinutes();
        let sec = new Date().getSeconds();
        setCurrentDate(
            month + '/' + date + '/' + year
            + '\n' + hours + ':' + min + ':' + sec
        );
    }, []);

    return (
        <SafeAreaProvider>
            <MainHeader navigation={navigation} headerTitle={'Results'}/>
            { navigation.getParam('status') === 0 ?
                <View style={styles.backgroundViewFailStyle}>
                    <View style={styles.descViewStyle}>
                        <Icon
                            type="material-community"
                            name="alert-decagram"
                            color="#0d1347"
                            size={30}
                        />
                        <Text style={styles.descTextStyle}>
                            {`You have potentially been exposed to COVID-19 and infected.
                                \nConsider quarantining for 2 weeks and getting tested.
                                \nSee your healthcare professional for more info.`}
                        </Text>
                    </View>
                    <View style={{paddingBottom: 48}}/>
                    <Button
                        type="outline"
                        raised={true}
                        onPress={() => {
                            Linking.openURL('https://www.hhs.gov/coronavirus/community-based-testing-sites/index.html')
                        }}
                        title="Local Testing Info"
                        icon={
                            <Icon
                                type="material-community"
                                name="test-tube"
                                color="#0d1347"
                                size={30}
                            />
                        }
                        iconRight={true}
                        titleStyle={styles.seeTestingButtonStyle}
                        containerStyle={styles.seeTestingButtonView}
                    />
                    <Button
                        type="outline"
                        raised={true}
                        onPress={() => {
                            Linking.openURL('https://www.hhs.gov/coronavirus/covid-19-treatments-therapeutics/index.html')
                        }}
                        title="Treatments & Therapeutics"
                        icon={
                            <Icon
                                type="material-community"
                                name="pill"
                                color="#0d1347"
                                size={30}
                            />
                        }
                        iconRight={true}
                        titleStyle={styles.seeTestingButtonStyle}
                        containerStyle={styles.seeTestingButtonView}
                    />
                </View>
                : null
            }

            { navigation.getParam('status') === 1 ?
                <ThemeProvider theme={theme}>
                    <View style={styles.backgroundViewClearStyle}>
                        <View style={styles.descClearedStyle}>
                            <Icon
                                type="material-community"
                                name="account-check"
                                color="#0d1347"
                                size={30}
                            />
                            <Text style={styles.descTextStyle}>
                                {`You're all clear!
                            \nWash your hands, wear your mask, and stay safe out there!\n`}
                            </Text>
                            <View style={styles.triIconViewStyle}>
                                <Icon
                                    type="material-community"
                                    name="hand-water"
                                />
                                <Icon
                                    type="font-awesome-5"
                                    name="head-side-mask"
                                />
                                <Icon
                                    type="material-community"
                                    name="account-heart"
                                />
                            </View>
                            <Text style={styles.descTextStyle}>
                                {moment(currentDate).format('dddd')}{`  ~  `}
                                {moment(currentDate).format('MMMM D, YYYY')}
                                {`\n`}
                                [ {moment(currentDate).format('h:mm:ss a')} ]
                            </Text>
                        </View>
                    </View>
                </ThemeProvider>
                : null
            }
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    backgroundViewFailStyle: {
        backgroundColor: '#9B2023',
        flex: 1,
        borderColor: '#c54145',
        borderWidth: 5,
        alignItems: 'center',
        borderBottomRightRadius: 47,
        borderBottomLeftRadius: 47,
        paddingVertical: '25%'
    },
    backgroundViewClearStyle: {
        backgroundColor: '#74D961',
        flex: 1,
        borderColor: '#61ae35',
        borderWidth: 5,
        alignItems: 'center',
        borderBottomRightRadius: 47,
        borderBottomLeftRadius: 47,
        paddingVertical: '25%'
    },
    descViewStyle: {
        backgroundColor: '#eeb9ba',
        borderRadius: 10,
        borderColor: '#c54145',
        padding: 10
    },
    descTextStyle: {
        fontSize: 25,
        textAlign: 'center',
        width: 330,
        padding: 3
    },
    descClearedStyle: {
        backgroundColor: '#bbe3a7',
        borderRadius: 10,
        borderColor: '#61ae35',
        borderWidth: 3,
        padding: 10
    },
    seeTestingButtonStyle: {
        color: '#0d1347',
        width: 200
    },
    seeTestingButtonView: {
        backgroundColor: 'white',
        borderColor: '#c54145'
    },
    triIconViewStyle: {
        flexDirection: 'row',
        paddingBottom: 25,
        justifyContent: 'space-around',
        alignContent: 'center',
    }
});

export default PassFailScreen;
