import Container from "@/components/container";
import Breadcrumb from "@/components/breadcrumb";
import styled from 'styled-components';
import Sidebar from '@/components/mengenal-kami/sidebar';

const FlexRow = styled.div`
  display: flex;
  margin: 3rem 0;
  margin-top: 2rem;
`;


const Content = styled.div`
  flex: 3.5;
`;


export default function History() {

  return (
    <Container>
      <Breadcrumb
        paths={[
          "Mengenal kami",
          "Sejarah"
        ]}
      />

      <FlexRow>
        <Sidebar/>
        <Content>
          content
        </Content>
      </FlexRow>
    </Container>
  );
}