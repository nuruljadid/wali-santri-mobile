import React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import {
  Platform,
  StyleSheet,
  SectionList,
  Image,
  Text,
  View
} from 'react-native';

const Constans = {
  nama_lengkap: 'Ach. Saiful Hasan',
  kabupaten: 'Kab. Banyuangi',
  status: 'Wali Santri'
}

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Pengaturan',
    tabBarLabel: 'Pengaturan',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
      />
    ),
  };

  render() {
    const sections = [
      {
        title: 'Data Diri',
        data: [
          { title: 'Passport', value: '-' },
          { title: 'Nomor KK', value: '6471872387182736' },
          { title: 'NIK', value: '6471872234234534' },
          { title: 'Nama Lengkap', value: Constans.nama_lengkap },
          { title: 'Jenis kelamin', value: 'Laki-laki' },
          { title: 'Tempat, Tanggal Lahir', value: 'Gresik, 15 Juni 1996' },
          { title: 'Anak Ke', value: '1 dari 2 Bersaudara' },
          { title: '', value: '' },
          { title: 'Email', value: 'email@example.com' },
          { title: 'Telepon 1', value: '+6212xxxxxx' },
          { title: 'Telepon 2', value: '' },
          { title: 'Pekerjaan', value: 'Wiraswasta' },
          { title: 'Penghasilan', value: '' },
          { title: '', value: '' },
          { title: 'Kecamatan', value: '' },
          { title: 'Kabupaten', value: Constans.kabupaten },
          { title: 'Provinsi', value: 'Jawa Timur' },
          { title: 'Warganegara', value: 'Indonesia' },
        ]
      },
      {
        title: 'Keluarga',
        data: []
      },
    ];

    return (
      <SectionList
        style={styles.container}
        renderItem={this._renderItem}
        renderSectionHeader={this._renderSectionHeader}
        stickySectionHeadersEnabled={true}
        keyExtractor={(item, index) => index}
        ListHeaderComponent={this._renderListHeader}
        sections={sections}
      />
    );
  };

  _renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeaderText}>
          {section.title}
        </Text>
      </View>
    );
  };

  _renderItem = ({ item, index, section }) => {
    return (
      <View style={styles.sectionContentContainer}>
        <View style={{ flex: 1, flexDirection: 'row',
          marginTop: index === 0 ? 8 : 0,
          marginBottom: index+1 === section.data.length ? 8:0 }}>
          <View style={{ width: '30%' }}>
            <Text style={styles.sectionContentText}>{item.title}</Text>
          </View>
          <View>
            <Text>{item.value}</Text>
          </View>
        </View>
      </View>
    );
  };

  _renderListHeader() {
    return (
      <View style={styles.titleContainer}>
        <View style={styles.titleIconContainer}>
          <Image
            source={require('../assets/images/icon.png')}
            style={{ width: 64, height: 64 }}
            resizeMode="contain"
          />
        </View>
  
        <View style={styles.titleTextContainer}>
          <Text style={styles.nameText} numberOfLines={1}>
            {Constans.nama_lengkap}
          </Text>
  
          <Text style={styles.slugText} numberOfLines={1}>
            {Constans.kabupaten}
          </Text>
  
          <Text style={styles.descriptionText}>
            {Constans.status}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  titleIconContainer: {
    marginRight: 15,
    paddingTop: 2,
  },
  sectionHeaderContainer: {
    backgroundColor: '#fbfbfb',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ededed'
  },
  sectionHeaderText: {
    fontSize: 14,
  },
  sectionContentContainer: {
    paddingTop: 6,
    paddingBottom: 8,
    paddingHorizontal: 15,
  },
  sectionContentText: {
    color: '#808080',
    fontSize: 14,
  },
  nameText: {
    fontWeight: '600',
    fontSize: 18,
  },
  slugText: {
    color: '#a39f9f',
    fontSize: 14,
    backgroundColor: 'transparent',
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 6,
    color: '#4d4d4d',
  }
});
