import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements';
import Question from "../components/Question";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MainHeader from "../components/MainHeader";
import {SafeAreaProvider} from "react-native-safe-area-context";

const buttonTheme = {
    Button: {
        raised: true,
        type: "outline",
        color: "#c54145"
    }
};


const QuestionScreen = ({ navigation }) => {
    const [question, setQuestion] = useState(0);
    const [yes, setYes] = useState(0);
    const [no, setNo] = useState(0);

    const questions = ["A cough?", "Shortness of breath?", "Loss of taste or smell?"];
    const images = ["head-side-cough", "lungs", "food-off"];

    const setYesQuestions = () => {
        setQuestion(question+1);
        setYes(yes+1);
    }

    const setNoQuestions = () => {
        setQuestion(question+1);
        setNo(no+1);
    }

    useEffect(() => {
        if ((yes > 0) && (question === 12)) {
            navigation.navigate('PassFail', {status: 0});
        } else if (question === 12) {
            navigation.navigate('PassFail', {status: 1});
        }
    });

    console.log("RERENDERING QUESTIONS")
    return (
        <SafeAreaProvider>
            <MainHeader navigation={navigation} headerTitle={'Symptom Check'}/>
            <View style={styles.backgroundViewStyle}>
                { question < 10
                    ? <Text style={styles.questionStyle}>Have you had:</Text>
                    : null
                }

                <ThemeProvider theme={buttonTheme}>
                { question === 0
                    ? <Text>
                        <View style={styles.titleViewStyle}>
                            <FontAwesome5 style={styles.iconStyle} name="head-side-cough" />
                            <Question question="A cough?"/>
                            <View style={styles.viewButtonStyle}>
                                <Button
                                    title="Yes"
                                    onPress={setYesQuestions}
                                />
                                <Button
                                    title="No"
                                    onPress={setNoQuestions}
                                />
                            </View>
                        </View>
                    </Text>
                    : null
                }

                { question === 1
                    ? <Text>
                        <View>
                        <FontAwesome5 style={styles.iconStyle} name="lungs" />
                        <Question question="Shortness of breath?" />
                            <View style={styles.viewButtonStyle}>
                                <Button
                                    title="Yes"
                                    onPress={setYesQuestions}
                                />
                                <Button
                                    title="No"
                                    onPress={setNoQuestions}
                                />
                            </View>
                        </View>
                      </Text>
                    : null
                }

                { question === 2
                    ? <Text>
                        <MaterialCommunityIcons style={styles.iconStyle} name="food-off" />
                        <Question question="Loss of taste or smell?" />
                        <Button
                            title="Yes"
                            onPress={setYesQuestions}
                        />
                        <Button
                            title="No"
                            onPress={setNoQuestions}
                        />
                    </Text>
                    : null
                }

                { question === 3
                    ? <Text>
                        <Question question="Sore throat?" />
                        <Button
                            title="Yes"
                            onPress={setYesQuestions}
                        />
                        <Button
                            title="No"
                            onPress={setNoQuestions}
                        />
                    </Text>
                    : null
                }

                { question === 4
                    ? <Text>
                        <Question question="Non-allergy related congestion?" />
                        <Button
                            title="Yes"
                            onPress={setYesQuestions}
                        />
                        <Button
                            title="No"
                            onPress={setNoQuestions}
                        />
                    </Text>
                    : null
                }

                { question === 5
                    ? <Text>
                        <Question question="Unexplained fatigue?" />
                        <Button
                            title="Yes"
                            onPress={setYesQuestions}
                        />
                        <Button
                            title="No"
                            onPress={setNoQuestions}
                        />
                    </Text>
                    : null
                }

                { question === 6
                    ? <Text>
                        <Question question="Muscle or body aches?" />
                        <Button
                            title="Yes"
                            onPress={setYesQuestions}
                        />
                        <Button
                            title="No"
                            onPress={setNoQuestions}
                        />
                    </Text>
                    : null
                }

                { question === 7
                    ? <Text>
                        <MaterialCommunityIcons name="head-remove" size={45} color="black" />
                        <Question question="Headaches?" />
                        <Button
                            title="Yes"
                            onPress={setYesQuestions}
                        />
                        <Button
                            title="No"
                            onPress={setNoQuestions}
                        />
                    </Text>
                    : null
                }

                { question === 8
                    ? <Text>
                        <Question question="Nausea?" />
                        <Button
                            title="Yes"
                            onPress={setYesQuestions}
                        />
                        <Button
                            title="No"
                            onPress={setNoQuestions}
                        />
                    </Text>
                    : null
                }

                { question === 9
                    ? <Text>
                        <Question question="Diarrhea?" />
                        <Button
                            title="Yes"
                            onPress={setYesQuestions}
                        />
                        <Button
                            title="No"
                            onPress={setNoQuestions}
                        />
                    </Text>
                    : null
                }

                { question === 10
                    ? <Text>
                        <Question question="Have you been in contact with someone who has tested positive for COVID-19 in the last 2 weeks?" />
                        <Button
                            title="Yes"
                            onPress={setYesQuestions}
                        />
                        <Button
                            title="No"
                            onPress={setNoQuestions}
                        />
                    </Text>
                    : null
                }

                { question === 11
                    ? <Text>
                        <Question question="Have you traveled outside of the United States in the last 2 weeks?" />
                        <Button
                            title="Yes"
                            onPress={setYesQuestions}
                        />
                        <Button
                            title="No"
                            onPress={setNoQuestions}
                        />
                    </Text>
                    : null
                }
                </ThemeProvider>

            </View>
        </SafeAreaProvider>
    )
};

const styles = StyleSheet.create({
    backgroundViewStyle: {
        backgroundColor: '#e8e7ef',
        flex: 1,
        borderColor: '#c54145',
        borderWidth: 3
    },
    iconStyle: {
        fontSize: 35,
        color: 'black',
    },
    titleViewStyle: {
        padding: 20,
        paddingTop: 20
    },
    questionStyle: {
        fontSize: 30,
        textAlign: 'left',
        fontWeight: "bold",
        paddingTop: 20
    },
    viewButtonStyle: {
        justifyContent: 'space-around',
        backgroundColor: '#d08078',
        borderRadius: 20,
        padding: 5,
        flexDirection: 'column',
        height: 50,
        width: 200,
        flex: 1
    },
    buttonStyle: {
        alignItems: "center",
    }
});

export default QuestionScreen;
