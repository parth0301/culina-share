// src/pages/Contribute.jsx
import React, { useState, useContext } from 'react';
import RecipeContext from '../RecipeContext';
import './Contribute.css'; // Import your Contribute styles

const Contribute = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
  });

  const [submitStatus, setSubmitStatus] = useState(null);
  const { recipes, setRecipes } = useContext(RecipeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the fields is missing
    if (!recipe.title || !recipe.ingredients || !recipe.instructions) {
      setSubmitStatus('failure');
      return;
    }

    // Simulate backend processing (replace with actual API call)
    setTimeout(() => {
      // For demonstration, always set submitStatus to 'success'
      setSubmitStatus('success');

      // Update recipes context with the new recipe
      setRecipes((prevRecipes) => [...prevRecipes, recipe]);

      // Clear form after successful submission
      setRecipe({
        title: '',
        ingredients: '',
        instructions: '',
      });
    }, 1000);
  };

  return (
    <div className="contribute-container">
      <h2>Contribute Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Recipe Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={recipe.title}
          onChange={handleChange}
        />

        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="instructions">Instructions:</label>
        <textarea
          id="instructions"
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      {submitStatus && (
        <div className={`submit-message ${submitStatus}`}>
          {submitStatus === 'success' ? 'Recipe submitted successfully!' : 'All fields are required. Please fill in all details.'}
        </div>
      )}
    </div>
  );
};

export default Contribute;
