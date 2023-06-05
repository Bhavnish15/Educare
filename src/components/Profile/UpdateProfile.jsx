import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const UpdateProfile = () => {
    const [Name, setName] = useState('')
    const [NewEmail, setNewEmail] = useState('')
  return (
    <Container py={'16'} minH={'90vh'}>
      <form>
        <Heading
          children="Update Profile"
          textTransform={'upppercase'}
          my={'16'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>

        <Input
            value={Name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            focusBorderColor="yellow.500"
            type="name"
          />


        <Input
            value={NewEmail}
            onChange={e => setNewEmail(e.target.value)}
            placeholder="New email"
            focusBorderColor="yellow.500"
            type="email"
          />

          <Button w={"full"} colorScheme='yellow' type='submit'>Change</Button> 
        </VStack>
      </form>
    </Container>
  )
}

export default UpdateProfile