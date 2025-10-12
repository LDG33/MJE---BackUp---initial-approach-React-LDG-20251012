import React from 'react'
import { useState } from 'react';

function HowManyLang() {
  const [preferences, setPreferences] = useState({
    twoLang: false,
    threeLang: false,
    fourLang: false
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
          name="twoLang"
          checked={preferences.twoLang}
          onChange={handleChange}
        />
        Two Languages
      </label>
      <label>
        <input
          type="checkbox"
          name="threeLang"
          checked={preferences.threeLang}
          onChange={handleChange}
        />
        Three Languages
      </label>
      <label>
        <input
          type="checkbox"
          name="fourLang"
          checked={preferences.fourLang}
          onChange={handleChange}
        />
        Four Languages
      </label>

    </form>
  );
}


const LangHowMany2 = () => {
  return (
    <div>{HowManyLang()}</div>
  )
}

export default LangHowMany2