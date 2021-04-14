
import { Box, Stack, Text, Link, Icon, useBreakpointValue, Drawer, DrawerContent, DrawerCloseButton, DrawerBody, DrawerHeader, DrawerOverlay  } from '@chakra-ui/react';

import { RiContactsLine, RiDashboardLine, RiGitMergeLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../Context/SideBarDrawerContet';


import { SideBarNav } from './SideBarNav';

export function SideBar() {
  const { isOpen, onClose } = useSidebarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if(isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="gray.800" p="4">
          <DrawerCloseButton mt="6" />
          <DrawerHeader>Navegação</DrawerHeader>

          <DrawerBody>
            <SideBarNav />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
    )
  }

  return(
    <Box as="aside" w="64" mr="8">
      <SideBarNav />
    </Box>
  )
}