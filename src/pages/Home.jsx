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
  selectIsLoading,
  selectPerPage,
  totalCountOfData,
} from 'redux/data/data-selector';
import { Blocks } from 'react-loader-spinner';
import { useState } from 'react';
import { setCurrentPage } from 'redux/data/data-slice';

const Home = () => {
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();
  const location = useLocation();
  const dataLength = useSelector(totalCountOfData);
  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const limit = useSelector(totalCountOfData);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    console.log('Fetch All');
    console.log(perPage, currentPage);

    dispatch(
      fetchAlldata({
        perPage,
        currentPage: currentPage - 1,
        limit,
        filter,
      })
    );
  }, [dispatch, currentPage, perPage, limit, filter]);

  const chageFilterHandler = evt => {
    dispatch(setCurrentPage(1));
    setFilter(evt.target.value);
  };

  return (
    <Box py="14" maxW="container.xl" mx="auto">
      <Box mb="10">
        <Text>Filter by keywords</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input
            value={filter}
            type="tel"
            placeholder="phone number"
            onChange={chageFilterHandler}
          />
        </InputGroup>
      </Box>
      <Box>
        <Text>Results: {dataLength}</Text>
        <Divider />
      </Box>
      {isLoading ? (
        <Box display="flex" justifyContent="center">
          <Blocks
            visible={true}
            height="150"
            width="150"
            ariaLabel="blocks-loading"
            wrapperClass="blocks-wrapper"
          />
        </Box>
      ) : (
        <ArticlesList location={location} />
      )}

      <Pagination />
    </Box>
  );
};

export default Home;