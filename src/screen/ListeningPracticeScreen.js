import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
// import Header from '../../../components/Header';
// import BackgroundInsight from '../../../components/BackgroundInsight';
import PlayerButton from '../PlayerButton';
// import data from '../../../assets/data.json';
// import audioMap from '../../../helpers/audioMap';

const screenWidth = Dimensions.get('window').width;

const ListeningPracticeScreen = ({ navigation }) => {

  const renderItem = ({ item }) => (
    
    <View style={styles.box}>
      <View style={styles.textContainer}>
        <Text>{item.name}</Text>
        <Text>{item.japanname}</Text>
        <Text>{item.translateviet}</Text>
      </View>
      <View style={styles.playerButtonContainer}>
        <PlayerButton source={audioMap[item.path]} />
      </View>
    </View>
  );

  return (
    <BackgroundInsight>
      <View style={styles.container}>
        <View>
          <Header>Bai 1</Header>
        </View>
        <FlatList
          data={data.soundBai1}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </BackgroundInsight>
  );
};

const styles = StyleSheet.create({
  headerQuan: {
    flex: 1,
  },
  container: {
    flex: 5,
    padding:10,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  playerButtonContainer: {
    // backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: screenWidth * 0.9,
    marginVertical: 5,
  },
});

export default ListeningPracticeScreen;
