import React, { MouseEvent } from 'react';
import './OptionsList.css';
import { Loader } from '../Loader';
import clsx from 'clsx';

export interface OptionsListProps<Option> {
  showOptions: boolean;
  options: Option[];
  optionKey: keyof Option;
  onClickOption: (e: MouseEvent<HTMLLIElement>) => void;
  isLoading: boolean;
}

export function OptionsList<Option>({
  showOptions,
  options,
  optionKey,
  onClickOption,
  isLoading,
}: OptionsListProps<Option>) {
  return (
    <ul
      data-testid="autoComplete__optionsList"
      className={clsx('autoComplete__optionsList', {
        'autoComplete__optionsList--show': showOptions,
      })}
    >
      {isLoading || options.length === 0 ? (
        <div className="optionsList__loader--container">
          <Loader />
        </div>
      ) : (
        options.map((option, index) => (
          <li
            data-testid="optionsList__item"
            key={`-${index}`}
            className="optionsList__item"
            onClick={onClickOption}
          >
            {option[optionKey]}
          </li>
        ))
      )}
    </ul>
  );
}
