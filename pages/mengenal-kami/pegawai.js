import styled from 'styled-components';
import Layout from "@/components/mengenal-kami/layout";
import Image from '@/components/image';
import axios from 'axios';


const Heading = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1rem;
  margin: 0;
  text-align: center;
  margin-top: .8rem;
  margin-bottom: .5rem;
`;
const Paragraph = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 22px;
  margin: 0;
  font-size: .90rem;
  color: gray;
  text-align: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;
const Content = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export async function getServerSideProps() {

  // Fetch data from external API
  let data = {};


  const resp = await axios.get('/employees');

  data = resp.data;
 
  return {
    props: {
      resp: data,
    }, // will be passed to the page component as props
  }
}


export default function Pegawai(props) {
  return (
    <Layout breadcrumb="Pegawai">
     <GridContainer>
       {props.resp?.data?.map( employee => 

        <Content key={employee.id}>
          <img src={employee.profile} height="100" width="100" />
          <Heading>{employee.name}</Heading>
          <Paragraph>{employee.employee_role}</Paragraph>
        </Content>
       
       )}
     </GridContainer>
    </Layout>
  );
}