import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import { useState } from 'react';
import React from 'react';


const ForgetPassword = () => {

    const [email, setEmail] = useState('')

  return (
   <Container py={"16"} h={"90vh"}>
    <form action="">
        <Heading children="Forget Password" my="16" textTransform={"uppercase"} textAlign={["center", "left"]} />
        <VStack spacing={"10"}>
        <Input
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@hotmail.com"
              type="email"
              focusBorderColor="yellow.500"
            />

            <Button type='submit' w={'full'} colorScheme='yellow'>Send Reset Link</Button> 
        </VStack>
    </form>
   </Container>
  )
}

export default ForgetPassword