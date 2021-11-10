import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal } from '../../components';


import { Container, Search, Logo, Wrapper, Map, CarouselTitle, Carousel } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <br />
          <TextField
            label="Search"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarouselTitle>In your area</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title="Restaurant Name"/>
            <Card photo={restaurante} title="Restaurant Name"/>
            <Card photo={restaurante} title="Restaurant Name"/>
            <Card photo={restaurante} title="Restaurant Name"/>
            <Card photo={restaurante} title="Restaurant Name"/>
            <Card photo={restaurante} title="Restaurant Name"/>
          </Carousel>
        </Search>
        <RestaurantCard/>
      </Container>
      <Map/>
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/>
    </Wrapper>
  );
};

export default Home;
