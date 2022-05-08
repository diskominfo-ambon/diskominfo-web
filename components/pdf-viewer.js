import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsLeftRight, faAngleLeft, faAngleRight, faFileArrowDown  } from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

pdfjs.GlobalWorkerOptions.workerSrc = '/static/pdf.worker.min.js';


const Button = styled.button`
  background: transparent;
  border: none;
  padding: .7rem .9rem;
  cursor: pointer;
  border-left: 1px solid #ddd;
  font-family: 'Plus Jakarta Sans', sans-serif;

  &:hover {
    background-color: #f1f1f1;
  }
  > svg {
    font-size: 1rem !important;
  }
`;

const DownloadButton = styled(Button)`
  color: green;
  font-size: .9rem;
  text-decoration: none;

  > svg {
    display: inline-block;
    margin-right: .5rem;
    path {
      color: green;
    }
  }
`;

const FlexLayout = styled.div`
  background-color: white;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 3;
  top: 0px;
  border-bottom: 1px solid #d5d5d5;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Paragraph = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: .9rem;
  font-weight: 600;
  padding: .7rem .9rem;
  margin: 0;


  > a {
    margin: 0;
    text-decoration: none;
    color: green;
    position: relative;
  }
  svg {
    display: inline-block;
    margin: 0 .2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const Actions = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ActionItem = styled.li`
  display: inline-block;
`;


function ErrorDocument() {
  return (
    <center>
      <Paragraph style={{ color: 'red' }}>
        Terjadi kesalahan saat membuka dokumen
      </Paragraph>
    </center>
  );
}

export default function PDFViewer({path}) {

  const [numPages, setNumPages] = useState(null);
  const [page, setPage] = useState(1);

  function onDocumentLoaded({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }


  function onNextPage() {
    if (page < numPages) {
      setPage( page => page + 1);
    }
  }

  function onPreviousPage() {
    if (page <= 1) return;

    setPage(page => page - 1);
  }

  return (
    <>
      <style global jsx>{`
        .react-pdf__Page__canvas {
          margin: 0 auto;
        }

        .react-pdf__Document {
          position: relative;
          border-radius: 5px;
          border: 1px solid #d5d5d5;
          padding: .8rem;
          overflow: hidden;
        }
      `}
      </style>

      <Document
        file={{
          url: path
        }}
        onLoadSuccess={onDocumentLoaded}
        error={
          <ErrorDocument />
        }
        loading={
          <Skeleton
            height={500}
            width="100%"
          />
        }
      >
        <FlexLayout>
          <Paragraph>
            {page} <FontAwesomeIcon icon={faArrowsLeftRight} /> {numPages} &nbsp;&nbsp;Jumlah halaman
          </Paragraph>

          <Actions>
            <ActionItem>
              <DownloadButton
                download
                href={path}
                as="a"
              >
                <FontAwesomeIcon icon={faFileArrowDown} />
                Download
              </DownloadButton>
            </ActionItem>
            <ActionItem>
              <Button
                title="Sebelumnya"
                onClick={onPreviousPage}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </Button>
              <Button
                title="Selanjutnya"
                onClick={onNextPage}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </Button>
            </ActionItem>
          </Actions>
        </FlexLayout>

        <Page pageNumber={page} />
      </Document>
    </>
  );
}