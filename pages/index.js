import Link from "next/link";
import { paramCase } from "change-case";
import Head from "@/components/head";
import Card from "@/components/card";
import Container from "@/components/container";
import Heading from "@/components/heading";
import Grid from "@/components/grid";
import getStates from "@/lib/getStates";

const groupBy = (key) => (array) =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

const groupByState = groupBy("state");

export default function Home({ roasters }) {
  const states = getStates();
  // const roastersByState = groupByState(roasters);
  return (
    <>
      <Head
        title={`${roasters.length} - US Coffee Roasters`}
        description='Crowd-sourced list of US coffee roasters'
      />
      <Container>
        <Heading />
        <ul>
          {states.map((state) => (
            <li>
              <Link href={`/roasters/${paramCase(state)}`}>
                <a>{state}</a>
              </Link>
            </li>
          ))}
        </ul>
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

export async function getStaticProps() {
  const res = await fetch(`${process.env.HOST}/api/roasters`);
  const roasters = await res.json();
  return {
    props: {
      roasters,
    },
  };
}
