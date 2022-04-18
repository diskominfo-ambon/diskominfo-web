import styled from 'styled-components';
import Container from './container';


const contacts = [
  {
    'key': 'email',
    'source': 'mailto:diskominfosandi@ambon.go.id',
    'title': 'diskominfosandi@ambon.go.id'
  },
  {
    'key': 'youtube',
    'source': 'https://www.youtube.com/c/PEMERINTAHKOTAAMBON',
    'title': 'Youtube'
  },
  {
    'key': 'ig',
    'source': 'https://www.instagram.com/tabea_amq',
    'title': 'Instagram'
  },
];

const Layout = styled.footer`
  border-top: 1px solid #ddd;
  padding: 2rem 0;
`;

const ContainerFlexRow = styled(Container)`
  display: flex;

  > div {
    flex: 1;

    &:first-child {
      flex: 2;
    }
  }

  @media screen and (max-width: ${({theme}) => theme.size.medium}) {
    display: block;
    padding: 1rem;
  }
`;

const Heading = styled.h3``;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: .8rem;
  color: var(--primary);

  @media screen and (max-width: ${({theme}) => theme.size.medium}) {
    font-size: 1.4rem;
  }

`;
const Subtitle = styled.p`
  margin: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: .9rem;
  font-weight: 400;
  margin-bottom: .5rem;

`;
const ListGroup = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: .5rem;
  font-size: .9rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 400;

  > a {
    text-decoration: none;
    color: var(--dark);
    line-height: 24px;

    &:hover {
      color: var(--primary);
      text-decoration: underline;
    }

    > span {
      margin-left: .3rem;
    }
  }
`;



function Contact() {
  return (
    <div>
      <Heading>Kontak</Heading>
      <ListGroup>
        { contacts.map(contact =>
          <ListItem key={contact.key}>
            <a target="__blank" href={contact.source}>
              {contact.title}
            </a>
          </ListItem>
        )}
      </ListGroup>
    </div>
  )
}

function Supported() {
  return (
    <div>
      <Heading>Dukungan</Heading>
      <ListGroup>
        <ListItem>
          <a target="__blank" href="https://ambon.go.id">
            Laman pemerintah kota Ambon
            <span>
              (https://ambon.go.id)
            </span>
          </a>
        </ListItem>
        <ListItem>
          <a href="https://malukuprov.go.id" target="__blank">
            Pemerintah provinsi Maluku
            <span>
              (https://malukuprov.go.id)
            </span>
          </a>
        </ListItem>
      </ListGroup>
    </div>
  );
}


export default function Footer() {
  return (
    <Layout>
      <ContainerFlexRow>
        <div>
          <Title>Hubungi kami</Title>
          <Subtitle>
            Dinas Komunikasi, Informatika & Persandian kota Ambon &copy; 2022
          </Subtitle>
          <Subtitle>
            <strong>Jl. Sultan Hairun No. 1 Gd. C Lt. 4 kantor Balai kota Ambon</strong>
          </Subtitle>
        </div>
        <Supported/>
        <Contact/>
      </ContainerFlexRow>
    </Layout>
  );
}