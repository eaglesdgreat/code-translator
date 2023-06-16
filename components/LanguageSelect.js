import Select from "react-select";
import { languages } from "@/constants/languages";

const LanguageSelect = ({ language, handleLanguageChange, disabled }) => {
  // Define a function called `formatOptionLabel` that returns a React component.
  const formatOptionLabel = ({_, label}) => (
    // Return a React component that displays the `label` value as a 
    // paragraph with a "Select" indicator if the `language` prop matches the `label`.
    <div className="flex flex-row justify-between items-center">
      <p>{label}</p>
      {language === label && <p className="text-xs text-slate-400">Select</p>}
    </div>
  )

  // Return a `Select` component that renders a dropdown menu of language options.
  return (
    <Select
      // Set the class name of the `Select` component to style it with CSS.
      className="w-full rounded-t-lg border-2 border-black"
      // Set the default value of the `Select` component to the `language` prop.
      value={{label: language, value: language}}
      // Call the `handleLanguageChange` function when the user selects an option.
      onChange={handleLanguageChange}
      // Set the `isDisabled` prop to disable the dropdown menu if it's truthy.
      isDisabled={disabled}
      // Set the options of the `Select` component to the `languages` object sorted alphabetically by label using the `localeCompare` method.
      options={languages.sort((a, b) => a.label.localeCompare(b.label))}
      // Set the `formatOptionLabel` prop to use the `formatOptionLabel` function to render each option in the dropdown menu.
      formatOptionLabel={formatOptionLabel}
    > </Select>
  );
}

// Exporting the LanguageSelect component as the default export
export default LanguageSelect;
