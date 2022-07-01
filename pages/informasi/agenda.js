import { useState } from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import styled from 'styled-components';
import idLocale from '@fullcalendar/core/locales/id';
import Container from "@/components/container";
import Breadcrumb from '@/components/breadcrumb';
import dynamic from 'next/dynamic';

const Modal = dynamic(
  () => import('@/components/modal'),
  { ssr: false }
);



const Heading = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
`;

const Paragraph = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: .9rem;
  margin: 0;
  margin-top: .5rem;
`;



export default function Agenda() {

  const [show, setShow] = useState(false);

  return (
    <Container>
      <style global jsx>{`
        .fc {
          margin: 2rem 0 5rem 0;
        }
        .fc-header-toolbar {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: .9rem;
        }
        .fc-button {
          background: none !important;
          border: 1px solid #ddd !important;
          color: var(--primary) !important;
        }

        .fc-icon {
          color: var(--primary) !important;
        }

        .fc-daygrid {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .fc-daygrid-day.fc-day-today .fc-daygrid-day-top .fc-daygrid-day-number {
          color: #3688D8 !important;
          font-weight: 700;
        }

        .fc-scrollgrid   {
          border-radius: 5px;
        }
        .fc-daygrid .fc-col-header-cell {
          padding: 1rem !important;
        }
        .fc-daygrid-event {
          background-color: rgba(21%, 53%, 85%, 0.30);
          cursor: pointer;
        }
      `}
      </style>


      <Breadcrumb paths={[
        "Beranda",
        "Informasi",
        "Informasi agenda"
      ]} />
      <Modal
        show={show}
        heading="Kegiatan pemasangan jaringan pada setiap OPD"
        onDismiss={() => setShow(show => !show)}
      >
       <Paragraph>Dalam kegiatan pemasangan jaringan pada setiap OPD dari Dinas kominfo</Paragraph>
      </Modal>

      <center>
        <Heading>
          Tinjauan informasi agenda
        </Heading>
        <Paragraph>
          Semua informasi tinjauan agenda kegiatan Dinas komunikasi, informatika & persandian kota Ambon.
        </Paragraph>
      </center>



      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'title',
          right: 'prev,next'
        }}
        eventClick={() => setShow(show => !show)}
        initialEvents={[
          {
            id: 1,
            title: 'Kegiatan pemasangan jaringan pada setiap OPD',
            start: new Date(),
          },
          {
            id: 2,
            title: 'Kegiatan sosialisasi pemasangan jaringan ke OPD',
            start: new Date('2022-06-27'),
          }
        ]}
        locales={[idLocale]}
        locale="id"
      />
    </Container>
  );
}