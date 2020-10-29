import Head from "@/components/head";
import Box from "@/components/box";
import Button from "@/components/button";
import Card from "@/components/card";
import Container from "@/components/container";
import Heading from "@/components/heading";
import Header from "@/components/header";
import Grid from "@/components/grid";
import Map from "@/components/map";
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
        <Header>
          <div style={{ width: "50%" }}>
            <Heading />
            <Box mt={1}>
              <p>
                Arcu lobortis iaculis sit nostra vehicula penatibus curabitur
                augue pulvinar condimentum habitant donec dapibus quis nunc
                felis ad lectus sollicitudin ultricies facilisis tellus hac
                aliquam porttitor congue cum class turpis
              </p>
            </Box>
            <Box mt={2}>
              <Button variant='primary'>Submit coffee roaster</Button>
            </Box>
          </div>
          <Map />
        </Header>
        {/* <ul>
          {states.map((state) => (
            <li>
              <Link href={`/roasters/${paramCase(state)}`}>
                <a>{state}</a>
              </Link>
            </li>
          ))}
        </ul> */}
        {/* <Grid>
          {roasters.map((roaster, index) => (
            <Card key={index}>
              <Card.Heading>{roaster.name}</Card.Heading>
              <Card.Description>{roaster.address}</Card.Description>
            </Card>
          ))}
        </Grid> */}
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
