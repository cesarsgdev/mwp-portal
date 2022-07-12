import { ContentContainer } from "../components/styled/ContentContainer.styled";
import SectionTitle from "../components/SectionTitle";
import { useTitle } from "../hooks/useTitle";

const Documentation = () => {
  useTitle();
  return (
    <>
      <ContentContainer>
        <SectionTitle title="Documentation" />
      </ContentContainer>
    </>
  );
};

export default Documentation;
