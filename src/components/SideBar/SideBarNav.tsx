import { Stack } from  '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine } from 'react-icons/ri';

import { NavLink } from './NavLink';
import {  NavSection } from './NaviSection';


export function SideBarNav () {
  return (
    <Stack spacing="12" align="flex-start" >
    <NavSection title="Geral"> 
      <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
      <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
    </NavSection>
    <NavSection title="Automação">
      <NavLink icon={RiGitMergeLine} href="/forms">Formulários</NavLink>
      <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>
    </NavSection>
  </Stack>
  )
}