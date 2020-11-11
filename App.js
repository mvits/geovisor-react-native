import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  AlertIOS,
  Image,
} from 'react-native';
import MapView, {
  Marker,
  Polygon,
  UrlTile,
  LocalTile,
  FileTile
} from 'react-native-maps-osmdroid';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.1;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const tilePath = "/storage/emulated/0/LocalRaster/";

const coords = [
  {lat: 4.634002499917208, lng: -74.10098075866699},
  {lat: 4.624506373159518, lng: -74.11291122436523},
  {lat: 4.617662238881205, lng: -74.09720420837402},
];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      members: [],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          //ref={ref => {this.map = ref;}}
          initialRegion={{
            latitude: 4.744926,
            longitude: -75.739510,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}>

        <UrlTile
          urlTemplate="https://server.arcgisonline.com/ArcGIS/rest/SERVICES/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          zIndex={2}
        />
        <FileTile
              tileSize={256}
              maximumZ={18}
              minimumZ={14}
              zIndex={5}
              />

        </MapView>
        <View>
          <Text>Hola SICA!!</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {}}
            style={[styles.bubble, styles.button]}>
            <Text>Mapa en SICA</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
    marginRight: 20,
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 0,
    backgroundColor: 'transparent',
    marginBottom: 0,
  },
  members: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 10,
  },
});
