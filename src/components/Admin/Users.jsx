import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from './Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const users = [
  {
    id: 'fascscsdvc',
    name: 'Bhavnish Bhardwaj',
    email: 'badal.bhavnish@gmail.com',
    role: 'Full Stack Developer',
    subscription: {
      status: 'active',
    },
  },
];

const updateHandler = userId => console.log(userId);
const deleteHandler = userId => console.log(userId);

const Users = () => {
  return (
    <Grid
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['5', '16']} overflowX="auto" m={"30"}>
        <Heading

          textTransform={'uppercase'}
          children="All Users"
          my="16"
          textAlign={['center', 'left']}
        />
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All Available Users in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscriptions</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map(item => (
                <Row
                  key={item.id}
                  updateHandler={updateHandler}
                  deleteHandler={deleteHandler}
                  item={item}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Users;

const Row = ({ item, updateHandler, deleteHandler }) => (
  <Tr>
    <Td>#{item.id}</Td>
    <Td>{item.name}</Td>
    <Td>{item.email}</Td>
    <Td>{item.role}</Td>
    <Td>{item.subscription.status === 'active' ? 'Active' : 'Not Active'}</Td>
    <Td isNumeric>
      <HStack justifyContent={'flex-end'}>
        <Button
          onClick={() => updateHandler(item.id)}
          variant="outline"
          color={'purple.500'}
        >
          Change Role
        </Button>
        <Button onClick={() => deleteHandler(item.id)} color="purple.600">
          <RiDeleteBin7Fill />
        </Button>
      </HStack>
    </Td>
  </Tr>
);
