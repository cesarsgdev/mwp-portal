import { ContentContainer } from "../components/styled/ContentContainer.styled";
import SectionTitle from "../components/SectionTitle";
import { useTitle } from "../hooks/useTitle";

const Affiliates = () => {
  useTitle();
  return (
    <>
      <ContentContainer>
        <SectionTitle title="Affiliates" />
      </ContentContainer>
    </>
  );
};

export default Affiliates;
