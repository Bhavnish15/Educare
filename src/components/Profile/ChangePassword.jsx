import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ChangePassword = () => {
    const [oldpassword, setOldPassword] = useState('')
    const [Newpassword, setNewPassword] = useState('')
  return (
    <Container py={'16'} minH={'90vh'}>
      <form>
        <Heading
          children="Change Password"
          textTransform={'upppercase'}
          my={'16'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            value={oldpassword}
            onChange={e => setOldPassword(e.target.value)}
            placeholder="Old password"
            focusBorderColor="yellow.500"
            type="password"
          />

          <Input
            required
            value={Newpassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="New password"
            focusBorderColor="yellow.500"
            type="password"
          />
          <Button w={"full"} colorScheme='yellow' type='submit'>Change</Button> 
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
    