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

const Iframe = styled.iframe`
  width: 100%;
  border-radisu: 5px;
  min-height: 500px;
`;

const Image = styled.img`
  width: 50%;
  border-radius: 5px;
  margin-bottom: .8rem;
  display: block;
`;

export default function History() {

  return (
    <Layout breadcrumb="SOP Layanan pengaduan">
      <Heading>
        Alur Pengaduan Layanan Internet dan Aplikasi pada Pemerintah Kota
      </Heading>
      <center>
        <Image src="/static/img/tanggap.jpeg" alt="e-lapor"/>
      </center>

      <Heading>
        SOP Pengaduan Layanan Internet dan Aplikasi pada Pemerintah Kota
      </Heading>

      <Iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS0o8zP-g7UNlqGHfr3n3n3sWK6l8n-PhxVPwI3O_6HrrU79tJ6n-x8RUZhFrCgAIw5KKRptYFjIeVY/pubhtml?gid=90460768&amp;single=true&amp;widget=true&amp;headers=false"></Iframe>
    </Layout>
  );
}