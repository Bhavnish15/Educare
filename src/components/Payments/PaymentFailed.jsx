import { Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentFailed = () => {
  return (
    <Container h={"90vh"} p={"16"} >
            

            <VStack justifyContent={"center"} h="full" spacing={"40"}>
                <RiErrorWarningFill size={"5rem"} />
            <Heading textTransform={"uppercase"}  my={"8"} textAlign={"center"} children="Payment Failed due to some Reasons" />
                
                <Link to={"/subscribe"}>
                    <Button variant={"link"} >Try Again</Button>
                </Link>
            </VStack>

    </Container>
  )
}

export default PaymentFailed