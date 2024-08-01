import { Pressable, StyleSheet, Text, View, Image } from "react-native"
import { Theme } from "../../assets/Theme"


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
                <Pressable onPress={() => navigation.navigate('Grammar')} style={{ marginLeft: 'auto', marginRight: 35, }}>
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

        width: 140,
        height: 140,
        borderRadius: 10,
        // justifyContent: 'flex-end',
        // alignItems: 'center',
        backgroundColor: Theme.colors.primary,
    },
    coll: {
        width: "100%",
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent: 'space-evenly',
        margin: 5,
    },
    viewText: {
        flex: 1,
        // backgroundColor:'green',
        paddingLeft: 10,
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: Theme.fontSizes.medium,
    },
    viewImage: {
        width: 30,
        height: 30,
    },
    viewCircle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3,
    }
})