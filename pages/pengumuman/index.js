import axios from 'axios';
import styled from 'styled-components';
import Container from '@/components/container';
import Breadcrumb from '@/components/breadcrumb';
import Announcement from '@/components/announcement';


const Title = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
  color: var(--primary);
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
  margin-top: 3rem;
`;


const Announcements = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 3rem;
  list-style: none;
`;

const AnnouncementItem = styled.li``;



export async function getServerSideProps() {

  // Fetch data from external API
  const resp = await axios.get("/announcements");
  const announcements = resp.data;


  return {
    props: {
      announcements
    }, // will be passed to the page component as props
  }
}

export default function Index(props) {
  console.log({props});
  return (
    <Container>
      <Breadcrumb
        paths={[
          'Beranda',
          'Pengumuman'
        ]}
      />

      <Content>
        <Title>Informasi pengumuman</Title>
        <Subtitle>
          Semua informasi pengumuman yang diterbitkan oleh Dinas komunikasi, informatika dan persandian kota Ambon
        </Subtitle>
        <Announcements>
          {props.announcements?.data.map(data => <AnnouncementItem key={data.id}><Announcement data={data} /></AnnouncementItem> )}
        </Announcements>
      </Content>
    </Container>
  );
}