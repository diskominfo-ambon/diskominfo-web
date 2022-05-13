import styled from 'styled-components';
import Container from './container';
import Image from 'next/image';

const LinearGradient = styled.div`
  background: linear-gradient(120deg, #0664A6 60%, var(--primary) 10%);
`;
const ContainerFlexRow = styled(Container)`
  display: flex;
  position: relative;
  align-items: center;
  justify-conten: center;
  width: 68.75rem;
`;

const Author = styled(Image)`
`;
const Content = styled.div`

`;
const Blockqoute = styled.blockquote`
  color: white;
  font-size: 1.2rem;
  line-height: 33px;
  position: relative;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 400;

  &::before {
    content: '"';
    display: inline-block;
    font-size: 2.5rem;
    position: absolute;
    left: -20px;
  }
`;
const AuthorName = styled.span`
  color: white;
  font-size: .8rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  position: relative;
  left: 40px;
  font-weight: 300;
`;

export default function BlockqouteNotice() {
  return (
    <LinearGradient>
      <ContainerFlexRow>
        <Author src="/static/img/diskominfo-dinas.png" layout="fixed" height="290" width="550" />
        <Content>
          <Blockqoute>
            Dengan ini, kami menyatakan sanggup menyelenggarakan pelayanan sesuai standar pelayanan yang telah ditetapkan dan apabila tidak menepati janji ini, kami siap menerima sanksi sesuai peraturan perundangan-undangan yang berlaku.
          </Blockqoute>
          <AuthorName>
            DRS. J. R. ADRIAANSZ, M.Si - KEPALA DINAS KOMUNIKASI INFORMATIKA & PERSANDIAN KOTA AMBON
          </AuthorName>
        </Content>
      </ContainerFlexRow>
    </LinearGradient>
  );
}