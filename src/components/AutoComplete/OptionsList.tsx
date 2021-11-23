import React, { MouseEvent } from 'react';
import './OptionsList.css';
import clsx from 'clsx';

export interface OptionsListProps<Option> {
  showOptions: boolean;
  options: Option[];
  optionKey: keyof Option;
  onClickOption: (e: MouseEvent<HTMLLIElement>) => void;
}

export function OptionsList<Option>({
  showOptions,
  options,
  optionKey,
  onClickOption,
}: OptionsListProps<Option>) {
  return (
    <ul
      data-testid="autoComplete__optionsList"
      className={clsx('autoComplete__optionsList', {
        'autoComplete__optionsList--show': showOptions,
      })}
    >
      {options.map((option, index) => (
        <li
          data-testid="optionsList__item"
          key={`-${index}`}
          className="optionsList__item"
          onClick={onClickOption}
        >
          {option[optionKey]}
        </li>
      ))}
    </ul>
  );
}
