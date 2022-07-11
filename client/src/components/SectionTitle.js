import { AiOutlineCaretRight } from "react-icons/ai";

const SectionTitle = ({ title }) => {
  return (
    <h1>
      {title} <AiOutlineCaretRight />
    </h1>
  );
};

export default SectionTitle;
