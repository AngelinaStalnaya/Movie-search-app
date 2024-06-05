import { useState } from "react";
import { TextInput } from "@mantine/core";
import classes from "./Inputs.module.css";
import PrimaryBtnS from "../buttons/PrimaryBtnS";
import { IconSearch } from "@tabler/icons-react";

const SearchInput = ({ placeholder }) => {
  const [value, setValue] = useState();
  const searchIcon = <IconSearch style={{widht: '16px', height: '16px', color: 'var(--mantine-color-grey_500-1)'}}/>;

  return (
    <TextInput
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      classNames={{
        wrapper: classes.searchInput,
        input: classes.searchInputField,
        controls: classes.inputNumBtnWrapper,
        control: classes.inputNumBtn,
      }}
      leftSection={searchIcon}
      leftSectionPointerEvents="none"
      rightSection={<PrimaryBtnS>Search</PrimaryBtnS>}
      placeholder={placeholder}
      aria-label="Search input"
    >
    </TextInput>
  );
};

export default SearchInput;
