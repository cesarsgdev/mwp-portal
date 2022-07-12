import { ContentContainer } from "../components/styled/ContentContainer.styled";
import SectionTitle from "../components/SectionTitle";
import { useTitle } from "../hooks/useTitle";

const Tasks = () => {
  useTitle();

  return (
    <>
      <ContentContainer>
        <SectionTitle title="Tasks" />
      </ContentContainer>
    </>
  );
};

export default Tasks;
