import React from 'react';
import ColorModeSwitcher from '../../../src/ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import {
  RiDashboardFill,
  RiLogoutBoxLine,
  RiMenu5Fill,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import '../home/Home.css';

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link to={url} onClick={onClose}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);
const isAuthenticated = true;
const user = { role: 'admin' };





const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const LogoutHandler = () => {
    console.log('Logout');
    onClose()
  };

  return (
    <>
      <ColorModeSwitcher position={'fixed'} right="5" top="4" />
      <Button
        colorScheme="yellow"
        width={'12'}
        zIndex={'overlay'}
        height={'12'}
        rounded="full"
        position={'fixed'}
        top="6"
        left="5"
        onClick={onOpen}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(1px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>Contents</DrawerHeader>
          <DrawerBody>
            <VStack spacing="4" alignItems={'flex-start'}>
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton onClose={onClose} url="/allcourses" title="All Courses" />
              <LinkButton onClose={onClose} url="/requestcourses" title="Request Courses" />
              <LinkButton onClose={onClose} url="/roadmaps" title="Roadmaps" />
              <LinkButton onClose={onClose} url="/aboutus" title="About Us" />
              <LinkButton onClose={onClose} url="/contact" title="Contact" />

              <HStack
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to={'/profile'}>
                          <Button colorScheme={'yellow'}>Profile</Button>
                        </Link>
                        <Button onClick={LogoutHandler}>
                          {' '}
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>

                      {user && user.role === 'admin' && (
                        <Link to={'/admin/dashboard'} onClick={onClose} >
                          <Button
                            colorScheme={'purple'}
                            variant={'ghost'}
                            marginTop={'1rem'}
                          >
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to={'/login'} onClick={onClose} >
                      <Button colorScheme={'yellow'}>Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link to={'/register'}onClick={onClose} >
                      <Button colorScheme={'yellow'}>Register</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
