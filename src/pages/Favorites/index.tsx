import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';

import IFood from '../../dtos/IFoodDTO';
import favoritesService from '../../services/favorites';
import formatValue from '../../utils/formatValue';

import {
  Container,
  Header,
  HeaderTitle,
  FoodsContainer,
  FoodList,
  Food,
  FoodImageContainer,
  FoodContent,
  FoodTitle,
  FoodDescription,
  FoodPricing,
} from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<IFood[]>([]);

  useEffect(() => {
    async function loadFavorites(): Promise<void> {
      let response = await favoritesService.list();
      if (response.length) {
        response = response.map(favorite => ({
          ...favorite,
          formattedPrice: formatValue(favorite.price),
        }));
        setFavorites(response);
      }
    }

    loadFavorites();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderTitle>Meus favoritos</HeaderTitle>
      </Header>

      <FoodsContainer>
        <FoodList
          data={favorites}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Food activeOpacity={0.6}>
              <FoodImageContainer>
                <Image
                  style={{ width: 88, height: 88 }}
                  source={{ uri: item.thumbnail_url }}
                />
              </FoodImageContainer>
              <FoodContent>
                <FoodTitle>{item.name}</FoodTitle>
                <FoodDescription>{item.description}</FoodDescription>
                <FoodPricing>{item.formattedPrice}</FoodPricing>
              </FoodContent>
            </Food>
          )}
        />
      </FoodsContainer>
    </Container>
  );
};

export default Favorites;
