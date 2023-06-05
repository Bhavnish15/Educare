import {
  Box,
  Grid,
  HStack,
  Heading,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
// import cursorIcon from '../../assets/Image/cursorIcon.png';
import Sidebar from './Sidebar';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';

const Databox = ({ title, qty, qtyPercentage, profit }) => (
  <Box
    w={['full', '20%']}
    boxShadow={'-2px 0 10px rgba(107,270,193,1)'}
    p={'8'}
    borderRadius={'lg'}
  >
    <Text children={title} />
    <HStack spacing={'8'}>
      <Text fontSize={'2xl'} fontWeight={'bold'} children={qty} />

      <HStack>
        <Text children={qtyPercentage + '%'} />
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="red" />
        )}
      </HStack>
    </HStack>
    <Text opacity={0.6} children="Since Last Month" />
  </Box>
);

const Dashboard = () => {
  return (
    <Grid
      minW={'10vh'}
      padding={'15'}
      m={['8', '']}
      // css={{ cursor: `url(${cursorIcon}), default` }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box boxSizing="border-box" py={'16'} px={['4', '0']}>
        <Text
          textAlign={'center'}
          opacity={0.4}
          children={`Last Change was on  ${String(new Date()).split('G')[0]}`}
        />
        <Heading
          children="Dashboard"
          ml={['0', '16']}
          mb={'16'}
          textAlign={['center', 'left']}
        />
        <Stack
          direction={['column', 'row']}
          minH={'24'}
          justifyContent={'space-evenly'}
        >
          <Databox title="Views" qty={123} qtyPercentage={30} profit={true} />
          <Databox title="Users" qty={423} qtyPercentage={90} profit={true} />
          <Databox
            title="Subscription"
            qty={3}
            qtyPercentage={20}
            profit={false}
          />
        </Stack>

        <Grid templateColumns={['1fr', '2fr 1fr']}>
          <Box p={'4'}>
            <Heading
              textAlign={['center', 'left']}
              size={'md'}
              children="Progress Bar"
              my={8}
              ml={['0', '16']}
            />
            <Box>
              <Bar profit={true} title={'Views'} value={30} />
              <Bar profit={true} title={'Users'} value={78} />
              <Bar profit={false} title={'Subscriptions'} value={40} />
            </Box>
          </Box>
        </Grid>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;

const Bar = ({ title, value, profit }) => (
  <Box py="4" px={['0', '20']}>
    <Heading size={'sm'} children={title} mb={'2'} />
    <HStack w={'full'} alignItems={'center'}>
      <Text children={profit ? value + '%' : `-${value}%`} />
      <Progress w={'full'} value={profit ? value : 0} colorScheme="purple" />
      <Text children={`${value > 100 ? value : 100}%`} />
    </HStack>
  </Box>
);
