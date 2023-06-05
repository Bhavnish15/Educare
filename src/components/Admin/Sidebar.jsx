import { Button, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';
import {
  RiAddCircleFill,
  RiDashboardFill,
  RiEye2Line,
  RiUser3Fill,
} from 'react-icons/ri';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <VStack
      spacing={'8'}
      p={'16'}
      boxShadow={'-2px 0 10px rgba(193,193,193,1)'}
    >
      <LinksButton
        url={'dashboard'}
        Icon={RiDashboardFill}
        text="Dashboard"
        Active={location.pathname === '/admin/dashboard'}
      />
      <LinksButton
        url={'createcourse'}
        Icon={RiAddCircleFill}
        text="Create Course"
        Active={location.pathname === '/admin/createcourse'}
      />
      <LinksButton
        url={'course'}
        Icon={RiEye2Line}
        text="Courses"
        Active={location.pathname === '/admin/course'}
      />
      <LinksButton
        url={'users'}
        Icon={RiUser3Fill}
        text="Users"
        Active={location.pathname === '/admin/users'}
      />
    </VStack>
  );
};

export default Sidebar;

const LinksButton = ({ url, Icon, text, Active }) => {
  return (
    <Link to={`/admin/${url}`}>
      <Button
        fontSize={'larger'}
        variant="ghost"
        colorScheme={Active ? 'red' : ''}
      >
        <Icon style={{ margin: '4px' }} />
        {text}
      </Button>
    </Link>
  );
};
