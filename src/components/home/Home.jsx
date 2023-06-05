import React from 'react';
import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import './Home.css';
import vg from '../../assets/Image/student.png';
import { Link } from 'react-router-dom';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy, SiUdacity } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import highway from '../../assets/Videos/highway.mp4';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          className="firstStack"
          direction={['column', 'row']}
          height="100%"
          justify-content={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing={'8'}
          >
            <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} />
            <Text
              fontSize={'2xl'}
              textAlign={['center', 'left']}
              children="Find Valueable content at Reasonable Price"
            />
            <Link to="/allcourses">
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image
            className="vector-graphics"
            box-size={'md'}
            src={vg}
            style={{ height: '600px' }}
            objectFit={'contain'}
            alignSelf={['center', 'bottom']}
          />
        </Stack>
      </div>

      <Box padding={'8'} bg={'black'}>
        <Heading
          textAlign={'center'}
          children="OUR BRANDS"
          color={'yellow.400'}
        ></Heading>
        <HStack
          color={'white'}
          className="BrandBanner"
          justifyContent={'space-evenly'}
          margin={'10'}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdacity />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <div className="container-2">
        <video
          src={highway}
          autoPlay
          controls={false}
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
      </div>
    </section>
  );
};

export default Home;
