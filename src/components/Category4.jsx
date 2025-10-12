import React from 'react'
import { useState } from 'react';

function NbOfTiles3func() {
  const [preferences, setPreferences] = useState({
    easy_x12: false,
    medium_x24: false,
    hard_x48: false
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setPreferences(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  return (
    <form className="stylingForm1">
      <label>
        <input
          type="checkbox"
          name="easy_x12"
          checked={preferences.easy_x12}
          onChange={handleChange}
        />
        Easy_x12
      </label>
      <label>
        <input
          type="checkbox"
          name="medium_x16"
          checked={preferences.medium_x16}
          onChange={handleChange}
        />
        Medium_x16
      </label>
      <label>
        <input
          type="checkbox"
          name="hard_x24"
          checked={preferences.hard_x24}
          onChange={handleChange}
        />
        Hard_x24
      </label>

    </form>
  );
}



const Category4 = () => {
  return (
    <div>Category4</div>
  )
}

export default Category4