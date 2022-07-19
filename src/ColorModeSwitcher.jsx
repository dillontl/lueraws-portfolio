import React from 'react'
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react'
import { BsLightbulbOff, BsLightbulb } from 'react-icons/bs'

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(BsLightbulbOff, BsLightbulb)

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  )
}
