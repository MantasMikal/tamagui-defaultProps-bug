import React from 'react'
import { Image, Text, YStack } from '@my/ui'

const ContentThumbnail = () => {
  return (
    <YStack width="100%" position="relative" overflow="hidden">
      <Image
        src="https://img.clock.co.uk/1600x900"
        style={{
          aspectRatio: 16 / 9,
        }}
        width="100%"
        height="auto"
        resizeMethod="scale"
        resizeMode="contain"
      />
      <YStack
        width="100%"
        height="100%"
        ai="center"
        jc="center"
        zIndex="$1"
        position="absolute"
      >
        <Text>Play</Text>
      </YStack>
    </YStack>
  )
}

export default ContentThumbnail
