import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Question = ({ question }) => {
    return (
        <View>
            <Text style={styles.questionStyle}>{question}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    questionStyle: {
        fontSize: 25,
        textAlign: 'center'
    },
});

export default Question;
