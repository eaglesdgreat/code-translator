// Importing the necessary components from their respective files
import CodeEditor from "./CodeEditor";
import LanguageSelect from "./LanguageSelect";

// Defining the CodeWindow component and passing in props
const CodeWindow = ({code, setCode, loading, handleLanguageChange, language}) => {
  // The component returns a JSX element which contains two nested components
  return (
    <div className="mx-20 my-5 w-2/5 ">
      <LanguageSelect handleLanguageChange={handleLanguageChange} language={language} disabled={loading} />
      <CodeEditor code={code} setCode={setCode} editable={!loading} />
    </div>
  );
}

// Exporting the CodeWindow component as the default export
export default CodeWindow;
