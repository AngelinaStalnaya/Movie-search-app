import classes from "./Dropdown.module.css";
import { MultiSelect } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import {useDisclosure} from '@mantine/hooks';
import { useState } from "react";

const DropdownFilter = ({ label, placeholder, selectName, data, clearFilter  }) => {
  const [dropdownOpened, {toggle}] = useDisclosure();
  const [value, setValue] = useState();
  
  const clearFilterDropdown = () => {
    console.log('dropdown clear')
    setValue([]);
  }

  clearFilter.clearFilterDropdown = clearFilterDropdown;

  return (
    <MultiSelect
      label={label}
      placeholder={value ? null : placeholder}
      data={data}
      classNames={{
        root: classes.dropdownRoot, 
        label: classes.dropdownLabel,
        wrapper: classes.dropdownInputRoot,
        input: classes.dropdownInput,
        options: classes.dropdownOptions,
        option: classes.dropdownOption,
        pillsList: classes.dropdownPillsList,
        pill: classes.dropdownPill,
      }}
      rightSection={dropdownOpened ? <IconChevronUp className={classes.dropdownIcon} /> : <IconChevronDown className={classes.dropdownIcon}/>} 
      aria-label={selectName}
      dropdownOpened={dropdownOpened}
      withCheckIcon={false}
      comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false } }}
      onClick={toggle}
      value={value}
      onChange={setValue}
      />
  );
};

export default DropdownFilter;
