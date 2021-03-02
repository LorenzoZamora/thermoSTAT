import React from "react";
import { TextInput } from "react-native"

const TempInput = ({ term, onTermChange }) => {
    return (
        <TextInput
            placeholder="Your Max Temperature"
            value={term}
            onTermChange={(newTerm) => onTermChange(newTerm)}
        />
    );
};

export default TempInput;
