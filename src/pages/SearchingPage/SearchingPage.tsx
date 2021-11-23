import React from 'react';
import { AutoComplete } from '../../components/AutoComplete';
import { Loader } from '../../components/Loader';
import { useSearchingPage } from './useSearchingPage';
import './SearchingPage.css';

export const SearchingPage = () => {
  const { options, isLoading } = useSearchingPage();

  return (
    <div
      data-testid="searchingPage--container"
      className="searchingPage--container"
    >
      {isLoading ? (
        <Loader />
      ) : (
        <AutoComplete
          data-testid="searchingPage__autoComplete"
          options={options}
          optionKey="login"
        />
      )}
    </div>
  );
};
