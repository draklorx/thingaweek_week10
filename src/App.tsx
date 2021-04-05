import React, { FunctionComponent, useState } from 'react';
import { 
  Container
} from '@material-ui/core';

import './App.css';
import InputNameForm from './modules/input_name_form/InputNameForm';
import OutputColorScheme from './modules/output_color_scheme/OutputColorScheme';

const App:FunctionComponent = () => {

  const [outputColors, setOutputColors] = useState<string[]>([]);

  const generateColorSchemeFromName = (inputName:string) => {
    // set offset of unicode lower case alphabet (to convert to 0-25)
    const offset:number = 97;
    
    // setup ratio to convert letter to hexedecimal number
    const ratioAlphaToHex:number = 16/26;

    // setup return array of colors
    let colors:string[] = [];

    // make sure string is lowercase and all non letter characters are removed
    let stringLeft = inputName.toLowerCase().replace(/[^a-z]/g, "");


    while (stringLeft.length > 0) {
      let stringSegment = "";
      if (stringLeft.length >= 6) {
        stringSegment = stringLeft.substring(0, 6);
        stringLeft = stringLeft.substring(6);
      }
      else if (stringLeft.length >= 3) {
        stringSegment = stringLeft.substring(0, 3);
        stringLeft = stringLeft.substring(3);
      }
      else if (stringLeft.length >= 2) {
        stringSegment = stringLeft.substring(0, 2);
        stringLeft = stringLeft.substring(2);
      }
      else {
        stringSegment = stringLeft.substring(0, 1);
        stringLeft = stringLeft.substring(1);
      }
      let colorHex = "";
      for (let i:number=0; i<stringSegment.length; i++) {
        let letterNumber = stringSegment.charCodeAt(i) - offset;
        colorHex += Math.round(letterNumber*ratioAlphaToHex).toString(16);
      }
      // if the colorHex value is 2 characters are fewer we will triple it up to make a gray
      if (colorHex.length == 3) {
        let tempColors:string[] = colorHex.split("");
        colorHex = tempColors[0]+tempColors[0]+tempColors[1]+tempColors[1]+tempColors[2]+tempColors[2];
      }
      else if (colorHex.length == 2) {
        colorHex = colorHex+colorHex+colorHex;
      }
      else if (colorHex.length == 1) {
        colorHex = colorHex+colorHex+colorHex+colorHex+colorHex+colorHex;
      }
      colors.push(colorHex);
    }
    setOutputColors(colors);
  }

  return (
    <Container className="App" maxWidth="md">
      <h1>Generate a Color Scheme from a Name</h1>
      <InputNameForm onInputNameFormSubmit={generateColorSchemeFromName}/>
      <OutputColorScheme colors={outputColors}/>
    </Container>
  );
}

export default App;
