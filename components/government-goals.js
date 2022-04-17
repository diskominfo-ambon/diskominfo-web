import styled from 'styled-components';
import Container from './container';

const Title = styled.h2`
  background-color: var(--primary);
  color: white;
  font-family: 'Noto Sans', sans-serif;
  display: inline-block;
  border-radius: 3px;
  text-align: center;
  padding: .2rem .4rem;
  font-weight: 400;
  font-size: .9rem;
  margin-bottom: 3rem;
`;

const Heading = styled.h3``;

const Goals = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ddd;
  width: 100%;
  border-radius: 3px;
  margin-bottom: 3.5rem;
  position: relative;
  counter-reset: count;

  &::before {
    content: '${props => props.label}';
    display: inline-block;
    background-color: var(--primary);
    color: white;
    font-size: .9rem;
    position: absolute;
    top: -37px;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    padding: .2rem .4rem;
    border-radius: 3px;
  }

  &:last-child {
    margin-bottom: 0;
  }

`;
const GoalsItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  counter-increment: count;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 400;
  font-size: .92rem;
  color: var(--dark);
  transition: 300ms ease;

  &:last-child {
    border-bottom: none;
  }
  &::before {
    content: counter(count);
    display: inline-block;
    background-color: var(--primary);
    color: white;
    margin-right: .5rem;
    padding: .2rem .4rem;
    border-radius: 4px;
  }

  &:hover {
    transform: scale(1.03);
    background-color: white;
    border: 1px solid #ddd;
  }
`
const ContainerFlexCenter = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 4.5rem;
  margin-bottom: 3rem;
`;


export default function GovermentGoals() {
  return (
    <ContainerFlexCenter>
      <Goals label="Visi">
        <GoalsItem>Ambon yang harmonis, sejahtera dan religius</GoalsItem>
      </Goals>

      <Goals label="Misi">
        <GoalsItem>Memperkuat dan mempererat harmonis sosial</GoalsItem>
        <GoalsItem>Meningkatkan kualitas sumber daya manusia</GoalsItem>
        <GoalsItem>
          Memberdayakan ekonomi keluarga dan masyarakat menuju kemandirian yang kreatif
          berbasis sumber daya alam yang tersedia
        </GoalsItem>
        <GoalsItem>
          Meningkatkan nilai-nilai spritualitas masyarakat
        </GoalsItem>
      </Goals>
    </ContainerFlexCenter>
  );
}