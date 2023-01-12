import {
  Card,
  CardBody,
  CardFooter,
  Box,
  Text,
  Heading,
  Image,
  SimpleGrid,
  Skeleton,
} from '@chakra-ui/react';
import { CalendarIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';
import { selectData, selectIsLoading } from 'redux/data/data-selector';
import { getDateMonth } from 'utils/utilsFunctions';
import { NavLink } from 'react-router-dom';

const ArticlesList = ({ location }) => {
  const data = useSelector(selectData);
  const isLoading = useSelector(selectIsLoading);

  const trimedText = text => {
    if (text.length < 100) {
      return text;
    }
    const slicedText = text.slice(0, 100) + ' ...';
    return slicedText;
  };
  console.log(isLoading);
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
              <Skeleton height="217px" fadeDuration={2} isLoaded={!isLoading}>
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
              </Skeleton>
              <Box p="6">
                <Skeleton height="21px" fadeDuration={2} isLoaded={!isLoading}>
                  <Box
                    display="flex"
                    justifyContent="start"
                    alignItems="center"
                  >
                    <CalendarIcon />
                    <Text ml="2.5">{getDateMonth(publishedAt)}</Text>
                  </Box>
                </Skeleton>
                <Skeleton height="60px" fadeDuration={2} isLoaded={!isLoading}>
                  <Heading size="md" mt="6">
                    {title}
                  </Heading>
                </Skeleton>
                <Skeleton height="100px" fadeDuration={2} isLoaded={!isLoading}>
                  <Text mt="5">{trimedText(summary)}</Text>
                </Skeleton>
                <CardFooter p="0">
                  <Skeleton fadeDuration={2} isLoaded={!isLoading}>
                    <Text mt="5" _hover={{ textDecoration: 'underline' }}>
                      Read more <ArrowForwardIcon mx="2px" />
                    </Text>
                  </Skeleton>
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
