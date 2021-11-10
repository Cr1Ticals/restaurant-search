import React from 'react';
import ReactStars from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante-fake.png'

import { Restaurant, RestaurantInfo, Title, Adress, RestaurantPhoto } from './styles';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Restaurant Name</Title>
      <ReactStars
       count={5} 
       isHalf
       edit={false}
       value={4} 
       activeColor="#ffa600" 
       />
      <Adress>
        St. de Habitações Individuais Sul Pontão do Lago Sul
      </Adress>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurante} alt="Restaurant Photo"/>
  </Restaurant>
);

export default RestaurantCard;
