import React from "react";
import { useState } from "react";
import { Typography } from 'antd';

import { CardsContainer, CardSpacer, Card } from './Styles'

const { Title } = Typography;

export const DealsCarousel = ({ scroll }) => {
  const deals = [
    {
      name: 'Paris',
      link: '',
      image: ['https://i.ibb.co/bdLSy3h/paris.jpg', 'https://i.ibb.co/S0K05bc/paris-1.jpg']
    },
    {
      name: 'Maldives',
      link: '',
      image: ['https://i.ibb.co/3MRYsgZ/maldies.jpg', 'https://i.ibb.co/GJ8wM83/maldives.jpg']
    },
    {
      name: 'Shimla',
      link: '',
      image: ['https://i.ibb.co/jh7BCj1/shimla.jpg', 'https://i.ibb.co/zNn62fZ/shiml.jpg']
    },
    {
      name: 'Bali',
      link: '',
      image: ['https://i.ibb.co/Jjz12wN/bali.jpg', 'https://i.ibb.co/GtsLfQx/bali1.jpg']
    },
    {
      name: 'Hong Kong',
      link: '',
      image: ['https://i.ibb.co/NYH9J6m/hongkong.jpg', 'https://i.ibb.co/QmZjqbn/hoonkon.jpg']
    }
    ,
    {
      name: 'Greece',
      link: '',
      image: ['https://i.ibb.co/cJXCKkH/Greec.jpg', 'https://i.ibb.co/b6D7QSx/greece.jpg']
    },
    {
      name: 'New york',
      link: '',
      image: ['https://i.ibb.co/mDTgq2F/newyork.jpg', 'https://i.ibb.co/8BRmsNW/newyok.jpg']
    }
  ]

  const animationOffset = [0, 70, 30, 100, 10, 70, 0]

  return (
    <CardsContainer>
      {
        deals.map((deal, index) => {
          return (
            <CardSpacer
              offset={animationOffset[index]}
              key={index}
            >
              <Card
                href='/'
                image={deal.image}
              >
                <Title level={4}>{deal.name}</Title>
              </Card>
            </CardSpacer>
          )
        })
      }
    </CardsContainer>
  )
}