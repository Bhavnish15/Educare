import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'

const PaymentsSuccess = () => {
  return (
    <Container h={"90vh"} p={"16"} >
            <Heading my={"8"} textAlign={"center"} children="Congrats!! You are now in Pro Pack" />

            <VStack boxShadow={"lg"} pb="16" alignItems={"center"}borderRadius={"lg"}>
                <Box w={"full"} bgColor={"yellow.400"} p={"4"} css={{borderRadius: "8px 8px 0 0"}}>
                <Text children="Payment Success" />
                </Box>
                <Box p={"4"}>
                    <VStack textAlign={"center"} px={"8"} mt={"4"} spacing={"8"}> 
                            <Text children="Congratulations You are a pro member and i appreciate your decision for becoming a premium user." />

                            <Heading size={"4xl"}>
                                <RiCheckboxCircleFill />
                            </Heading>
                    </VStack>
                </Box>
                
                <Link to={"/profile"}>
                    <Button variant="ghost" >Go to your Profile</Button>
                </Link>
                <Heading size={'xs'} children= "Reference: sdjvsknsdcsdjciwjcsdccnvfs" />
            </VStack>

    </Container>
  )
}

export default PaymentsSuccess