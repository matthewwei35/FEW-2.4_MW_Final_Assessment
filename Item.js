import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

const Item = ({ title, countryOfOrigin, numberOfFans, yearFormed, data, navigation }) => {

  // const keys = Object.keys(data)
  internationalNumberFormat = new Intl.NumberFormat('en-US')

  return (
    <TouchableHighlight
      style={styles.item}
      onPress={() => navigation.navigate('Details', data)}
    >
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.origin}>{countryOfOrigin}</Text>
        </View>
        <View style={styles.container}>
          <Text>{internationalNumberFormat.format(numberOfFans * 1000)}</Text>
          <Text>{yearFormed}</Text>
        </View>
      </View>
    </TouchableHighlight>
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
    fontSize: 20,
  },
  origin: {
    fontSize: 20,
    color: '#979797',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default Item;
