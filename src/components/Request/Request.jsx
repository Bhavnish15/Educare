import { Box, Button, Container, FormLabel, Heading, Input,Textarea, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Request = () => {

    const [email, setEmail] = useState("")
    const [name, setName] = useState('')    
    const [course, setCourse] = useState('')
  return (
    <Container h={"90vh"}>
        <VStack h={"full"} justifyContent={"center"} spacing="16" >
            <Heading children="Let us know on what topic your feel curious..." />

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
              id="course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder="write your topic name..."
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button my={4} colorScheme={'yellow'} type="submit">
            Send Us
          </Button>

          <Box my={4}>
            <Link to={"/allcourses"}>
              <Button colorScheme={'yellow'} variant="link">
                See Available Courses!
              </Button>{' '}
            </Link>
          </Box>

        </form>


        </VStack>
    </Container>
  )
}

export default Request