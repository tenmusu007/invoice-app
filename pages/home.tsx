import Text from "@components/atoms/Text";
import Button from "@components/Button";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import Illustrationsec from "public/Illustrationsec.png";
import Illustrationtop from "public/Illustrationtop.jpg";

const Home = () => {
  const handleGetStarted = () => {};
  return (
    <>
      <Container maxWidth="md">
        <Grid container alignItems="center" display="flex" marginY={5}>
          <Grid item sm={6} sx={{ display: "flex", alignItems: "center" }}>
            <Text
              text={
                "Create your own invoice so that you’ll never miss your income."
              }
              variant={"h4"}
            />
          </Grid>
          <Grid item sm={6} sx={{ textAlign: "center" }}>
            <Image src={Illustrationtop} alt={"image"} width={300} />
          </Grid>
        </Grid>
        <Grid container alignItems="center" display="flex" marginY={5}>
          <Grid item sm={4} sx={{ textAlign: "center" }}>
            <Button
              text={"Get started"}
              onClick={handleGetStarted}
              sx={{ background: "red" }}
            />
          </Grid>
          <Grid item sm={6} sx={{ textAlign: "center" }}>
            <Image src={Illustrationsec} alt={"image"} width={300} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
