import {
  Avatar,
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const fileUploadCss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  backgroundColor: 'white',
  color: '#111',
  width: '110%',
  border: 'none',
  height: '100%',
};
const fileUploadButtonStyle = {
  '&::file-selector-button': fileUploadCss,
};

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [imageprev, setImagePrev] = useState('');
  const [image, setImage] = useState('')

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file)
    };
  };

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent="center" spacing={'5'}>
        <Box>
          <Heading textAlign={'center'} children={'Welcome To Night Watch'} />
          <Text
            mt={1}
            textAlign={'center'}
            size={'sm'}
            children="A well structured and curated Free Content for everyone"
          ></Text>
        </Box>

        <form style={{ width: '100%' }}>
          <Box my={4} justifyContent="center" display={'flex'}>
            <Avatar src={imageprev} size={'xl'} />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your name"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@hotmail.com"
              type="email"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              type="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
              focusBorderColor="yellow.500"
              placeholder="Enter your password"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="chooseavatar" children="Choose Avatar" />
            <Input
              accept="image/*"
              required
              id="choseavatar"
              type={'file'}
              focusBorderColor="yellow.500"
              css={fileUploadButtonStyle}
              onChange={changeImageHandler}
            />
          </Box>

          <Box display={'flex'} justifyContent={'center'}>
            <Button
              fontSize={20}
              fontWeight={400}
              my={4}
              colorScheme={'yellow'}
              type="submit"
            >
              Register
            </Button>
          </Box>

          <Box textAlign={'center'}>
            Already Registered ? Login{' '}
            <Link to={"/login"} >
              <Button colorScheme={'yellow'} variant="link">
                here
              </Button>
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
