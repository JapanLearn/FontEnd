import { Pressable, StyleSheet, Text, View } from "react-native"
import { Theme } from "../../assets/Theme"
import CustomBox2 from "../components/CustomBox2"

export default MenuScreen = ({ navigation }) => {
    const CustomView = ({ title }) => (
        <View style={styles.view}>
            <Text style={styles.view_title}>{title}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate('Lesson')}>
                <CustomBox2 title={'Bài 1'} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Lesson')}>
                <CustomBox2 title={'Bài 2'} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Lesson')}>
                <CustomBox2 title={'Bài 3'} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Lesson')}>
                <CustomBox2 title={'Bài 4'} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Lesson')}>
                <CustomBox2 title={'Bài 5'} />
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