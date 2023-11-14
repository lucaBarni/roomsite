import { Button, Container } from "@mui/material";
import MainSection from "@/src/home/components/MainSection";





const Home = () => {
  return (
    <>
      <Container maxWidth={false}>
        <MainSection />
      </Container>
    
      <hr>
      <Button
          variant="contained"
          style={{
            marginTop: "2rem",
          }}
        >
          Buscar
        </Button>
        </hr>      
    </>
  );
};

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  }]
export default Home;
