import { View, Text, StyleSheet } from "react-native"
import { Theme } from "../../assets/Theme"

export default CustomBox = ({ pronounce, title, desc, ...props }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{'\t\t\t\t\t\t'}{desc}</Text>
            </View>
            <View style={styles.line}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {pronounce.map((item) =>
                (
                    <Text style={styles.pronounce}>{item}</Text>
                ))}
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

        width: 325,
        borderRadius: 10,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 13,
        marginVertical: 7,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: '15%',
        color: '#000000'
    },
    desc: {
        fontSize: 18,
        color: '#808080',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: '15%'
    },
    pronounce: {
        fontSize: 16,
        color: '#808080',
        textAlign: 'center',
        marginLeft: 20,
    },
    line: {
        width: '90%',
        backgroundColor: 'black',
        height: 1,
        alignSelf: 'center',
        marginVertical: 10
    },
})