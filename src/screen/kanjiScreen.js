import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import CustomBox from "../components/CustomBox"
import data from "../data/data.json"
import { Theme } from "../../assets/Theme"

export default KanjiScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Nguyễn Văn Tuấn</Text>
            {data.Kanji.map((item, index) =>
            (
                <CustomBox title={item.kanji} desc={item.meaning} />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        backgroundColor: Theme.colors.background
    },
    searchBox: {
        width: 325,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#758694',
        paddingHorizontal: 10,
        paddingVertical: 13,
        marginVertical: 7,
        flexDirection: 'row',
    },
    searchInput: {
        color: '#FFF8F3',
        fontSize: Theme.fontSizes.medium,
        marginLeft: 10,
        width: 250,
    },
    image: {
        width: 25,
        height: 25,
    },
})