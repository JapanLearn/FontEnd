import React from "react";
import { View, FlatList, StyleSheet, Text, Image } from "react-native";
import CustomImage from "../components/CustomImage"
import data from "../data/test.json";
import images from "../components/TestScreen/imageMap";

const TestScreen = () => {
    const Item = ({ src }) => (
        <View style={styles.imgDiv}>
            <CustomImage source={src}/>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Item src={images[item]} />}
                numColumns={1}
            />
        </View>
    );
};

export default TestScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 10,
    },
    imgDiv: {
        flex: 1,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'red',
    },
});
