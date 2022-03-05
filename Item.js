import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

const Item = ({ title, countryOfOrigin, numberOfFans, yearFormed, yearSplit, data, navigation }) => {

  // const keys = Object.keys(data)
  internationalNumberFormat = new Intl.NumberFormat('en-US')

  return (
    <TouchableHighlight
      style={styles.item}
      onPress={() => navigation.navigate('Details', data)}
    >
      <View>
        <View style={styles.container}>
          <Text style={[(yearSplit === '-') ? styles.titleNotSplit : styles.titleSplit]}>{title}</Text>
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
  titleNotSplit: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleSplit: {
    color: '#666',
    textDecorationLine: 'line-through',
  },
  origin: {
    fontSize: 18,
    color: '#979797',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default Item;
