import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/home/Home.css';

export const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler = { addToPlaylistHandler },
  Creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={"https://images.unsplash.com/photo-1684855410635-4291b79a5623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"} boxSize={'60'} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
        size={'sm'}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform="uppercase"
          children={'Creator'}
        />
        <Text
          fontFamily={'body'}
          textTransform={'uppercase'}
          children={Creator}
        />
      </HStack>

      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures= ${lectureCount}`}
        textTransform={'uppercase'}
      />
      <Heading
        size="xs"
        children={`Views= ${views}`}
        textTransform={'uppercase'}
      />

      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`course/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const addToPlaylistHandler = () => {
    console.log('Added to Playlist');
  };
  const categories = [
    'Web Development',
    'BlockChain',
    'App Developement',
    'DevOps',
    'Machine Learning',
    'Data Science',
    'Full Stack Developent',
    'Data Structures and Algorithms',
  ];

  return (
    <Container minH={'98vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />
      <Input
        placeholder="search a course"
        type="text"
        focusBorderColor="yellow.500"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />

      <HStack
        overflowX={'auto'}
        paddingY={'8'}
        css={{ '&::-webkit-scrollbar': { display: 'none' } }}
      >
        {categories.map((item, index) => (
          <Button key={index} minW={'60'} onClick={() => setCategory(item)}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          views={2}
          title="Sample"
          imageSrc={''}
          id={"sampleLink"}
          addToPlaylistHandler={addToPlaylistHandler}
          Creator="Bhanvish"
          description="is this your"
          lectureCount={5}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
