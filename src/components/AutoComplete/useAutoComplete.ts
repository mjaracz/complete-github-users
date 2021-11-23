import {
  createRef,
  useCallback,
  useEffect,
  useState,
  MouseEvent,
  ChangeEvent,
} from 'react';
import { usersApi } from '../../api/users.api';

export const useAutoComplete = <Option>(
  propsOptions: Option[],
  optionKey: keyof Option
) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [options, setOptions] = useState<Option[]>(propsOptions);
  const [label, setLabel] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>();
  const refAutoComplete = createRef<HTMLDivElement>();

  const hiddenOptionsList = useCallback(
    (e) => {
      const allowToHide =
        refAutoComplete && !refAutoComplete.current?.contains(e.currentTarget);
      if (allowToHide) {
        setShowOptions(false);
      }
    },
    [refAutoComplete]
  );

  useEffect(() => {
    const { fetchUserByName } = usersApi();

    async function getAsyncUserByName() {
      setIsLoading(true);
      const users = await fetchUserByName(label);
      if (users.length > 0) setOptions(users);
      setIsLoading(false);
    }

    if (label.length >= 3) getAsyncUserByName();
  }, [label]);

  useEffect(() => {
    document.addEventListener('mousedown', hiddenOptionsList);
    return function cleanup() {
      document.removeEventListener('mousedown', hiddenOptionsList);
    };
  }, [hiddenOptionsList]);

  const focusTextField = () => {
    setShowOptions(true);
  };
  const filterOptions = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.currentTarget.value);
    setOptions(
      propsOptions.filter((option) =>
        `${option[optionKey]}`.includes(e.currentTarget.value)
      )
    );
  };
  const onClickOption = (e: MouseEvent<HTMLLIElement>) => {
    setLabel(e.currentTarget.innerText);
  };

  return {
    label,
    showOptions,
    isLoading,
    options,
    refAutoComplete,
    focusTextField,
    filterOptions,
    onClickOption,
  };
};
