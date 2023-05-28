import { IconButton } from '@chakra-ui/button';
import {
  Stack,
  Flex,
  Heading,
  Spacer,
  HStack,
  Text,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  return (
    <Stack p={5} bg={'gray.50'} as='header'>
      <Flex w='full' alignItems={'center'}>
        <Heading
          as='h3'
          ml={{ base: 0, sm: 8 }}
          size={isMobile ? 'md' : 'lg'}
          fontWeight={'thin'}
          color='green.500'
          fontFamily="Pacifico"
        >
          ResumeBuild
        </Heading>
        <Spacer />
        {isMobile ? (
          <IconButton
            aria-label='Toggle navigation'
            icon={<FaInstagram />}
            mr={{ base: 0, sm: 8 }}
            variant='ghost'
          />
        ) : (
          <HStack spacing={10} mr={{ base: 0, sm: 8 }} as='nav' fontFamily='Poppins'>
            <Text as='a' href='#' fontSize='lg'>
              Home
            </Text>
            <Text as='a' href='#' fontSize='lg'>
              Templates
            </Text>
            <Text as='a' href='#' fontSize='lg'>
              About
            </Text>
            <Button colorScheme={'green'} fontWeight={'medium'}>
              Contact
            </Button>
          </HStack>
        )}
      </Flex>
    </Stack>
  );
};

export default Navbar;
