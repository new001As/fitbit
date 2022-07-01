import React,{ useEffect, useState} from 'react';
import Recipe from './Recipe'
import './recipe.css';

const App = () =>{

  const APP_ID = "043f3de0";
  const APP_KEY = "0db57a784b5dba46996f17eec9b19fcb";

  const exampleREq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  const [recipes, setRecipes]= useState([]);
  const [search, setSearch]=useState("");
  const [query, setQuery]=useState('orange')

  useEffect( ()=>{
    getRecipes ();
  }, [query]);

  const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=15`)
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);

  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
     <form onSubmit={getSearch} className="search-form">
       <input className="search-bar" type="text" placeholder="Search for rececipes according to ingredients" value={search} onChange={updateSearch}/>
       <button  className="search-button" type="submit">search</button>
     </form>
     <div className="recipes">
    {recipes.slice(0, 15).map(recipe =>(
     <Recipe
     key={recipe.recipe.label}
     title={recipe.recipe.label} 
     calories={recipe.recipe.calories}
     image={recipe.recipe.image}
    //  ingredients={recipe.recipe.ingredients}
     url={recipe.recipe.url}
     cuisine={recipe.recipe.cuisineType}
     meal={recipe.recipe.mealType}
     dish={recipe.recipe.dishType}
     labels={recipe.recipe.dietLabels}
     />
    ))}
    </div>
    </div>
  )
}

export default App;