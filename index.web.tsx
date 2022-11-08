import {AppRegistry} from 'react-native';
import App from './src/App';
import appInfo from './app.json';
import Fontisto from 'react-native-vector-icons/Fonts/Fontisto.ttf';
import FontAwesome5_Solid from 'react-native-vector-icons/Fonts/FontAwesome5_Solid.ttf';
import FontAwesome5_Regular from 'react-native-vector-icons/Fonts/FontAwesome5_Regular.ttf';
import FontAwesome5_Brands from 'react-native-vector-icons/Fonts/FontAwesome5_Brands.ttf';
import Zocial from 'react-native-vector-icons/Fonts/Zocial.ttf';
import SimpleLineIcons from 'react-native-vector-icons/Fonts/SimpleLineIcons.ttf';
import Octicons from 'react-native-vector-icons/Fonts/Octicons.ttf';
import MaterialIcons from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
import MaterialCommunityIcons from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
import Ionicons from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import Feather from 'react-native-vector-icons/Fonts/Feather.ttf';
import EvilIcons from 'react-native-vector-icons/Fonts/EvilIcons.ttf';
import Entypo from 'react-native-vector-icons/Fonts/Entypo.ttf';
import AntDesign from 'react-native-vector-icons/Fonts/AntDesign.ttf';
import Foundation from 'react-native-vector-icons/Fonts/Foundation.ttf';
import FontAwesome from 'react-native-vector-icons/Fonts/FontAwesome.ttf';

const style = document.createElement('style');
style.type = 'text/css';

let iconFontStyles = `@font-face {
  src: url(${Fontisto});
  font-family: Fontisto;
}`;
style.appendChild(document.createTextNode(iconFontStyles));
iconFontStyles = `@font-face {
  src: url(${FontAwesome5_Solid});
  font-family: FontAwesome5_Solid;
}`;
style.appendChild(document.createTextNode(iconFontStyles));
iconFontStyles = `@font-face {
  src: url(${FontAwesome5_Regular});
  font-family: FontAwesome5_Regular;
}`;
style.appendChild(document.createTextNode(iconFontStyles));
iconFontStyles = `@font-face {
  src: url(${FontAwesome5_Brands});
  font-family: FontAwesome5_Brands;
}`;
style.appendChild(document.createTextNode(iconFontStyles));
iconFontStyles = `@font-face {
  src: url(${Zocial});
  font-family: Zocial;
}`;
style.appendChild(document.createTextNode(iconFontStyles));
iconFontStyles = `@font-face {
  src: url(${SimpleLineIcons});
  font-family: SimpleLineIcons;
}`;
style.appendChild(document.createTextNode(iconFontStyles));
iconFontStyles = `@font-face {
  src: url(${Octicons});
  font-family: Octicons;
}`;
style.appendChild(document.createTextNode(iconFontStyles));
iconFontStyles = `@font-face {
  src: url(${MaterialIcons});
  font-family: MaterialIcons;
}`;
style.appendChild(document.createTextNode(iconFontStyles));
iconFontStyles = `@font-face {
  src: url(${MaterialCommunityIcons});
  font-family: MaterialCommunityIcons;
}`;
style.appendChild(document.createTextNode(iconFontStyles));
iconFontStyles = `@font-face {
  src: url(${Ionicons});
  font-family: Ionicons;
}`;
style.appendChild(document.createTextNode(iconFontStyles));
iconFontStyles = `@font-face {
  src: url(${Feather});
  font-family: Feather;
}`;
style.appendChild(document.createTextNode(iconFontStyles));
iconFontStyles = `@font-face {
  src: url(${EvilIcons});
  font-family: EvilIcons;
}`;
style.appendChild(document.createTextNode(iconFontStyles));
iconFontStyles = `@font-face {
  src: url(${Entypo});
  font-family: Entypo;
}`;
style.appendChild(document.createTextNode(iconFontStyles));
iconFontStyles = `@font-face {
  src: url(${AntDesign});
  font-family: AntDesign;
}`;
style.appendChild(document.createTextNode(iconFontStyles));
iconFontStyles = `@font-face {
  src: url(${Foundation});
  font-family: Foundation;
}`;
style.appendChild(document.createTextNode(iconFontStyles));
iconFontStyles = `@font-face {
  src: url(${FontAwesome});
  font-family: FontAwesome;
}`;
style.appendChild(document.createTextNode(iconFontStyles));

document.head.appendChild(style);

AppRegistry.registerComponent(appInfo.name, () => App);

AppRegistry.runApplication(appInfo.name, {
  rootTag: document.getElementById('root'),
});
