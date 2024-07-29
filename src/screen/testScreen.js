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
    }
)