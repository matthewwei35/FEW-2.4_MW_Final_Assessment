import { FlatList, View, Text } from 'react-native';
import Item from './Item';
import DATA from './metal.json'

function BandsScreen({ navigation, data }) {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => {
        console.log(item)
        return <Item title={`${item.band_name}`} countryOfOrigin={item.origin} numberOfFans={item.fans} yearFormed={item.formed} />
      }}
      keyExtractor={item => {
        return item.id
      }}
    />
  )
}

export default BandsScreen;
