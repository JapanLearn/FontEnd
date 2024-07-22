import { Pressable, StyleSheet, Text, View, Image } from "react-native"
import CustomBox2 from "../components/CustomBox2"
import { Theme } from "../../assets/Theme"
import Header from "../components/Header"

export default LessonScreen = ({ navigation }) => {
    const CustomView = ({ text, icon }) =>
    (<View style={styles.view}>
        <View style={styles.viewCircle}>
            <Image source={require('../../assets/headphone.png')} style={styles.viewImage} />
        </View>

        <Text style={styles.viewText}>{text}</Text>
    </View>)


    return (
        <View style={styles.container}>
            <View style={styles.coll}>
                <Pressable onPress={() => navigation.navigate('Vocabulary')} style={{ marginLeft: 35 }}>
                    <CustomView text={'Từ vựng'} icon={'headphone'} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Grammar')} style={{ marginLeft: 'auto', marginRight: 40, }}>
                    <CustomView text={'Ngữ pháp'} icon={'headphone'} />
                </Pressable>
            </View>
            <View style={styles.coll}>
                <Pressable onPress={() => navigation.navigate('Kanji')} style={{ marginLeft: 35 }}>
                    <CustomView text={'Kanji'} icon={'headphone'} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Listen')} style={{ marginLeft: 'auto', marginRight: 35, }}>
                    <CustomView text={'Luyện nghe'} icon={'headphone'} />
                </Pressable>
            </View>
            <View style={styles.coll}>
                <Pressable onPress={() => navigation.navigate('Test')} style={{ marginLeft: 35 }}>
                    <CustomView text={'Test'} icon={'headphone'} />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: Theme.colors.background,
    },
    view: {
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,

        width: 130,
        height: 130,
        marginTop: 25,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    coll: {
        width: "100%",
        flexDirection: 'row',
    },
    viewText: {
        fontWeight: 'bold',
        fontSize: Theme.fontSizes.medium,
    },
    viewImage: {
        width: 30,
        height: 30,
    },
    viewCircle: {
        shadowColor: '#171717',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,

        width: 76,
        height: 76,
        borderRadius: 38,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    }
})