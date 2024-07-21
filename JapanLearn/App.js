import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import MenuScreen from './src/screen/MenuScreen';
import loginScreen from './src/screen/loginScreen';
import lessonScreen from './src/screen/lessonScreen';
import vocabularyScreen from './src/screen/vocabularyScreen';
import grammarScreen from './src/screen/grammarScreen';
import gmDetailScreen from './src/screen/gmDetailScreen';
import kanjiScreen from './src/screen/kanjiScreen';
import listenScreen from './src/screen/listenScreen';
import testScreen from './src/screen/testScreen';
import alphabetScreen from './src/screen/alphabetScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ title: 'Home Screen' }} component={HomeScreen} />
        <Stack.Screen name="Menu" options={{ title: 'Menu Screen' }} component={MenuScreen} />
        <Stack.Screen name="Login" options={{ title: 'Login Screen' }} component={loginScreen} />
        <Stack.Screen name="Lesson" options={{ title: 'Lesson Screen' }} component={lessonScreen} />
        <Stack.Screen name="Alphabet" options={{ title: 'Alphabet Screen' }} component={alphabetScreen} />
        <Stack.Screen name="Vocabulary" options={{ title: 'Vocabulary Screen' }} component={vocabularyScreen} />
        <Stack.Screen name="Grammar" options={{ title: 'Grammar Screen' }} component={grammarScreen} />
        <Stack.Screen name="GrammarDetail" options={{ title: 'Grammar dt Screen', headerShown: false }} component={gmDetailScreen} />
        <Stack.Screen name="Kanji" options={{ title: 'Kanji Screen' }} component={kanjiScreen} />
        <Stack.Screen name="Listen" options={{ title: 'Listen Screen' }} component={listenScreen} />
        <Stack.Screen name="Test" options={{ title: 'Test Screen' }} component={testScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}