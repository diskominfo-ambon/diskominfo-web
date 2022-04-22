import styled from 'styled-components';
import Container from "@/components/container";
import Breadcrumb from '@/components/breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { InlineReactionButtons, InlineShareButtons } from 'sharethis-reactjs';


const Flex = styled(Container)`
  display: flex;
  margin: 2rem 0;
  margin-bottom: 5rem;
`;

const Content = styled.div`
  flex: 3;
  margin-right: 2rem;
`;
const Sidebar = styled.aside`
  flex: 1.2;
`;

const SidebarHeading = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
  text-align: center;
  font-size: 1.1rem;

  &::after {
    content: '';
    display: block;
    background-image: url('/static/img/underline.svg');
    background-repeat: no-repeat;
    margin: 0 auto;
    margin-top: .5rem;
    height: 6px;
    width: 300px;

  }
`;

const SidebarContent = styled.div`
  position: sticky;
  top: 10px;
`;


const SidebarList = styled.ul`
  padding: 0;
  margin: 0;
  margin: 1rem 0;
  list-style: none;
  border: 1px solid #ddd;
  border-radius: 5px;
`;
const SidebarItem = styled.li`
  font-family: 'Plus Jakarta Sans', sans-serif;
  border-bottom: 1px dashed #ddd;
  padding: .8rem;

  &:last-child {
    border-bottom: none;
  }

  > a {
    text-decoration: none;
    display: block;

    &:hover {
      color: var(--primary);
    }

  }
`;

const Caption = styled.span`
  display: inline-block;
  font-size: .8rem;
  border: 1px solid #ddd;
  padding: .3rem .4rem;
  border-radius: 3px;
  margin-top: .5rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-right: .5rem;

  &:last-child {
    margin-right: 0;
  }

  > svg {
    display: inline-block;
    margin-right: .4rem;
  }

`;

const TagLabel = styled(Caption)`
  background-color: rgba(0%, 58%, 68%, .20);
  border-color: rgba(0%, 58%, 68%, .20);
`;


const PostTitle = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 42px;
  margin: 0;
  margin-bottom: .5rem;
  font-size: 1.8rem;
`;

const Paragraph = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
  line-height: 28px;
`;

const PostContent = styled.div`
  margin-top: 1rem;
`;

const PostCover = styled(Image)`
  border-radius: 5px;
  display: block;
`;

const PostHeader = styled.div`
  margin-bottom: 1rem;
`;

export default function Kegiatan() {
  return (
    <Container>
      <style global jsx>{`
        .st-inline-share-buttons {
          margin-top: 1.3rem;
        }
      `}
      </style>
      <Breadcrumb
        paths={[
          'Beranda',
          'Informasi',
          'Kegiatan',
          'Ambon'
        ]}
      />
      <Flex>
        <Content>
          <PostHeader>
            <PostTitle>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </PostTitle>
            <Caption>
              <FontAwesomeIcon icon={faUserCheck} />
              Admin
            </Caption>
            <Caption>
              <FontAwesomeIcon icon={faClock} />
              Kamis 12 januari 2010
            </Caption>
            <TagLabel>
              Halo
            </TagLabel>
            <InlineShareButtons
              config={{
                radius: 5,
                show_total: true,
                enabled: true,
                networks: [           // which networks to include (see SHARING NETWORKS)
                  'whatsapp',
                  'email',
                  'messenger',
                  'facebook',
                  'messenger',
                  'blogger'
                ]
               }}
            />
          </PostHeader>

          <PostCover
            src="https://images.unsplash.com/photo-1644982652061-df82282e178d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="cover"
            height="200"
            width="300"
            layout="responsive"
          />
          <PostContent>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Paragraph>
          </PostContent>
        </Content>
        <Sidebar>
          <SidebarContent>
            <SidebarHeading>
              Kegiatan lainnya
            </SidebarHeading>
            <SidebarList>
              { [1,2,3,4,5].map(val =>
                <SidebarItem key={val}>
                  <Link href="/h" passHref>Halo</Link>
                  <Caption>
                    <FontAwesomeIcon icon={faClock} />
                    Kamis 12 januari 2010
                  </Caption>
                </SidebarItem>
              )}
            </SidebarList>
          </SidebarContent>
        </Sidebar>
      </Flex>
    </Container>
  );
}