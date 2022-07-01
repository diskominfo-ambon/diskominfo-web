import styled from 'styled-components';
import Layout from '@/components/mengenal-kami/layout';


const Iframe = styled.iframe`
  display: block;
  margin-bottom: 1.5rem;
  width: 100%;
  height: 500px;
  border-radius: 6px;
`;
const Paragraph = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 30px;
  text-align: justify;
`;
const Content = styled.div``;

const Heading = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
  margin-bottom: 1.2rem;
  font-size: 1.2rem;
`;

const Blackqoute = styled(Paragraph)`
  font-style: italic;
  border-left: 6px solid var(--light);
  padding-left: .8rem;
`;

export default function CommandCenter() {
  return (
    <Layout breadcrumb="Command Center">
      <Content>
        <Heading>
        Command Center pemerintah kota Ambon
        </Heading>
        <Iframe
          src='https://www.youtube.com/embed/-Y2o8VmBlVA?autoplay=1&mute=1'
          frameBorder='0'
          allow='autoplay; encrypted-media; accelerometer; gyroscope'
          allowFullScreen
          title='Command center introduction'
        />
        <Heading>
          SOP Kunjungan & Permintaan Data Command Center pemerintah kota Ambon
        </Heading>
        <Iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQi-87CG5T7WSXgBXUka-wdDqJrrmij5wjPl2h22ysIhXH47i4EbEWRgi262xWlY4Xd6zcvV3Q94s2h/pubhtml?widget=true&amp;headers=false"></Iframe>


      </Content>
    </Layout>
  );
}