import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import { Theme } from "../../assets/Theme"

export default CustomBoxCopy = ({ keyWord, japanWord, desc, ...props }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.name}>
                    <Text style={styles.keyWord}>{keyWord}</Text>
                    <Text style={styles.japanWord}>{japanWord}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.mota}>
                    <Text style={styles.desc}>{desc}</Text>
                </View>
            </View>
            <View style={styles.music}>
                <Image source={require('../../assets/headphone.png')} style={styles.viewImage} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,

        minHeight: 190,
        // width: 325,
        width: "100%",
        borderRadius: 10,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 13,
        marginVertical: 7,

        flexDirection: 'row',

    },
    content: {
        flex: 3,
        height: '100%',
        

    },
    music: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewImage: {
        width: 30,
        height: 30,
    },

    name: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        borderBottomColor:'red',
        borderBottomWidth: 1,
        borderColor:'gray'
    },
    mota: {
        flex: 1,
        // alignItems:'center',
        justifyContent: 'flex-end',
    },
    keyWord: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 5,
        // textAlign: 'center',
    },
    desc: {
        fontSize: 14,
        color: '#808080',
        // textAlign: 'center',
    }
})