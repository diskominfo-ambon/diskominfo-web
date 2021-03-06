import styled from 'styled-components';
import Container from '@/components/container';
import Breadcrumb from '@/components/breadcrumb';
import Post from '@/components/post';


const Title = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
  padding: 0;
`;
const Subtitle = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
  padding: 0;
  margin-top: .5rem;
`;
const Content = styled.div`
  margin: 5rem 0;
  margin-top: 2rem;
`;

const Posts = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 4rem;
  list-style: none;
`;
const PostItem = styled.li`
  border-bottom: 1px dashed #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

export default function Index() {
  return (
    <Container>
      <Breadcrumb
        paths={[
          'Beranda',
          'Informasi',
          'Kegiatan'
        ]}
      />
      <Content>
        <center>
          <Title>Informasi kegiatan</Title>
          <Subtitle>
            Semua informasi kegiatan Dinas komunikasi informatika dan persandian kota Ambon
          </Subtitle>
        </center>

        <Posts>
          {[...Array(5)].map(i =>
            <PostItem key={i}>
              <Post />
            </PostItem>
          )}
        </Posts>
      </Content>
    </Container>
  );
}