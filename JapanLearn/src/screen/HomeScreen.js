import { Text, Pressable, View, StyleSheet, ScrollView } from "react-native"
import { Theme } from "../../assets/Theme";

const user = {
    username: 'Nguyễn Trần Đình Quân'
}

export default HomeScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.userCard}>
                <Text style={styles.userCardtxt}>Xin chào</Text>
                <Text style={styles.userCardtxt}>{user.username}</Text>
            </View>
            <View style={styles.lowContainer}>
                <View style={{ paddingTop: 10 }}>
                    <Text style={styles.text}>Khóa học</Text>
                    <View style={styles.row}>
                        <View style={styles.buttonCtn}>
                            <Pressable onPress={() => navigation.navigate('Menu')} style={styles.button} />
                            <Text style={styles.buttontxt}>N5</Text>
                        </View>
                        <View style={styles.buttonCtn}>
                            <Pressable onPress={() => navigation.navigate('Menu')} style={styles.button} />
                            <Text style={styles.buttontxt}>N4</Text>
                        </View>
                        <View style={styles.buttonCtn}>
                            <Pressable onPress={() => navigation.navigate('Menu')} style={styles.button} />
                            <Text style={styles.buttontxt}>N3</Text>
                        </View>
                        <View style={styles.buttonCtn}>
                            <Pressable onPress={() => navigation.navigate('Menu')} style={styles.button} />
                            <Text style={styles.buttontxt}>N2</Text>
                        </View>
                        <View style={styles.buttonCtn}>
                            <Pressable onPress={() => navigation.navigate('Menu')} style={styles.button} />
                            <Text style={styles.buttontxt}>N1</Text>
                        </View>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.background,
    },
    userCard: {
        backgroundColor: Theme.colors.secondary,
        width: '100%',
        height: 100,
        paddingTop: 10,
        paddingLeft: 10
    },
    userCardtxt: {
        fontSize: Theme.fontSizes.medium,
        fontWeight: 'bold',
        fontFamily: 'monospace',

    },
    lowContainer: {
        paddingTop: 25,
        flex: 1,
        backgroundColor: Theme.colors.background,
        width: '100%',
        height: '100%'
    },
    buttonCtn: {
        alignContent: 'center',
        justifyContent: 'center',
    },
    buttontxt: {
        marginTop: 5,
        textAlign: 'center'
    },
    text: {
        fontSize: 18,
        transform: [{ translateY: -12 }, { translateX: 20 }],
        backgroundColor: Theme.colors.background,
        paddingLeft: 5,
        fontFamily: 'monospace',
    },
    row: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'center',
        maxWidth: '100%',
        marginBottom: 30,
        flexWrap: 'wrap',
    },
    button: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.colors.secondary,
        borderRadius: 5,
        marginHorizontal: 5,
        marginTop: 10,
    },
});
