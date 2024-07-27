import { useEffect, useState } from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text, Image, Modal } from 'react-native';
import { Audio } from 'expo-av';
import CustomBoxCopy from '../components/CustomBoxCopy';
export default ListenScreen = () => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../components/1-1.mp3')
    );
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

  return (
    <View style={styles.container}>
      <CustomBoxCopy onPress={() => setOpenModal(true)} latinWords={'Ohayo gozaimasu'} hiraganaWords={'おはようございうございうございうございうございます'} vietWords={'Chào buổi sáng'} playSound={isPlaying ? stopSound : playSound} />
      <Modal visible={openModal} transparent={true}>
        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.title}>Ohayo gozaimasu</Text>
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
    </View>
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
    justifyContent: "center",
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
    flex: 1,
    alignItems:'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  viewImage: {
    width: 30,
    height: 30
  }
});