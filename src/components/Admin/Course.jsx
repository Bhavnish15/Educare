import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from './Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModel from './CourseModel';

const courses = [
  {
    id: 'fascscsdvc',
    title: 'React Course',
    category: 'Web Development',
    createdBy: 'Bhavnish Bhardwaj',
    poster: {
      url: 'https://images.indianexpress.com/2023/06/Mars-express-20230601.jpg?w=640',
    },
    views: 123,
    numOfVideos: 34,
  },
];

const Course = () => {
  const courseDetailsHandler = userId => console.log(onOpen());
  const deleteHandler = userId => console.log(userId);
  const deleteLectureHandler = (lectureId, courseId) =>
    console.log(lectureId, courseId); 

  const addLectureHandler = (e,courseId,title,description,video) => {
      e.preventDefault();
  }

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Grid
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['8', '16']} overflowX="auto" m={'30'}>
        <Heading
          textTransform={'uppercase'}
          children="All Users"
          my="16"
          textAlign={['center', 'left']}
        />
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All Available Courses in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Titel</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map(item => (
                <Row
                  key={item.id}
                  courseDetailsHandler={courseDetailsHandler}
                  deleteHandler={deleteHandler}
                  item={item}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <CourseModel
          isOpen={isOpen}
          onClose={onClose}
          deleteHandler={deleteLectureHandler}
          addLectureHandler = {addLectureHandler}
          id={"dvdvasdsdvsvs"}
          courseTitle = 'React Course'
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};

const Row = ({ item, courseDetailsHandler, deleteHandler }) => (
  <Tr>
    <Td>#{item.id}</Td>
    <Td>{<Image src={item.poster.url} />}</Td>
    <Td>{item.title}</Td>
    <Td textTransform={'uppercase'}>{item.category}</Td>
    <Td>{item.createdBy}</Td>
    <Th isNumeric>{item.views}</Th>
    <Th isNumeric>{item.numOfVideos}</Th>

    <Td isNumeric>
      <HStack justifyContent={'flex-end'}>
        <Button
          onClick={() => courseDetailsHandler(item.id)}
          variant="outline"
          color={'purple.500'}
        >
          View Lectures
        </Button>
        <Button onClick={() => deleteHandler(item.id)} color="purple.600">
          <RiDeleteBin7Fill />
        </Button>
      </HStack>
    </Td>
  </Tr>
);

export default Course;
