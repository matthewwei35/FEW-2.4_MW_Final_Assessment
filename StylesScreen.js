import { FlatList } from 'react-native';
import StyleItem from './StyleItem';
import DATA from './metal.json'

function StylesScreen() {

  let styles = []

  for (let i = 0; i < DATA.length; i += 1) {
    const band_styles = DATA[i].style.split(',')
    band_styles.forEach(style => {
      if (!styles.includes(style)) styles.push(style)
    })
  }

  return (
    <FlatList
      data={styles}
      renderItem={({ item }) => {
        // console.log(item)
        return <StyleItem style={item} />
      }}
      keyExtractor={item => {
        return item.id
      }}
    />
  )
}

export default StylesScreen;
