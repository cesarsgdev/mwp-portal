import { ContentContainer } from "../components/styled/ContentContainer.styled";
import SectionTitle from "../components/SectionTitle";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = location.pathname.toUpperCase();
  }, []);
  return (
    <>
      <ContentContainer>
        <SectionTitle title="Dashboard" />
      </ContentContainer>
    </>
  );
};

export default Dashboard;
