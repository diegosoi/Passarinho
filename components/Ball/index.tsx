import { View, Image } from 'react-native'
import { styles } from './styles'

type Props = {
  posY: number,
}

export function Ball({ posY }: Props) {
  return (
    <View style={[styles.container, {bottom: posY}]}>
      <Image style={styles.logo} source={require('../../assets/birdypng-removebg-preview.png')}/>
    </View>
  )
}