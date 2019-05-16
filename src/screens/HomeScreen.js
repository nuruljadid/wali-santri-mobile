import React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
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

          <View style={styles.card}>

          </View>
          <View style={styles.card}></View>
          
        </ScrollView>
      </View>
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
