import styled from 'styled-components';
import Container from "@/components/container";
import Breadcrumb from "@/components/breadcrumb";
import Sidebar from './sidebar';

const FlexRow = styled.div`
  display: flex;
  margin: 3rem 0;
  margin-top: 2rem;
`;


const Content = styled.div`
  flex: 3.5;
`;


export default function Layout(props) {
  const {breadcrumb, children} = props;

  return (
    <Container>
      <Breadcrumb
        paths={[
          "Mengenal kami",
          breadcrumb
        ]}
      />

      <FlexRow>
        <Sidebar/>
        <Content>
          {children}
        </Content>
      </FlexRow>
    </Container>
  );
}