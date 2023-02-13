import BoxLayout from "@components/atoms/Box";
import Text from "@components/atoms/Text";
import Button from "@components/Button";
import { Container, Grid } from "@mui/material";
import { useLocale } from "helper/useLocale";
import Image from "next/image";
import Illustrationsec from "public/Illustrationsec.png";
import Illustrationtop from "public/Illustrationtop.jpg";
import HomeText from "./text.json";
const Home = () => {
  const handleGetStarted = () => {};
  const { t } = useLocale(HomeText);

  return (
    <>
      <BoxLayout>
        <Container maxWidth="md">
          <Grid container alignItems="center" display="flex" marginY={5}>
            <Grid item sm={6} sx={{ display: "flex", alignItems: "center" }}>
              <Text text={t.headline} variant={"h4"} />
            </Grid>
            <Grid item sm={6} sx={{ textAlign: "center" }}>
              <Image src={Illustrationtop} alt={"image"} width={300} />
            </Grid>
          </Grid>
          <Grid container alignItems="center" display="flex" marginY={5}>
            <Grid item sm={4} sx={{ textAlign: "center" }}>
              <Button
                text={t.getstarted}
                onClick={handleGetStarted}
                sx={{ background: "red" }}
              />
            </Grid>
            <Grid item sm={6} sx={{ textAlign: "center" }}>
              <Image src={Illustrationsec} alt={"image"} width={300} />
            </Grid>
          </Grid>
        </Container>
      </BoxLayout>
    </>
  );
};

export default Home;
