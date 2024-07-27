import { Pressable, StyleSheet, Text, View, Image } from "react-native"
import { Theme, } from "../../assets/Theme"
import CustomBox2 from "../components/CustomBox2"

export default MenuScreen = ({ navigation, api, ...props }) => {
    const CustomView = ({ title }) => (
        <View style={styles.view}>
            <Text style={styles.view_title}>{title}</Text>

        </View>
    )

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Bài học {api}</Text>
            <Pressable onPress={() => navigation.navigate('Alphabet')}>
                <CustomView title={'Bài 1'} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Lesson')}>
                <CustomView title={'Bài 2'} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Lesson')}>
                <CustomView title={'Bài 3'} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Lesson')}>
                <CustomView title={'Bài 4'} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Lesson')}>
                <CustomView title={'Bài 5'} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: Theme.colors.background,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        marginVertical: 34,
    },
    view: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 16,
        borderRadius: 85.9,
        backgroundColor: '#049696',
    },
    view_title: {
        fontSize: 24,
        textAlign: 'justify',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#fff',
    },

})