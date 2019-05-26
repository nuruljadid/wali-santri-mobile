import React from 'react';
import { Icon } from 'expo';
import TabBarIcon from '../components/TabBarIcon';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Beranda',
    header: null,
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios' ? 'ios-home' : 'md-home'
        }
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.titleWrapper}>
            <Text style={styles.titleLabel}>Beranda</Text>
          </View>

          <View style={[styles.card, { backgroundColor: '#FF6400' }]}>
            <View style={{ flexGrow: 0 }}>
              <Text style={styles.cardTitle}>Informasi</Text>
              <Icon.FontAwesome style={styles.cardIcon} name={'newspaper-o'} size={56} color={'#fff'} />
            </View>
            <View style={styles.cardBtnWrapOut}>
              <View style={styles.cardBtnWrapIn}>
                <TouchableOpacity style={styles.cardBtn} onPress={() => { this.goto('informasi') }} >
                  <Text style={styles.cardBtnLabel}>Selengkapnya</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={[styles.card, { backgroundColor: '#00B64F' }]}>
            <View style={{ flexGrow: 0 }}>
              <Text style={styles.cardTitle}>Prestasi</Text>
              <Icon.FontAwesome style={styles.cardIcon} name={'graduation-cap'} size={56} color={'#fff'} />
            </View>
            <View style={styles.cardBtnWrapOut}>
              <View style={styles.cardBtnWrapIn}>
                <TouchableOpacity style={styles.cardBtn} onPress={() => { this.goto('prestasi') }} >
                  <Text style={styles.cardBtnLabel}>Selengkapnya</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={[styles.card, { backgroundColor: '#D8005F' }]}>
            <View style={{ flexGrow: 0 }}>
              <Text style={styles.cardTitle}>Pelanggaran</Text>
              <Icon.Entypo style={styles.cardIcon} name={'open-book'} size={56} color={'#fff'} />
            </View>
            <View style={styles.cardBtnWrapOut}>
              <View style={styles.cardBtnWrapIn}>
                <TouchableOpacity style={styles.cardBtn} onPress={() => { this.goto('pelanggaran') }} >
                  <Text style={styles.cardBtnLabel}>Selengkapnya</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          
        </ScrollView>
      </View>
    );
  }

  goto(to) {
    Alert.alert(
      'Working!',
      to[0].toUpperCase() + to.substr(1) + ' Clicked.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 30,
    paddingHorizontal: 15
  },
  header: {
    zIndex: -1,
    width: '100%',
    height: 150,
    position: 'absolute',
    backgroundColor: 'skyblue'
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    minHeight: 130,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  cardTitle: {
    fontSize: 20,
    paddingTop: 15,
    paddingLeft: 15,
    color: '#fff'
  },
  cardIcon: {
    marginTop: 15,
    marginLeft: 20,
    opacity: .5
  },
  cardBtnWrapOut: {
    flex: 1,
    flexDirection: 'column-reverse',
    padding: 15,
  },
  cardBtnWrapIn: {
    flexDirection: 'row-reverse',
  },
  cardBtn: {
    width: 120,
  },
  cardBtnLabel: {
    backgroundColor: 'yellow',
    textAlign: 'center',
    padding: 8,
    borderRadius: 18
  },
  titleWrapper: {
    width: '100%',
    paddingTop: 10,
    minHeight: 10,
    marginBottom: 20
  },
  titleLabel: {
    fontWeight: 'normal',
    fontSize: 28
  }
});
