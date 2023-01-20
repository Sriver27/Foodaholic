import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { useState } from 'react';
import RecipeTile from './RecipeTile';

function App() {
const [query, setquery] = useState("");
const [recipe, setrecipe] = useState([]);
const [health, sethealth] = useState("vegan")

const YOUR_APP_ID = 'd0322342';
const YOUR_APP_KEY='2af4938dd3bab3dc888c0f6c49a4c338';

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${health}`;

  async function getRecipes(){
    var res= await Axios.get(url);
    setrecipe(res.data.hits);
    console.log(res.data);
  }

  const submit = (e)=>{
    e.preventDefault();
    getRecipes();
  }

  return (
  
   <div className="app">
    <h1 style={{fontSize: '4vw'}}>🤤Food Recipe Plaza🍕</h1>
    <form action="" className="app__searchForm" onSubmit={submit}>
      <input type="text" className="app__input" placeholder="enter ingredients" value={query} onChange={(e)=> setquery(e.target.value)}/>
      <input className="app__submit" type="submit" value="Search" />

      <select name="" id="" className="app__healthLabels">
        <option value="" onClick={()=>sethealth("vegan")}>Vegan</option>
        <option value="" onClick={()=>sethealth("alcohol-cocktail")}>Alcohol-Cocktail</option>
        <option value="" onClick={()=>sethealth("alcohol-free")}>Alcohol-Free</option>
        <option value="" onClick={()=>sethealth("celery-free")}>Celery-Free</option>
        <option value="" onClick={()=>sethealth("crustacean-free")}>Crustcean-Free</option>
        <option value="" onClick={()=>sethealth("dairy-free")}>Dairy-Free</option>
        <option value="" onClick={()=>sethealth("DASH")}>DASH</option>
        <option value="" onClick={()=>sethealth("egg-free")}>Egg-Free</option>
        <option value="" onClick={()=>sethealth("fish-free")}>Fish-Free</option>
        <option value="" onClick={()=>sethealth("fodmap-free")}>FODMAP-Free</option>
        <option value="" onClick={()=>sethealth("gluten-free")}>Gluten-Free</option>
        <option value="" onClick={()=>sethealth("immuno-supportive")}>Immuno-Supportive</option>
        <option value="" onClick={()=>sethealth("keto-friendly")}>Keto-Friendly</option>
        <option value="" onClick={()=>sethealth("kidney-friendly")}>Kidney-Friendly</option>
        <option value="" onClick={()=>sethealth("kosher")}>Kosher</option>
        <option value="" onClick={()=>sethealth("low-potassium")}>Low Potassium</option>
        <option value="" onClick={()=>sethealth("wheat-free")}>Wheat-Free</option>
        <option value="" onClick={()=>sethealth("vegetarian")}>Vegetarian</option>
        <option value="" onClick={()=>sethealth("tree-nut-free")}>Tree-Nut-Free</option>
        <option value="" onClick={()=>sethealth("sulfite-free")}>Sulfite-Free</option>
        <option value="" onClick={()=>sethealth("sugar-conscious")}>Sugar-Conscious</option>
        <option value="" onClick={()=>sethealth("soy-free")}>Soy-Free</option>
        <option value="" onClick={()=>sethealth("shellfish-free")}>Shellfish-Free</option>
        <option value="" onClick={()=>sethealth("sesame-free")}>Sesame-Free</option>
        <option value="" onClick={()=>sethealth("red-meat-free")}>Red-Meat-Free</option>
        <option value="" onClick={()=>sethealth("pork-free")}>Pork-Free</option>
        <option value="" onClick={()=>sethealth("pecatarian")}>Pescatarian</option>
        <option value="" onClick={()=>sethealth("paleo")}>Paleo</option>
        <option value="" onClick={()=>sethealth("No-oil-added")}>No oil added</option>
        <option value="" onClick={()=>sethealth("mustard-free")}>Mustard-Free</option>
        <option value="" onClick={()=>sethealth("mollusk-free")}>Mollusk-Free</option>
        <option value="" onClick={()=>sethealth("Mediterranean")}>Mediterranean</option>
        <option value="" onClick={()=>sethealth("lupine-free")}>Lupine-Free</option>
        <option value="" onClick={()=>sethealth("low-sugar")}>Low Sugar</option>
      </select>
    </form>

    <div className="app__recipes">
      {recipe.map((recipe)=>{
        return <RecipeTile recipe={recipe} key={recipe["recipe"]["uri"]} />;
      })}
    </div>

   </div>

  );
}

export default App;
