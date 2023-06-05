import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';


const Subscribe = () => {
  return (
    <Container h="90vh" pt={'20'}>
      <Heading
        my={'9'}
        fontWeight={200}
        textAlign={'center'}
        children="You Only need one subscription  ..."
      />

      <VStack
        boxShadow={'lg'}
        alignItems="stretch"
        borderRadius={'lg'}
        spacing="0"
      >
        <Box
          backgroundColor={'yellow.500'}
          p={'4'}
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Text
            children={`Pro Pack   -   ₹299.00`}
            color={'black'}
            textAlign={'center'}
            fontSize={'23'}
            fontFamily={'fantasy'}
          />
        </Box>

        <Box p={'4'}>
          <VStack textAlign={"center"} px="8" mt="4" spacing="8">
            <Heading
            size={"sm"}
              children={"Join pro pack and get access to all the content."}
            />
            <Heading size="md" children={'₹299.00/- Only'} />
          </VStack> 

          <Button my={8} w={"full"} children="Buy Now"  variant={"ghost"} />
        </Box>

        
        <Box  bg={'blackAlpha.700'} p={4} css={{ borderRadius: '0 0 8px 8px' }} >
            <Heading size={"sm"} children="100% Refund after cancellation within 7 days" />
            <Text fontSize={"xs"} children="*Terms and Conditions apply" />

        </Box>

      </VStack>
    </Container>
  );
};

export default Subscribe;
