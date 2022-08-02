import styled from 'styled-components';
import axios from 'axios';
import Container from '@/components/container';
import Breadcrumb from '@/components/breadcrumb';
import Post from '@/components/post';


const Title = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
  padding: 0;
  color: var(--primary);
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


export async function getServerSideProps() {

  // Fetch data from external API

  const resp = await axios.get("/posts");
  const posts = resp.data;

  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  }
}

export default function Index(props) {
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
        <Title>Informasi kegiatan</Title>
        <Subtitle>
          Semua informasi kegiatan Dinas komunikasi informatika dan persandian kota Ambon
        </Subtitle>

        <Posts>
          {props.posts?.data?.map(post =>
            <PostItem key={post.id}>
              <Post data={post} />
            </PostItem>
          )}
        </Posts>
      </Content>
    </Container>
  );
}