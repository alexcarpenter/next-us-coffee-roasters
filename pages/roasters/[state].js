import React from "react";
import { capitalCase, paramCase } from "change-case";
import Card from "@/components/card";
import Container from "@/components/container";
import Grid from "@/components/grid";
import Head from "@/components/head";
import Header from "@/components/header";
import Heading from "@/components/heading";
import getStates from "@/lib/getStates";

function State({ state, roasters }) {
  return (
    <>
      <Head
        title={`${state} - Coffee Roasters`}
        description='Crowd-sourced list of US coffee roasters'
      />
      <Container>
        <Header>
          <Heading prefix={state} />
        </Header>
        <Grid>
          {roasters.map((roaster, index) => (
            <Card key={index}>
              <Card.Heading>{roaster.name}</Card.Heading>
              <Card.Description>{roaster.address}</Card.Description>
            </Card>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const states = getStates();
  return {
    paths: states.map((state) => {
      return {
        params: {
          state: paramCase(state),
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.HOST}/api/roasters/${params.state}`);
  const roasters = await res.json();
  return {
    props: {
      roasters,
      state: capitalCase(params.state),
    },
  };
}

export default State;
