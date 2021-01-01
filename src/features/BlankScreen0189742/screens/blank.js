import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <ImageBackground style={styles.ImageBackground_1}>
      <Image
        resizeMode="center"
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/VIN-Check-Logo.png"
        }}
        style={styles.Image_3}
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  ImageBackground_1: {
    alignSelf: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "center",
    backgroundSize: "contain"
  },
  Image_3: { width: 250, height: 100, alignSelf: "flex-start" }
})
