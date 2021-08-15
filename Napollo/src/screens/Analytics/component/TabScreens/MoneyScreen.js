import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import LineChart from '../Charts/LineChart';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const Money_Screen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" />
      <View style={styles.content}>
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          colors={['#999', '#222', '#222', '#222']}
          style={styles.graph}>
          <Image
            source={require('../../../../assests/images/verification.png')}
            style={styles.verificationImage}
          />
          <LineChart />
        </LinearGradient>
        <View style={styles.details}>
          {/* Single Details */}
          <View style={styles.singleDetails}>
            <Text style={{color: '#f68128', fontSize: 20, flexWrap: 'wrap'}}>
              Total donations this week
            </Text>
            <Text style={{color: '#eee', fontSize: 20}}>2000</Text>
          </View>
          {/* Single Details */}
          <View style={styles.singleDetails}>
            <Text style={{color: '#f68128', fontSize: 20, flexWrap: 'wrap'}}>
              Total donations this month
            </Text>
            <Text style={{color: '#eee', fontSize: 20}}>1000</Text>
          </View>
          {/* Single Details */}
          <View style={styles.singleDetails}>
            <Text style={{color: '#f68128', fontSize: 20, flexWrap: 'wrap'}}>
              Total donations
            </Text>
            <View>
              <Text style={{color: '#eee', fontSize: 20}}>3000</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.navigate('Contributions')}>
                <Text style={{color: '#f68128', fontSize: 12, marginTop: 5}}>
                  More info
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.details}>
          {/* Single Details */}
          <View style={styles.singleDetails}>
            <Text style={{color: '#f68128', fontSize: 20, flexWrap: 'wrap'}}>
              Total donations this week
            </Text>
            <Text style={{color: '#eee', fontSize: 20}}>2000</Text>
          </View>
          {/* Single Details */}
          <View style={styles.singleDetails}>
            <Text style={{color: '#f68128', fontSize: 20, flexWrap: 'wrap'}}>
              Total donations this month
            </Text>
            <Text style={{color: '#eee', fontSize: 20}}>1000</Text>
          </View>
          {/* Single Details */}
          <View style={styles.singleDetails}>
            <Text style={{color: '#f68128', fontSize: 20, flexWrap: 'wrap'}}>
              Total donations
            </Text>
            <View>
              <Text style={{color: '#eee', fontSize: 20}}>3000</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.navigate('Contributions')}>
                <Text style={{color: '#f68128', fontSize: 12, marginTop: 5}}>
                  More info
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Money_Screen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    width,

    marginTop: 10,
  },
  content: {
    width,
    paddingBottom: 40,
  },
  graph: {
    width: '90%',
    borderRadius: 10,
    height: 250,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 20,
  },
  verificationImage: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    position: 'absolute',
    right: 15,
    top: 5,
  },
  details: {
    width: '90%',
    height: 250,
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#222',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
  },
  singleDetails: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
  },
});
