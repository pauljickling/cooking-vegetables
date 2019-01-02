import React, { Component } from 'react';
import Vegetable from './Vegetable.js';

const Chart = () => (
    <div className="chart">
      <div></div>
      <p>Blanch</p>
      <p>Saute</p>
      <p>Steamy Saute</p>
      <p>Roast</p>
      <p>Long-Cook</p>
      <p>Grill</p>
      <Vegetable name="Asparagus"/>
    </div>
);

export default Chart;
