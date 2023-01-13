import {
  Card,
  CardBody,
  CardFooter,
  Box,
  Text,
  Heading,
  Image,
  SimpleGrid,
  Highlight,
} from '@chakra-ui/react';
import { CalendarIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';
import { selectData } from 'redux/data/data-selector';
import { getDateMonth } from 'utils/utilsFunctions';
import { NavLink } from 'react-router-dom';

const ArticlesList = ({ location, query }) => {
  const data = useSelector(selectData);

  const trimedText = text => {
    if (text.length < 100) {
      return text;
    }
    const slicedText = text.slice(0, 100) + ' ...';
    return slicedText;
  };

  return (
    <Box my="12">
      <SimpleGrid minChildWidth="sm" spacing="10">
        {data.map(({ id, title, imageUrl, summary, publishedAt }) => (
          <Card
            key={id}
            maxW="sm"
            transition="box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);"
            _hover={{ boxShadow: 'dark-lg', rounded: 'md' }}
          >
            <NavLink to={`article/${id}`} state={{ from: location }}>
              <CardBody p="0">
                <Image
                  src={imageUrl}
                  alt="Article preview image"
                  fallbackSrc="https://via.placeholder.com/400x250"
                  width="400px"
                  height="217px"
                  objectFit="cover"
                  objectPosition="50% 20%"
                  borderTopRadius="lg"
                />
              </CardBody>
              <Box p="6">
                <Box display="flex" justifyContent="start" alignItems="center">
                  <CalendarIcon />
                  <Text ml="2.5">{getDateMonth(publishedAt)}</Text>
                </Box>
                <Heading size="md" mt="6">
                  <Highlight
                    query={query}
                    styles={{
                      py: '1',
                      px: '0.5',
                      bg: 'yellow.300',
                    }}
                  >
                    {title}
                  </Highlight>
                </Heading>
                <Text mt="5">
                  <Highlight
                    query={query}
                    styles={{
                      py: '1',
                      px: '0.5',
                      bg: 'yellow.300',
                    }}
                  >
                    {trimedText(summary)}
                  </Highlight>
                </Text>
                <CardFooter p="0">
                  <Text mt="5" _hover={{ textDecoration: 'underline' }}>
                    Read more <ArrowForwardIcon mx="2px" />
                  </Text>
                </CardFooter>
              </Box>
            </NavLink>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ArticlesList;
