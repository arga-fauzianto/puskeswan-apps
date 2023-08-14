import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import Other from './Other';
import IsMe from './Isme';

const ChatItem = ({ isMe }) => {
  if (isMe) {
    return <IsMe />
  }

  return <Other />
 
};

export default ChatItem;