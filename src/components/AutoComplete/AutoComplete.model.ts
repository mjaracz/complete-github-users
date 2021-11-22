export interface AutoCompleteProps<Option, Key extends keyof Option> {
  options: Option[];
  optionKey: Key;
}
