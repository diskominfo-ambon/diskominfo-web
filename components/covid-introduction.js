import styled from 'styled-components';
import Link from 'next/link';

const Title = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: var(--primary);
  font-weight: 600;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    background: url('/static/img/underline.svg');
    background-repeat: no-repeat;
    background-size: 100%;
    height: 10px;
    margin-top: .3rem;
  }
`;

const FlexRow = styled.div`
  display: flex;
  margin-bottom: 5rem;
`;

const Content = styled.div`
  flex: 1;

  &:last-child {
    flex: 1.5;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }
`;

const Heading = styled.h2`
  margin-bottom: .6rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

const SubHeading = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
  line-height: 27px;
  font-size: .9rem;
`;

const Card = styled.div`
  border-radius: 6px;
  border: 1px solid #ddd;
  padding: 1rem;
  display: inline-block;
  height: 200px;
  width: 200px;
  position: relative;
  margin-right: 1rem;

  &:last-child {
    margin: 0;
  }
`;
const CardLabel = styled.h3`
  margin: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: .9rem;
  color: orange;
`;
const CardParagraph = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: .9rem;
  font-weight: 600;
  margin: 0;
  margin-top: 2rem;
`;
const CardValue = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: var(--primary);
  font-size: 1.4rem;
  margin: 0;
  margin-top: .5rem;
`;
const CardBody = styled.div`
  bottom: 20px;
  position: absolute;
`;
const Showmore = styled.a`
  margin-top: 1rem;
  display: inline-block;
  font-size: .9rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  border: 1px solid var(--primary);
  padding: .6rem 1rem;
  border-radius: 6px;
  color: var(--primary);
  cursor: pointer;
  transition: 300ms ease;

  &:hover {
    background-color: var(--primary);
    color: white;
  }
`;

const TextUpdate = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: var(--light);
  display: block;
  text-align: center;
  margin-top: .7rem;
  font-size: .8rem;
`;

function CovidCard() {
  return (
    <Card>
      <CardLabel>Dirawat</CardLabel>
      <CardBody>
        <CardParagraph>Ambon, Maluku</CardParagraph>
        <CardValue><strong>13.854</strong></CardValue>
      </CardBody>
    </Card>
  );
}


export default function CovidIntroduction() {
  return (
    <>
      <Title>Informasi Covid-19</Title>
      <FlexRow>
        <Content>
          <Heading>Kenali Informasi Seputar Covid-19</Heading>
          <SubHeading>
            Ketahui penyakit yang disebabkan oleh Coronavirus, gejala, serta penularan Covid-19.
            Dapatkan informasi soal tindakan yang harus dilakukan jika tertular Covid-19, juga tren
            penanganan pandemi di kota Ambon.
          </SubHeading>
          <Link href="/i">
            <Showmore>Selengkapnya</Showmore>
          </Link>
        </Content>
        <Content>
          <div>
            <CovidCard />
            <CovidCard />
            <CovidCard />
          </div>
          <TextUpdate>
            Update Terakhir: Senin, 18 Apr 2022 17:00
          </TextUpdate>
        </Content>
      </FlexRow>
    </>
  );
}