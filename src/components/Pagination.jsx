import { useDispatch, useSelector } from 'react-redux';
import {
  totalCountOfData,
  selectCurrentPage,
  selectPerPage,
} from 'redux/data/data-selector';
import { Box } from '@chakra-ui/react';
import { setCurrentPage } from 'redux/data/data-slice';
import { getPaginationArray } from 'utils/utilsFunctions';

const Pagination = () => {
  const pageTotalCount = useSelector(totalCountOfData);
  const currentPage = useSelector(selectCurrentPage);
  const articlesPerPage = useSelector(selectPerPage);

  const dispatch = useDispatch();

  const pageCount = getPaginationArray(pageTotalCount, articlesPerPage);

  return (
    <Box display="flex" justifyContent="center" mt="6" alignItems="center">
      {pageCount.map(i =>
        i === currentPage && pageCount.length !== 1 ? (
          <Box
            onClick={() => {
              dispatch(setCurrentPage(i - 1));
            }}
            as="button"
            borderRadius="md"
            w="40px"
            h="40px"
            key={i}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgColor="blue.600"
            color="whiteAlpha.900"
          >
            {i}
          </Box>
        ) : (
          <Box
            onClick={() => {
              dispatch(setCurrentPage(i));
            }}
            w="40px"
            h="40px"
            as="button"
            key={i}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {i}
          </Box>
        )
      )}
    </Box>
  );
};

export default Pagination;
