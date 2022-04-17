import styled from 'styled-components';
import Container from './container';


const contacts = [
  {
    'key': 'email',
    'source': '#',
    'title': 'Alamat email'
  },
  {
    'key': 'youtube',
    'source': '#',
    'title': 'Youtube'
  },
  {
    'key': 'ig',
    'source': '#',
    'title': 'Instagram'
  },
];

const Layout = styled.footer`
  border-top: 1px solid #ddd;
`;

const ContainerFlexRow = styled(Container)`
  display: flex;
  align-items: center;

  div:first-child {
    flex: 2;
  }

  div {
    flex: 1;
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

`;
const ListGroup = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: .5rem;
  font-size: .9rem;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 300;

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
    <>
      <Heading>Kontak</Heading>
      <ListGroup>
        { contacts.map(contact =>
          <ListItem key={contact.key}>
            <a href={contact.source}>
              {contact.title}
            </a>
          </ListItem>
        )}
      </ListGroup>
    </>
  )
}

function Supported() {
  return (
    <>
      <Heading>Dukungan</Heading>
      <ListGroup>
        <ListItem>
          <a href="">
            Laman pemerintah kota Ambon
            <span>
              (https://ambon.go.id)
            </span>
          </a>
        </ListItem>
        <ListItem>
          <a href="">
            Pemerintah provinsi Maluku
            <span>
              (https://malukuprov.go.id)
            </span>
          </a>
        </ListItem>
      </ListGroup>
    </>
  );
}


export default function Footer() {
  return (
    <Layout>
      <ContainerFlexRow>
        <>
          <Title>Hubungi kami</Title>
          <Subtitle>
            Dinas Komunikasi, Informatika & Persandian kota Ambon &copy; 2022
          </Subtitle>
        </>
        <Supported/>
        <Contact/>
      </ContainerFlexRow>
    </Layout>
  );
}