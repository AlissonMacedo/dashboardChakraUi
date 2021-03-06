import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

import { ReactQueryDevtools } from 'react-query/devtools';

import { SidebarDrawerProvider } from '../Context/SideBarDrawerContet';
import { makeServer } from '../services/mirage/index';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../services/queryClients';

if(process.env.NODE_ENV === 'development') {
  makeServer();
}



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
