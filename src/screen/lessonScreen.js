import { Pressable, StyleSheet, Text, View } from "react-native"
import CustomBox from "../components/CustomBox"
import { Theme } from "../../assets/Theme"

export default LessonScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate('Vocabulary')}>
                <CustomBox title={'Từ vựng'} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Grammar')}>
                <CustomBox title={'Ngữ pháp'} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Kanji')}>
                <CustomBox title={'Kanji'} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Listen')}>
                <CustomBox title={'Luyện nghe'} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Test')}>
                <CustomBox title={'Test'} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: Theme.colors.background
    },
})