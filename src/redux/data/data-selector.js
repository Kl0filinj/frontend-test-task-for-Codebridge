import { createSelector } from '@reduxjs/toolkit';

export const selectData = state => state.data.data;

export const selectIsLoading = state => state.data.isLoading;

export const selectSingleArticleData = state => state.data.singleArticle;

export const selectCurrentPage = state => state.data.currentPage;
export const selectPerPage = state => state.data.perPage;

export const totalCountOfData = state => state.data.totalCountOfRequest;

export const getPaginationArray = createSelector(
  [totalCountOfData, selectPerPage],
  (totalCount, perPage) =>
    totalCount <= perPage
      ? [1]
      : Array.from({ length: totalCount / perPage }, (_, i) => i + 1)
);
