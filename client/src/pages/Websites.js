import { ContentContainer } from "../components/styled/ContentContainer.styled";
import SectionTitle from "../components/SectionTitle";
import { useTitle } from "../hooks/useTitle";

const Websites = () => {
  useTitle();

  return (
    <>
      <ContentContainer>
        <SectionTitle title="Websites" />
      </ContentContainer>
    </>
  );
};

export default Websites;
