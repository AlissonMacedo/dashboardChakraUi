import { useState } from 'react';
import { Flex, Input, Icon } from '@chakra-ui/react';
import { RiSearch2Line } from 'react-icons/ri'
import { useRef } from 'react';

export function Search () {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [search, setSearch] = useState();
  return (
    <Flex
    as="label"
    flex="1"
    py="4"
    px="4"
    ml="6"
    maxWidth={400}
    alignSelf="center"
    color="gray.200"
    position="relative"
    bg="gray.800"
    borderRadius="full"
    >
      <Input 
      color="grey.50"
      variant="unstyled"
      px="4"
      mr="4"
      placeholder="Buscar na platatorma"
      _placeholder={{ color: 'grey.400' }}
      value={search}
      onChange={event => setSearch(event.target.value)}
      ref={searchInputRef}
      />
      <Icon as={RiSearch2Line} fontSize={20} />
    </Flex>
  )
}