import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && 
          <Box mr="4" textAlign="right">
          <Text >Alisson Macedo</Text>
          <Text color="gray.300" fontSize="small">alissontecnico@gmail.com</Text>
        </Box>
      }
      <Avatar size="md" name="Alisson Macedo" src="https://github.com/AlissonMacedo.png" />
    </Flex>
  )
}