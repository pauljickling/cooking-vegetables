import React from 'react';

const Vegetable = (props) => [
  <div key="1">{props.name}</div>,
  <div key="2">{props.blanch}</div>,
  <div key="3">{props.saute}</div>,
  <div key="4">{props.steamySaute}</div>,
  <div key="5">{props.roast}</div>,
  <div key="6">{props.longCook}</div>,
  <div key="7">{props.grill}</div>
];

export default Vegetable;
