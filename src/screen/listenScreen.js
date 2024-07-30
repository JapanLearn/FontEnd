import { useEffect, useState } from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text, Image, Modal, ScrollView } from 'react-native';
import { Audio } from 'expo-av';
import CustomBoxCopy from '../components/CustomBoxCopy';
import data from '../data/listen.json';
import audioMap from '../components/audioMap';
export default ListenScreen = () => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [model, setModel] = useState({ latinWords: '', hiraganaWords: '', vietWords: '', filename: '' });

  async function playSound(filename) {
    let filepath = '../components/1-1.mp3'
    const soundModule = await import(filepath);
    const { sound } = await Audio.Sound.createAsync(audioMap[filename]);
    setSound(sound);
    setIsPlaying(true);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  async function stopSound() {
    if (isPlaying) {
      console.log('Stopping Sound');
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const CustomView = ({ latinWords, hiraganaWords, vietWords, filename }) => (
    <View>
      <CustomBoxCopy
        onPress={() => {
          setModel({latinWords, hiraganaWords, vietWords, filename});
          setOpenModal(true)
        }}
        latinWords={latinWords}
        hiraganaWords={hiraganaWords}
        vietWords={vietWords}
        filename={filename}
        playSound={isPlaying ? stopSound : playSound} />
    </View>
  )

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((item) => <CustomView latinWords={item.latinWords} hiraganaWords={item.hiraganaWords} vietWords={item.vietWords} filename={item.filename} />)}
      <Modal visible={openModal} transparent={true}>
        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.title}>{model.latinWords}</Text>
            <Text style={styles.desc}>
              おはようございうございうございうございうございます
            </Text>
            <Text style={styles.desc}>
              Chào buổi sáng
            </Text>
            <TouchableOpacity onPress={playSound}>
              <Image source={require('../../assets/headphone.png')} style={styles.viewImage} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { width: "100%", marginTop: 24, backgroundColor: "rgba(0,0,0,0.1)", },]} onPress={() => setOpenModal(false)}>
              <Text style={[styles.text, { color: "black" }]}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  desc: {
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.7,
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 12,
  },
  card: {
    width: "90%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  text: {
    fontWeight: "600",
    fontSize: 16,
    color: "white",
  },
  button: {
    width: "90%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 8,
  },
  container: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  viewImage: {
    width: 30,
    height: 30
  }
});