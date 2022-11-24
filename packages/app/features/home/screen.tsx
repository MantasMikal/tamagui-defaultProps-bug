import { YStack } from '@my/ui'
import ContentThumbnail from 'app/components/ContentThumbnail'
import React from 'react'

export function HomeScreen() {
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <ContentThumbnail />
    </YStack>
  )
}
