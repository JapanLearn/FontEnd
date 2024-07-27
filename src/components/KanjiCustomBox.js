import { View, Text, StyleSheet } from "react-native"
import { Theme } from "../../assets/Theme"
import Line from "./Line"

export default CustomBox = ({ pronounce, title, desc, ...props }) => {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>{title}</Text>
            <View style={{ flexDirection: 'row', }}>
                {pronounce.map((item) =>
                (
                    <Text style={styles.pronounce}>{item}</Text>
                ))}
            </View> */}
            <View style={{ backgroundColor: 'red', width: '70%', height: 1 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // shadowColor: '#171717',
        // shadowOffset: { width: 2, height: 4 },
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
        // elevation: 5,

        width: 325,
        // borderRadius: 10,
        // backgroundColor: 'white',
        // marginVertical: 10,
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000'
    },
    desc: {
        fontSize: 18,
        color: '#808080',
        textAlign: 'center',
    },
    pronounce: {
        fontSize: 16,
        color: '#808080',
        alignItems: 'center',
        marginLeft: 20,
    },
    line: {
        backgroundColor: 'red',
        width: '70%',
        height: 1,
        marginVertical: 5,
    }
})