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

      <Vegetable name="Beets" blanch={[spring, summer, fall, winter]} steamySaute={[spring, summer, fall, winter]} roast={[spring, summer, fall, winter]}/>

      <Vegetable name="Broccoli" blanch={[spring, summer, fall, winter]} steamySaute={[spring, summer, fall, winter]} roast={[spring, summer, fall, winter]} longCook={[spring, summer, fall, winter]} grill={[spring, summer, fall, winter]}/>

      <Vegetable name="Broccoli Rabe" blanch={[spring, fall, winter]} steamySaute={[spring, fall, winter]} roast={[spring, fall, winter]} longCook={[spring, fall, winter]} grill={[spring, fall, winter]}/>

      <Vegetable name="Brussel Sprouts" blanch={[fall, winter]} saute={[fall, winter]} steamySaute={[fall, winter]} roast={[fall, winter]} longCook={[fall, winter]} grill={[fall, winter]}/>

      <Vegetable name="Cabbage" blanch={[spring, summer, fall, winter]} saute={[spring, summer, fall, winter]} steamySaute={[spring, summer, fall, winter]} roast={[spring, summer, fall, winter]} longCook={[spring, summer, fall, winter]}/>

      <Vegetable name="Carrots" blanch={[spring, summer, fall, winter]} steamySaute={[spring, summer, fall, winter]} roast={[spring, summer, fall, winter]}/>

      <Vegetable name="Cauliflower" blanch={[spring, summer, fall, winter]} steamySaute={[spring, summer, fall, winter]} roast={[spring, summer, fall, winter]} longCook={[spring, summer, fall, winter]} grill={[spring, summer, fall, winter]}/>

      <Vegetable name="Celery Root" blanch={[spring, fall]} steamySaute={[spring, fall]} roast={[spring, fall]}/>

      <Vegetable name="Chard" blanch={[spring, summer, fall]} saute={[spring, summer, fall]} steamySaute={[spring, summer, fall]} longCook={[spring, summer, fall]}/>

      <Vegetable name="Collards" blanch={[spring, summer, fall, winter]} steamySaute={[spring, summer, fall, winter]} longCook={[spring, summer, fall, winter]}/>

      <Vegetable name="Corn" blanch={summer} saute={summer} roast={summer} grill={summer}/>

      <Vegetable name="Eggplant" saute={summer} roast={summer} grill={summer}/>

      <Vegetable name="Fava Beans" blanch={spring} steamySaute={spring} longCook={spring}/>

      <Vegetable name="Fennel" blanch={[spring, summer, fall, winter]} saute={[spring, summer, fall, winter]} steamySaute={[spring, summer, fall, winter]} roast={[spring, summer, fall, winter]} longCook={[spring, summer, fall, winter]} grill={[spring, summer, fall, winter]}/>

      <Vegetable name="Green Beans" blanch={[spring, summer]} saute={[spring, summer]} steamySaute={[spring, summer]} longCook={[spring, summer]}/>

      <Vegetable name="Kale" blanch={[spring, summer, fall, winter]} saute={[spring, summer, fall, winter]} steamySaute={[spring, summer, fall, winter]} longCook={[spring, summer, fall, winter]}/>

      <Vegetable name="Leeks" blanch={[spring, summer, fall, winter]} saute={[spring, summer, fall, winter]} steamySaute={[spring, summer, fall, winter]} roast={[spring, summer, fall, winter]} longCook={[spring, summer, fall, winter]} grill={[spring, summer, fall, winter]}/>

      <Vegetable name="Mushrooms" saute={[spring, summer, fall, winter]} roast={[spring, summer, fall, winter]} grill={[spring, summer, fall, winter]}/>

      <Vegetable name="Onions" blanch={[spring, summer, fall, winter]} saute={[spring, summer, fall, winter]} steamySaute={[spring, summer, fall, winter]} roast={[spring, summer, fall, winter]} longCook={[spring, summer, fall, winter]} grill={[spring, summer, fall, winter]}/>

      <Vegetable name="Parsnips" blanch={[fall, winter]} steamySaute={[fall, winter]} roast={[fall, winter]}/>

      <Vegetable name="Peas" blanch={spring} saute={spring}/>

      <Vegetable name="Peppers" saute={summer} roast={summer} longCook={summer} grill={summer}/>

      <Vegetable name="Potatoes" blanch={[spring, summer, fall, winter]} steamySaute={[spring, summer, fall, winter]} roast={[spring, summer, fall, winter]} grill={[spring, summer, fall, winter]}/>

      <Vegetable name="Romanesco" blanch={[spring, fall, winter]} steamySaute={[spring, fall, winter]} roast={[spring, fall, winter]} longCook={[spring, fall, winter]} grill={[spring, fall, winter]}/>

      <Vegetable name="Scallions" saute={[spring, summer, fall, winter]} roast={[spring, summer, fall, winter]} grill={[spring, summer, fall, winter]}/>

      <Vegetable name="Snap Peas" blanch={spring} saute={spring} roast={spring} longCook={spring} grill={spring}/>

      <Vegetable name="Spinach" blanch={spring} saute={spring} longCook={spring}/>

      <Vegetable name="Summer Squash" saute={summer} roast={summer} longCook={summer} grill={summer}/>

      <Vegetable name="Sweet Potatoes" blanch={[spring, summer, fall, winter]} steamySaute={[spring, summer, fall, winter]} roast={[spring, summer, fall, winter]} grill={[spring, summer, fall, winter]}/>

      <Vegetable name="Tomatoes" saute={summer} roast={summer} grill={summer}/>

      <Vegetable name="Turnips" blanch={[spring, summer, fall, winter]} saute={[spring, summer, fall, winter]} steamySaute={[spring, summer, fall, winter]} roast={[spring, summer, fall, winter]} longCook={[spring, summer, fall, winter]} grill={[spring, summer, fall, winter]}/>

      <Vegetable name="Winter Squash" blanch={[fall, winter]} steamySaute={[fall, winter]} roast={[fall, winter]} longCook={[fall, winter]} grill={[fall, winter]}/>
    </div>
);

export default Chart;
