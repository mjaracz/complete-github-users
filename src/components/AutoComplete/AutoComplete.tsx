import React, { useState } from 'react';
import { AutoCompleteProps } from './AutoComplete.model';
import './AutoComplete.css';

export function AutoComplete<Option>(
  props: AutoCompleteProps<Option, keyof Option>
) {
  const [options, setOptions] = useState<Option[]>(props.options);
  return (
    <div className="autoComplete">
      <label className="autoComplete__textField">
        <input placeholder=" " />
        <span>provide username</span>
      </label>
      <ul className="autoComplete__optionsList">
        {options.map((option, index) => (
          <li key={`-${index}`} className="optionsList__item">
            {option[props.optionKey]}
          </li>
        ))}
      </ul>
    </div>
  );
}
