import { Pressable, StyleSheet, Text, View } from "react-native"
import CustomBox from "../components/CustomBox"
import { Theme } from "../../assets/Theme"

export default MenuScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate('Lesson')}>
                <CustomBox title={'Bài 1'} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Lesson')}>
                <CustomBox title={'Bài 2'} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Lesson')}>
                <CustomBox title={'Bài 3'} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Lesson')}>
                <CustomBox title={'Bài 4'} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Lesson')}>
                <CustomBox title={'Bài 5'} />
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