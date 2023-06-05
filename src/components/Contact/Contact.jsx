import { Box, Button, Container, FormLabel, Heading, Input,Textarea, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {

    const [email, setEmail] = useState("")
    const [name, setName] = useState('')    
    const [message, setMessage] = useState('')
  return (
    <Container h={"90vh"}>
        <VStack h={"full"} justifyContent={"center"} spacing="16" >
            <Heading children="We Love to hear from you" />

            <form action="" style={{ width: '100%' }}>

            <Box my={'4'}>
            <FormLabel htmlFor="Name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="your name"
              focusBorderColor="yellow.500"
              type="text"
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
              focusBorderColor="yellow.500"
              type="email"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="message" children="Write us a message" />
            <Textarea
              required  
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your Valuable Message...."
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button my={4} colorScheme={'yellow'} type="submit">
            Send Us
          </Button>

          <Box my={4}>
            Request for New Course ?{' '}
            <Link to={"/requestcourses"}>
              <Button colorScheme={'yellow'} variant="link">
                Request
              </Button>{' '}
            </Link>
          </Box>

        </form>


        </VStack>
    </Container>
  )
}

export default Contact