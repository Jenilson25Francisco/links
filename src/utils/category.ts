import type { MaterialIcons } from '@expo/vector-icons'

type Category = {
  id: string
  name: string
  icon: keyof typeof MaterialIcons.glyphMap
}

export const categories: Category[] = [
  { id: '1', name: 'Curso', icon: 'code' },
  { id: '2', name: 'Projeto', icon: 'folder' },
  { id: '3', name: 'site', icon: 'language' },
  { id: '4', name: 'Video', icon: 'movie' },
  { id: '5', name: 'Documentaçao', icon: 'content-paste' },
]
