import { Box, Text, Heading, Image, Link } from '@chakra-ui/react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectSingleArticleData } from 'redux/data/data-selector';
import { fetchById } from 'redux/data/data-operations';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

const Article = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { articleId } = useParams();
  const backLink = location.state?.from ?? '/';
  const articleInfo = useSelector(selectSingleArticleData);

  useEffect(() => {
    console.log('Fetch ID');
    dispatch(fetchById(articleId));
  }, [dispatch, articleId]);

  return (
    <Box position="relative">
      <Image
        src={articleInfo.imageUrl}
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
          <Heading
            as="h2"
            mb="9"
            fontSize="2xl"
            lineHeight="3xl"
            fontWeight="normal"
          >
            {articleInfo.title}
          </Heading>
          <Text fontSize="lg" lineHeight="2xl">
            {articleInfo.summary}
          </Text>
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
