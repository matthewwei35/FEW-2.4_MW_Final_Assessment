import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

const Item = ({ title, countryOfOrigin, numberOfFans, yearFormed, data, navigation }) => {

  // const keys = Object.keys(data)

  return (
    <TouchableHighlight
      style={styles.item}
      onPress={() => navigation.navigate('Details', data)}
    >
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text>{countryOfOrigin}</Text>
        <Text>{numberOfFans}</Text>
        <Text>{yearFormed}</Text>
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
    fontSize: 32,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default Item;
