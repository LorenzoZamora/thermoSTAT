import React, { useState  } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Header, Icon, Overlay, Card } from 'react-native-elements';

const MainHeader = ({ navigation, headerTitle }) => {
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <View>
            <Header
                shadowColor="transparent"
                backgroundColor="#0d1347"
                leftComponent={
                    <Icon
                        type="material-community"
                        name="home-circle"
                        color="#e8e7ef"
                        onPress={() => navigation.navigate('Home')}
                        underlayColor={'#e8e7ef'}
                        size={30}
                    />
                }
                centerComponent={{text: <Text style={styles.centerTextStyling}>{headerTitle}</Text>}}
                rightComponent={
                    <Icon
                        type="font-awesome"
                        name="bluetooth"
                        color="#e8e7ef"
                        onPress={toggleOverlay}
                        underlayColor={'#e8e7ef'}
                        size={30}
                    />
                }
            />
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <Card>
                    <Card.Title style={{ fontWeight: 'bold'}}>Reminder</Card.Title>
                    <Card.Divider/>
                    <Card.Image
                        source={require('../../assets/floatingBluetooth.webp')}
                        justifyItems='center'
                        style={{ width: 200, height: 200 }}
                        PlaceholderContent={<ActivityIndicator />}>
                    </Card.Image>
                    <Card.Divider/>
                    <Text
                        numberOfLines={4}
                        style={{ fontStyle: 'italic', marginBottom: 10, textAlign: 'center', width: 200 }}>
                        Don't forget to enable Bluetooth and connect the ThermoSTAT Thermometer to your phone!
                    </Text>
                </Card>
            </Overlay>
        </View>
    );
};

const styles = StyleSheet.create({
    centerTextStyling: {
        color: '#e8e7ef',
        fontSize: 25
    }
});

export default MainHeader;
