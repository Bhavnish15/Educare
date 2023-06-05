import {
  Container,
  FormLabel,
  Heading,
  VStack,
  Input,
  Box,
  Button,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent="center" spacing={'5'}>
        <Box mb={16}>
          <Heading children={'Welcome to Night Watch'} />
          <Text
            mt={5}
            textAlign={'center'}
            size={'sm'}
            children="A well structured and curated Free Content for everyone"
          ></Text>
        </Box>
        <form action="" style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@hotmail.com"
              focusBorderColor="yellow.500"
              type="email"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              focusBorderColor="yellow.500"
              type="password"
            />
          </Box>

          <Box>
            <Link to="/forgetpassword">
              <Button fontSize={'sm'} variant="link">
                Forget Password
              </Button>
            </Link>
          </Box>

          <Button my={4} colorScheme={'yellow'} type="submit">
            Login
          </Button>

          <Box my={4}>
            New User ?{' '}
            <Link to={"/register"}>
              <Button colorScheme={'yellow'} variant="link">
                Sign Up
              </Button>{' '}
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
