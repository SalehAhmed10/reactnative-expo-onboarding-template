import { View, Text } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'

export default function index() {
    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ThemedText>index</ThemedText>
        </ThemedView>
    )
}