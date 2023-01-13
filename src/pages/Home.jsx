import {
  Box,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Divider,
  Heading,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import ArticlesList from '../components/ArticlesList';
import Pagination from 'components/Pagination';
import { useLocation } from 'react-router-dom';
import { selectError, selectIsLoading } from 'redux/data/data-selector';
import { Blocks } from 'react-loader-spinner';
import useFetchAllData from 'hooks/useFetchAllData';
import { useSelector } from 'react-redux';

const Home = () => {
  const location = useLocation();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const { filter, chageFilterHandler, limit } = useFetchAllData();
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
            placeholder="Enter your query..."
            onChange={chageFilterHandler}
          />
        </InputGroup>
      </Box>
      <Box>
        <Text>Results: {limit}</Text>
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
        <>
          {!error ? (
            <ArticlesList location={location} query={filter} />
          ) : (
            <Heading as="h1" textAlign="center">
              Something goes wrong, try reload the page !
            </Heading>
          )}
        </>
      )}

      <Pagination />
    </Box>
  );
};

export default Home;
