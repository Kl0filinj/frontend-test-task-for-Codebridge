import {
  Box,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Divider,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import ArticlesList from '../components/ArticlesList';
import { useEffect } from 'react';
import { fetchAlldata } from 'redux/data/data-operations';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    console.log('Fetch All');
    dispatch(fetchAlldata());
  }, [dispatch]);

  return (
    <Box py="14" maxW="container.xl" mx="auto">
      <Box mb="10">
        <Text>Filter by keywords</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input type="tel" placeholder="phone number" />
        </InputGroup>
      </Box>
      <Box>
        <Text>Results: 999999</Text>
        <Divider />
      </Box>
      <ArticlesList location={location} />
    </Box>
  );
};

export default Home;
