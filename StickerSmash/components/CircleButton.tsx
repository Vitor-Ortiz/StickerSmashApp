import React from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

type Props = {
  onPress: () => void;
}

export default function CircleButton({ onPress }: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.circleButton,
          pressed && styles.circleButtonPressed,
        ]}
      >
        <MaterialIcons name='add' size={38} color='#25292e' />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: '#5ccfe6',
    padding: 3,
    borderRadius: 42,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: '#fff',
  },
  circleButtonPressed: {
    backgroundColor: '#5ccfe6',
  },
})
