import React from 'react';

const Vegetable = (props) => [
  <div className="vegetable" key="1">{props.name}</div>,
  <div className="vegetable" key="2">{props.blanch}</div>,
  <div className="vegetable" key="3">{props.saute}</div>,
  <div className="vegetable" key="4">{props.steamySaute}</div>,
  <div className="vegetable" key="5">{props.roast}</div>,
  <div className="vegetable" key="6">{props.longCook}</div>,
  <div className="vegetable" key="7">{props.grill}</div>
];

export default Vegetable;
