import React from 'react';
import { AutoComplete } from '../../components/AutoComplete';
import './SearchingPage.css';

export interface Option {
  user: string;
  repo: string;
}

export const SearchingPage = () => {
  const options: Option[] = [
    { user: 'mjaracz', repo: 'example' },
    { user: 'mjaracz', repo: 'example' },
  ];
  return (
    <div className="searchingPage--container">
      <AutoComplete options={options} optionKey="user" />
    </div>
  );
};
