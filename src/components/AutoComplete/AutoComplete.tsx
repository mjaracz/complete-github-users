import React from 'react';
import { AutoCompleteProps } from './AutoComplete.model';
import { OptionsList } from './OptionsList';
import { useAutoComplete } from './useAutoComplete';
import './AutoComplete.css';

export function AutoComplete<Option>(
  props: AutoCompleteProps<Option, keyof Option>
) {
  const {
    label,
    showOptions,
    options,
    refAutoComplete,
    focusTextField,
    filterOptions,
    onClickOption,
  } = useAutoComplete<Option>(props.options, props.optionKey);

  return (
    <div
      data-testid="autoComplete"
      ref={refAutoComplete}
      className="autoComplete"
    >
      <label
        data-testid="autoComplete__textField"
        onClick={focusTextField}
        className="autoComplete__textField"
      >
        <input onChange={filterOptions} value={label} placeholder=" " />
        <span>provide username</span>
      </label>
      <OptionsList
        options={options}
        optionKey={props.optionKey}
        showOptions={showOptions}
        onClickOption={onClickOption}
      />
    </div>
  );
}
