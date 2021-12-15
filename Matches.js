import React, { useEffect, useState } from "react";
import { Text, Picker, View, StyleSheet, Button } from "react-native";


export const Matches = () => {

    //const [user, setUser] = useState([]);
    const [selectedYear, setSelectedYear] = useState(2011);
    const [totalMatches, setTotalMatches] = useState(0);
    const [data, setData] = useState([]);

    const updateYear = (year) => {
        setSelectedYear(year);
    };

    useEffect(() => {

        fetch(
            `https://jsonmock.hackerrank.com/api/football_competitions`
        )

            .then((response) => response.json())
            .then((result) => {
            setSelectedYear(selectedYear);
            setData(result.data);
            setTotalMatches(result.data.length);
            });
    }, [selectedYear]);

    let years = [];

    data.forEach((eleman) => {
        years.push(eleman.year);
    });

    const yearsForPicker = () => {
        let pickerYears = years.map((year) => {
            return <Picker.Item label={year} value={year} />
        });
        return (
            <>
                <Picker style={styles.picker} selectedValue={selectedYear} onValueChange>
                    {pickerYears}
                </Picker>
            </>
        )
    };
    return (
        <View>
            {yearsForPicker()}
            <Button style={styles.button} onPress={updateYear} title="updateYear" color="black" />
            <Text style={styles.text}>{selectedYear}</Text>
        </View>
    )
};

export default Matches

const styles = StyleSheet.create({
    button: {
        alignSelf: "center"
    },
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
    }
})

