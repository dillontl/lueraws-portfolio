import { Box, Button, useColorMode } from '@chakra-ui/react'
import { BsLightbulbOff, BsLightbulb } from 'react-icons/bs'

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box position="absolute" top="4" right="4">
        <Button
          size="lg"
          onClick={() => {
            alert('Work display page coming soon!')
          }}
        >
          Work
        </Button>
        <Button
          size="lg"
          onClick={() => {
            alert('Blockchain page coming soon!')
          }}
        >
          Blockchain
        </Button>
        <Button size="lg" onClick={toggleColorMode}>
          {colorMode === 'light' ? <BsLightbulb /> : <BsLightbulbOff />}
        </Button>
      </Box>
    </>
  )
}
