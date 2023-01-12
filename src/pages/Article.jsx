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
        fallbackSrc="https://via.placeholder.com/150"
        width="100vw"
        height="245px"
        objectFit="cover"
        objectPosition="50% 20%"
      />
      <Box
        py="8"
        px="20"
        maxW="container.xl"
        mx="auto"
        borderRadius="lg"
        position="absolute"
        top="36"
        left="0"
        right="0"
        bg="white"
        border="1px"
      >
        <Box textAlign="center" border="1px">
          <Heading mb="9">{articleInfo.title}</Heading>
          <Text>{articleInfo.summary}</Text>
        </Box>
        <Link as={NavLink} to={backLink} mt="5">
          Back to homepage <ArrowForwardIcon mx="2px" />
        </Link>
      </Box>
    </Box>
  );
};

export default Article;
