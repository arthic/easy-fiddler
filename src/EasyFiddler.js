import React, {useState} from 'react';
import './App.css';
import { InputRegex } from './components/AddRegex';
import { Regex } from './components/Regex';
import { getRegex } from './helpers/getRegex';

function EasyFiddler({ defaultCategories = ['ingresa tu regex'] }) {

  const [URL, setURL] = useState(
		defaultCategories
	)
  const {state} = useGetRegex()
  return (
    <div className="App">
      <h1>Easy Fiddler</h1>

      <InputRegex setRegex={setURL} />

      <Regex urlRegex={URL} />

    </div>
  );
}

export default EasyFiddler;
