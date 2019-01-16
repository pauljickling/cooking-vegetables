import React from 'react';
import Vegetable from './Vegetable.js';

const spring = <div className='spring'></div>;
const summer = <div className='summer'></div>;
const fall = <div className='fall'></div>;
const winter = <div className='winter'></div>;

const Chart = () => (
    <div className="chart">
      {/* Header */}
      <div></div>
      <p className="vegetable"><strong>Blanch</strong></p>
      <p className="vegetable"><strong>Saute</strong></p>
      <p className="vegetable"><strong>Steamy Saute</strong></p>
      <p className="vegetable"><strong>Roast</strong></p>
      <p className="vegetable"><strong>Long-Cook</strong></p>
      <p className="vegetable"><strong>Grill</strong></p>

      {/* Vegetable lists */}
      <Vegetable name="Artichokes" blanch={[spring, fall]} steamySaute={[spring, fall]} roast={[spring, fall]} longCook={[spring, fall]} grill={[spring, fall]}/>
      <Vegetable name="Asparagus" blanch={spring} saute={spring} steamySaute={spring} roast={spring} grill={spring}/>
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
