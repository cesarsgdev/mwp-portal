import { ContentContainer } from "../components/styled/ContentContainer.styled";
import SectionTitle from "../components/SectionTitle";
import { useTitle } from "../hooks/useTitle";

const Support = () => {
  useTitle();
  return (
    <>
      <ContentContainer>
        <SectionTitle title="Support" />
      </ContentContainer>
    </>
  );
};

export default Support;
