import Head from "next/head";
import {
  Container,
  Main,
  Title,
  Description,
} from "@/src/components/sharedstyles";
import { ModuleBox } from "../common/components";
import styled from "styled-components";

export default function HomePage() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>
          Bem vindo a <a href="">C3 Construtora</a>
        </Title>

        <Description>
          Administre a sua construção com segurança!
        </Description>

        <HomeModules>
          <ModuleBox title="Shopping" options={['Registre suas compras e tenha controle sobre o estoque']} redirectRoute="shopping-list"/>
          <ModuleBox title="Mão de obra" options={['Gerencie todos os seus pagamentos']}/>
          <ModuleBox title="Estatísticas" options={['Visualize os índices da sua construção']}/>
        </HomeModules>
      </Main>
    </Container>
  );
}

const HomeModules = styled.div`
  margin: 100px auto;
  display: flex;
  justify-content: space-between;
  width: 70%;
  text-align: center;
`;
