import { Text, View, StyleSheet } from 'react-native';

function StatsScreen({ navigation, route }) {
  return (
    <View>
      <Text>Stats</Text>
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
