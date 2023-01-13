import { Box, Text, Heading, Image, Link } from '@chakra-ui/react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectSingleArticleData } from 'redux/data/data-selector';
import { fetchById } from 'redux/data/data-operations';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

const Article = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const { articleId } = useParams();
  const backLink = location.state?.from ?? '/';
  const { imageUrl, title, summary } = useSelector(selectSingleArticleData);

  useEffect(() => {
    dispatch(fetchById(articleId));
  }, [dispatch, articleId]);

  return (
    <Box position="relative">
      <Image
        src={imageUrl}
        alt="Article preview image"
        fallbackSrc="https://via.placeholder.com/1450x250"
        width="100vw"
        height="245px"
        objectFit="cover"
        objectPosition="50% 20%"
      />
      <Box
        maxW="container.xl"
        borderRadius="md"
        mx="auto"
        position="absolute"
        top="36"
        left="0"
        right="0"
        bg="white"
      >
        <Box
          mb="8"
          py="8"
          px="20"
          borderRadius="md"
          textAlign="center"
          border="1px solid #EAEAEA"
          boxShadow="0px, 8px rgba(0, 0, 0, 0.05)"
        >
          {!error ? (
            <>
              <Heading
                as="h2"
                mb="9"
                fontSize="2xl"
                lineHeight="3xl"
                fontWeight="normal"
              >
                {title}
              </Heading>
              <Text fontSize="lg" lineHeight="2xl">
                {summary}
              </Text>
            </>
          ) : (
            <Heading as="h1" textAlign="center">
              Something goes wrong, try reload the page !
            </Heading>
          )}
        </Box>
        <Link
          as={NavLink}
          to={backLink}
          fontStyle="bold"
          fontWeight="bold"
          ml="20"
        >
          Back to homepage <ArrowForwardIcon mx="2px" />
        </Link>
      </Box>
    </Box>
  );
};

export default Article;
