import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAlldata } from 'redux/data/data-operations';
import {
  selectCurrentPage,
  selectPerPage,
  totalCountOfData,
} from 'redux/data/data-selector';
import { useState } from 'react';
import { setCurrentPage } from 'redux/data/data-slice';
import { useCallback } from 'react';
import debounce from 'lodash.debounce';
import { useMemo } from 'react';

const useFetchAllData = () => {
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const limit = useSelector(totalCountOfData);

  useEffect(() => {
    dispatch(
      fetchAlldata({
        perPage,
        currentPage: currentPage - 1,
        limit,
        filter,
      })
    );
    // return () => {
    //   chageFilterHandler.cancel();
    // };
  }, [dispatch, currentPage, perPage, limit, filter]);

  const chageFilterHandler = useCallback(
    evt => {
      dispatch(setCurrentPage(1));
      setFilter(evt.target.value);
    },
    [dispatch]
  );

  return { filter, chageFilterHandler, limit };
};

export default useFetchAllData;
