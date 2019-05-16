import React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';

export default class SantriScreen extends React.Component {
  static navigationOptions = {
    title: 'Santri',
    tabBarLabel: 'Santri',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'}
      />
    ),
  };

  state = {
    santri: [
      {
        nama_lengkap: 'Muhammad Farhan Fauzi',
        lembaga_formal: 'MTs Nurul Jadid, VII Reguler'
      },
      {
        nama_lengkap: 'Ilham Purnomo',
        lembaga_formal: 'SMA Nurul Jadid, XI Bahasa Reguler'
      },
      {
        nama_lengkap: 'Winda Aulia',
        lembaga_formal: 'SMP Nurul Jadid, IX Reguler'
      }
    ]
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {/* <Text style={styles.optionsTitleText}>
          Data Santri
        </Text> */}

        {this._renderCards()}
      </ScrollView>
    );
  }

  _renderCards() {
    return this.state.santri.map((santri, i) => {
      return (
        <View style={styles.card} key={'santri-' + i}>
          <View>
            <View style={styles.profileWrapper}>
              <Image style={styles.profile} source={require('../assets/images/guest.jpg')}/>
            </View>
          </View>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 24, marginBottom: 5 }}>{santri.nama_lengkap}</Text>
            <Text style={{ color: '#888' }}>{santri.lembaga_formal}</Text>
          </View>
        </View>
      );
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 15,
    paddingHorizontal: 15
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#fff',
    width: '100%',
    minHeight: 80,
    borderRadius: 4,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.23,
    shadowRadius: 0,
    elevation: 2,
  },
  profileWrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  profile: {
    borderRadius: 60 / 2,
    width: 60,
    height: 60
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  }
});
