import styled from "styled-components";
import { useState } from "react";

export const CardsContainer = styled.div`
  z-index: 3;
  margin: 30px auto;
  width: 100%;
  display: flex;

  padding: 20px 0 120px 0;
  overflow-y: auto;
  overflow-x: scroll;
  white-space: nowrap;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const CardSpacer = styled.div`
  transform: translateY(${(props) => props.offset}px);

  margin: 0;
  height: 480px;

  padding: 0 8px;
  flex-shrink: 0;
  width: 20%;
  min-width: 250px;
  box-sizing: content-box;

  &:first-child {
    padding-left: 6px;
  }

  &:last-child {
    padding-right: 6px;
  }
`;

export const Card = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: ${(props) => `url(${props.image[0]})`};
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  transition: all 3s ease;

  & > h4 {
    text-align: center;
    font-size: 42px;
    font-weight: 700;
    color: #fff;
    transition: opacity 0.3s ease;
  }

  &:hover,
  &:active {
    box-shadow: 3px 12px 10px 0px rgba(170, 170, 170, 1);
    background-image: ${(props) => `url(${props.image[1]})`};
    h4 {
      opacity: 0.65;
    }
  }
`;
