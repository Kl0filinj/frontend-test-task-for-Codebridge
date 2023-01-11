import {
  Box,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Divider,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import ArticlesList from '../components/ArticlesList';

const Home = () => {
  return (
    <Box px="16" py="14" maxW="container.xl" mx="auto">
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
      <ArticlesList />
    </Box>
  );
};

export default Home;
