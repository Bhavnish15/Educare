import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import highway from '../../assets/Videos/highway.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';

const Founder = () => {
  return (
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
      <VStack>
        <Avatar
          src="https://media.licdn.com/dms/image/D5603AQFVmFDgaFNZlg/profile-displayphoto-shrink_800_800/0/1670415849791?e=2147483647&v=beta&t=ah7gVka8fSHYOQP8EX1Pm_d9bz9zPzdzVTtUz6dGpec"
          boxSize={['40', '48']}
        />
        <Text children="Co-Founder" opacity={0.7} />
      </VStack>

      <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
        <Heading children="Bhavnish Bhardwaj" size={['md', 'xl']} />
        <Text
          children={`Hi I am a Full Stack Developer. My Mission is to provide Free Content or at reasonable price.`}
        />
      </VStack>
    </Stack>
  );
};

const VideoPlayer = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <video
        muted
        loop
        src={highway}
        autoPlay
        controls={false}
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
      ></video>
    </Box>
  );
};

const AboutUs = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={"center"} mb={"10"}  />
      <Founder />

      <Stack m={"8"} direction={['column', 'row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} mt="8" mb={"16"} textAlign={['left', 'left']}>
          This a platform for every user who wants to learn and grow in there
          fields and we help them through our video courses relavent information
          and also with some useful links. We encourage the people to learn new
          things coz learning should never stops.
        </Text>

        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>

      <VideoPlayer />

    <HStack p={"4"} my={"4"}>
        <RiSecurePaymentFill/>
        <Heading size={"xs"} textTransform={"uppercase"} fontFamily={"sans-serif"} children="Payment is secured by Razorpay" />
    </HStack>

    </Container>
  );
};

export default AboutUs;
