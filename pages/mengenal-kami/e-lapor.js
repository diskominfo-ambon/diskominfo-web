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
  width: 50%;
  border-radius: 5px;
  margin-bottom: .8rem;
  display: block;
`;
const Iframe = styled.iframe`
  width: 100%;
  border-radisu: 5px;
  min-height: 500px;
`;

export default function History() {

  return (
    <Layout breadcrumb="E-Lapor">
      <Heading>
        Bagaimana cara melapor
      </Heading>
      <center>
        <Image src="/static/img/e-lapor-2.jpeg" alt="e-lapor"/>
        <Image src="/static/img/e-lapor.jpeg" alt="e-lapor"/>
      </center>
      <Heading>
        SOP pengelolahan pelaporan SPAN-LAPOR
      </Heading>
      <center>
      <Iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTYB-znCaeKW1Zp63rFbjmvEnN3oJ5pg8EuHKievb15E1xg4edP6wDIdcwbJha_Gspr9hhQ9WGNVHzm/pubhtml?gid=129710631&amp;single=true&amp;widget=true&amp;headers=false"></Iframe>
      </center>

    </Layout>
  );
}