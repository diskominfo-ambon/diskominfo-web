import Layout from '@/components/mengenal-kami/layout';
import styled from 'styled-components';

const Heading = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.2rem;
`;
const Paragraph = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 30px;
  margin: 0;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: .8rem;
  display: block;
`;

const List = styled.ul`
  list-style: numeric;
`;
const ListItem = styled.li`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-bottom: .9rem;
`;

export default function History() {

  return (
    <Layout breadcrumb="Tentang">
      <Heading>Visi</Heading>
      <Paragraph>Ambon yang hamonis, sejatera dan religius</Paragraph>

      <Heading>Misi</Heading>
      <List>
        <ListItem>Memperkuat dan mempererat harmonisasi sosial</ListItem>
        <ListItem>Meningkatkan kualitas sumber daya manusia</ListItem>
        <ListItem>Memberdayakan ekonomi keluarga dan masyarakat menuju kemandirian yang kreatif berbasis sumber daya alam yang tersedia</ListItem>
        <ListItem>Meningkatkan nilai-nilai sprititualitas masyarakat</ListItem>
      </List>
      <Heading>Motto</Heading>
      <Paragraph>Aktual dan terpercaya dalam pelayanan informasi</Paragraph>

      <Heading>Struktur Organisasi</Heading>
      <Image src="https://ambon.go.id/wp-content/uploads/2022/04/3.-Kominfo.png"/>

    </Layout>
  );
}