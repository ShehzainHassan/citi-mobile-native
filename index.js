/**
 * @format
 */
import Reactotron, { networking } from 'reactotron-react-native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
if (__DEV__) {
  require('./ReactotronConfig');
}
Reactotron.configure() // controls connection & communication settings
  .useReactNative({
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
  }) // add all built-in react native plugins
  .use(networking())
  .connect(); // let's connect!
AppRegistry.registerComponent(appName, () => App);
