import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react';


import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

import { Header } from '../components/Header';
import { SideBar } from '../components/SideBar';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enable: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T00:00:00.000z',
      '2021-03-19T00:00:00.000z',
      '2021-03-20T00:00:00.000z',
      '2021-03-21T00:00:00.000z',
      '2021-03-22T00:00:00.000z',
      '2021-03-23T00:00:00.000z',
      '2021-03-24T00:00:00.000z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark', 
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
};

const series = [
  {
    name: 'series1', data: [31, 120, 10, 28, 61, 18, 109]
  }
];

const series2 = [
  {
    name: 'series1', data: [16, 13, 18, 15, 21, 14, 24]
  }
];


export default function Dashboard() {
  const [data, setData] = useState('')
  const [data2, setData2] = useState('')

  // async function loading() {
  //   setData(new Date());

  //   await fetch('https://api.github.com/orgs/ORG/projects').then(reponse => setData2(new Date()));

  //   console.log('data', data);
  //   console.log('data2', data2);
  // }


  // useEffect(() => {
  //   loading();
  //   let interval = setInterval(() => {
  //     console.log('teste');
  //   }, 1000);
  //   return () => clearInterval(interval);
  }, []);


  return (
   <Flex direction="column" h="100vh">
     <Header />
     <Flex
     w="100%"
     my="6"
     maxWidth={1480}
     mx="auto"
     px="6"
     
     >
       <SideBar />
       <SimpleGrid flex="1" gap="4" minChildWidth="320px">
         <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4">
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}>
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
            <Chart options={options} series={series2} type="area" height={160} />
          </Box>
       </SimpleGrid>
     </Flex>
   </Flex>
  )
}