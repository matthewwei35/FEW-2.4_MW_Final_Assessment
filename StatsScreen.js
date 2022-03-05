import { Text, View, StyleSheet } from 'react-native';
import DATA from './metal.json'

internationalNumberFormat = new Intl.NumberFormat('en-US')

const getTotalBands = (data) => {
  return data.length
}

const getTotalFanCount = (data) => {
  return data.reduce((acc, b) => acc + b.fans, 0)
}

const getTotalCountryCount = (data) => {
  const countries = data.map(b => b.origin)
  return new Set(countries).size
}

const getTotalActiveBands = (data) => {
  const active = data.filter(b => b.split === '-')
  return active.length
}

const getTotalSpilitBands = (data) => {
  const split = data.filter(b => b.split !== '-')
  return split.length
}

function StatsScreen({ navigation, route }) {
  return (
    <View>
      <Text>Metal Stats</Text>
      <Text>Count: {getTotalBands(DATA)}</Text>
      <Text>Fans: {internationalNumberFormat.format(getTotalFanCount(DATA) * 1000)}</Text>
      <Text>Countries: {getTotalCountryCount(DATA)}</Text>
      <Text>Active: {getTotalActiveBands(DATA)}</Text>
      <Text>Split: {getTotalSpilitBands(DATA)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  title: {
    fontSize: 32,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

export default StatsScreen;
