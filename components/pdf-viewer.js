import styled from 'styled-components';



const Iframe = styled.iframe`
  border-radius: 5px;
  width: 100%;
  min-height: 800px;
  margin-top: 1.3rem;
`;

const LoadingText = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: .9rem;
  display: block;
  margin: .9rem 0;
  margin-top: 2rem;
  text-align: center;
  color: var(--light);
`;


export default function PDFViewer({path}) {

  return (
    <Iframe
      src={path}
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
    />
  );
}