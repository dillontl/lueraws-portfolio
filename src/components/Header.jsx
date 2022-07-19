import {
  Box,
  Flex,
  Heading,
  Container,
  Stack,
  Text,
  Link,
  Icon,
  useColorModeValue,
  Badge,
  Img,
  ChakraProvider,
} from '@chakra-ui/react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaTelegram,
  FaTwitter,
  FaVuejs,
  FaWordpress,
} from 'react-icons/fa'
import { SiGraphql } from 'react-icons/si'
import '../index.css'
import HookForm from './Contact'

export default function Header() {
  return (
    <>
      <Flex>
        <Container maxW="60ch">
          <Stack
            as={Box}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 30, md: '5rem' }}
            direction="column"
          >
            <Box w="36" marginX="auto">
              <Img
                borderRadius="full"
                src="https://i.ibb.co/wYtWnXd/avatar-nobg.png"
              />
            </Box>
            <Box
              display="flex"
              backdropBlur="md"
              borderColor="black"
              background={useColorModeValue('gray.200', 'whiteAlpha.100')}
              paddingX="6"
              paddingY="3"
              borderRadius="lg"
              margin="auto"
              justifyContent="center"
              boxSizing="unset"
            >
              <Heading
                fontWeight={400}
                fontSize={{ base: 20, md: 40 }}
                alignItems="center"
                lineHeight="110%"
                fontFamily="mono"
              >
                Hello, I am Dillon! 
              </Heading>
            </Box>
            <Box alignItems="center">
              <Text
                fontWeight={300}
                fontFamily="mono"
                fontSize={{ md: 'large' }}
                marginX="1"
                boxSizing="content-box"
              >
                <span className="highlighted-word">USAF Veteran</span>,{' '}
                <span className="highlighted-word">full-stack developer</span>,{' '}
                <span className="highlighted-word">
                  <br />
                  blockchain engineer
                </span>{' '}
                and <span className="highlighted-word">code junkie</span>
                <br />
                living in Phoenix, Arizona.
              </Text>
            </Box>
            <Box justifyContent="center">
              <Badge
                as="a"
                variant="outline"
                marginBottom="5"
                fontSize="1.2rem"
              >
                Technologies
              </Badge>
              <Stack
                justify="left"
                direction="row"
                fontSize="3.2rem"
                spacing="6"
              >
                <Link pointerEvents="none" isExternal>
                  <Icon as={FaPython} />
                </Link>
                <Link pointerEvents="none" isExternal>
                  <Icon as={FaWordpress} />
                </Link>
                <Link pointerEvents="none" as="span">
                  <Icon as={FaJs} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaHtml5} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaCss3} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaNodeJs} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={SiGraphql} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaReact} />
                </Link>
              </Stack>
              <Badge
                as="a"
                variant="outline"
                marginBottom="2"
                fontSize="1.2rem"
              >
                Social Media
              </Badge>
              <Stack as={Box} marginY="5" spacing="5" direction="row">
                <Text fontSize="2xl" fontWeight="thin">
                  <Link href="https://github.com/dillontl" isExternal>
                    <Icon as={FiGithub} /> @dillontl
                  </Link>
                </Text>
                <Text fontSize="2xl" fontWeight="thin">
                  <Link
                    href="https://www.linkedin.com/in/dillon-luera-441222194"
                    isExternal
                  >
                    <Icon as={FiLinkedin} /> @dillonluera
                  </Link>
                </Text>
                <Text fontSize="2xl" fontWeight="thin">
                  <Link href="https://t.me/dtluera" isExternal>
                    <Icon as={FaTelegram} /> @dtluera
                  </Link>
                </Text>
                <Text fontSize="2xl" fontWeight="thin">
                  <Link href="https://twitter.com/Dtluera" isExternal>
                    <Icon as={FaTwitter} /> @dtluera
                  </Link>
                </Text>
              </Stack>
              <Badge
                as="a"
                variant="outline"
                marginBottom="2"
                fontSize="1.2rem"
              >
                Contact
              </Badge>
              <Box>
                <HookForm />
              </Box>
            </Box>
          </Stack>
        </Container>
      </Flex>
    </>
  )
}
