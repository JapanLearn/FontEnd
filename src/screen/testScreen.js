import { View, FlatList, StyleSheet, Text } from "react-native"
import data from "../data/test.json"
import CustomImage from "../components/CustomImage"

export default TestScreen = () => {
    const view = ({ item, index }) => {
        return (
            <CustomImage source={{ uri: item }} />
        )
    }

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.header_title}>Bài kiểm tra</Text>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={view}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#fff'
        },

        imgDiv: {
            flex: 1,
            width: '100%',
            flexDirection: 'row',

        },
        img: {
            borderWidth: 1,
            borderColor: 'red'
        },
        header: {
            width: '100%',
            height: 75,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        header_title: {
            fontSize: 20,
            fontWeight: 'bold',
        }
    }
)