import { View, Text, StyleSheet } from "react-native"
import { Theme } from "../../assets/Theme"

export default CustomBox = ({ title, desc, ...props }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
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
        fontSize: 16,
        fontWeight: 'bold',
    },
    desc: {
        fontSize: 14,
        color: '#808080',
    }
})