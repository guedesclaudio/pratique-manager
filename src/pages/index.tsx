import Head from "next/head";
import {
  Container,
  Main,
  Title,
  Description,
} from "@/src/components/sharedstyles";
import { ModuleBox } from "../common/components";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>
          Bem vindo ao <a href="">Pratique Manager</a>
        </Title>

        <Description>
          Administre a sua construção com segurança!
        </Description>

        <HomeModules>
          <ModuleBox title="Registros" options={['Compras', 'Mão de obra']}/>
          <ModuleBox title="Estatísticas" options={['Visualize gráficos e analise dados']}/>
          <ModuleBox title="Visualização" options={['Explore registros de compras, itens e mão de obra']}/>
        </HomeModules>
      </Main>
    </Container>
  );
}

const HomeModules = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 70%;
  text-align: center;

  & > div {
    padding: 20px;
    
    transition: all 0.3s ease;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background: rgba(var(--card-rgb), 0.1);
        border: 1px solid rgba(var(--card-border-rgb), 0.15);
      }

      &:hover span {
        transform: translateX(4px);
      }
    }

    @media (prefers-reduced-motion) {
      &:hover span {
        transform: none;
      }
    }
  }

  & > div span {
    display: inline-block;
    transition: transform 0.3s ease;
  }
`