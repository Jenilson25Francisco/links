import { categories } from '@/utils/category'
import { FlatList } from 'react-native'
import { Category } from '../category'
import { styles } from './styles'

export function Categpries() {
  return (
    <FlatList
      data={categories}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Category name={item.name} icon={item.icon} isSelected={false} />
      )}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  )
}
