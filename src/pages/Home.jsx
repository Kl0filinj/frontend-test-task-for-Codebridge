import {
  Box,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Divider,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import ArticlesList from '../components/ArticlesList';
import Pagination from 'components/Pagination';
import { useEffect } from 'react';
import { fetchAlldata } from 'redux/data/data-operations';
import { useLocation } from 'react-router-dom';
import {
  selectCurrentPage,
  selectPerPage,
  totalCountOfData,
} from 'redux/data/data-selector';

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const dataLength = useSelector(totalCountOfData);
  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const limit = useSelector(totalCountOfData);

  useEffect(() => {
    console.log('Fetch All');
    console.log(perPage, currentPage);

    dispatch(fetchAlldata({ perPage, currentPage: currentPage - 1, limit }));
  }, [dispatch, currentPage, perPage, limit]);

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
        <Text>Results: {dataLength}</Text>
        <Divider />
      </Box>
      <ArticlesList location={location} />
      <Pagination />
    </Box>
  );
};

export default Home;
