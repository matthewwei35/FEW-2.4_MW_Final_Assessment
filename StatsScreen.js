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

function StatsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metal Stats</Text>
      <View style={styles.details}>
        <Text style={styles.label}>Count: </Text>
        <Text>{getTotalBands(DATA)}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.label}>Fans: </Text>
        <Text>{internationalNumberFormat.format(getTotalFanCount(DATA) * 1000)}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.label}>Countries: </Text>
        <Text>{getTotalCountryCount(DATA)}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.label}>Active: </Text>
        <Text>{getTotalActiveBands(DATA)}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.label}>Split: </Text>
        <Text>{getTotalSpilitBands(DATA)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});

export default StatsScreen;
