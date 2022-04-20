import Container from "@/components/container";
import Breadcrumb from "@/components/breadcrumb";
import styled from 'styled-components';

export default function History() {
  return (
    <Container>
      <Breadcrumb
        paths={[
          "Mengenal kami",
          "Sejarah"
        ]}
      />

    </Container>
  );
}