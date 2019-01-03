import React, { Component } from 'react';
import Vegetable from './Vegetable.js';

const Chart = () => (
    <div className="chart">
      {/* Header */}
      <div></div>
      <p>Blanch</p>
      <p>Saute</p>
      <p>Steamy Saute</p>
      <p>Roast</p>
      <p>Long-Cook</p>
      <p>Grill</p>

      {/* Vegetable lists */}
      <Vegetable name="Artichokes" />
      <Vegetable name="Asparagus" />
      <Vegetable name="Beets" />
      <Vegetable name="Broccoli" />
      <Vegetable name="Broccoli Rabe" />
      <Vegetable name="Brussel Sprouts" />
      <Vegetable name="Cabbage" />
      <Vegetable name="Carrots" />
      <Vegetable name="Cauliflower" />
      <Vegetable name="Celery Root" />
      <Vegetable name="Chard" />
      <Vegetable name="Collards" />
      <Vegetable name="Corn" />
      <Vegetable name="Eggplant" />
      <Vegetable name="Fava Beans" />
      <Vegetable name="Fennel" />
      <Vegetable name="Green Beans" />
      <Vegetable name="Kale" />
      <Vegetable name="Leeks" />
      <Vegetable name="Mushrooms" />
      <Vegetable name="Onions" />
      <Vegetable name="Parsnips" />
      <Vegetable name="Peas" />
      <Vegetable name="Peppers" />
      <Vegetable name="Potatoes" />
      <Vegetable name="Romanesco" />
      <Vegetable name="Scallions" />
      <Vegetable name="Snap Peas" />
      <Vegetable name="Spinach" />
      <Vegetable name="Summer Squash" />
      <Vegetable name="Sweet Potatoes" />
      <Vegetable name="Tomatoes" />
      <Vegetable name="Turnips" />
      <Vegetable name="Winter Squash" />
    </div>
);

export default Chart;
