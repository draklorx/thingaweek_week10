import React, { FunctionComponent } from 'react';
import { 
  Grid
} from '@material-ui/core';
import './OutputColorScheme.css';

interface OutputColorSchemeProps {
    colors: string[]
}

const OutputColorScheme:FunctionComponent<OutputColorSchemeProps> = ({colors}) => {

  const getClassName = (hexColor:string) => {
    // convert hex code to decimal r g b colors
    let r = parseInt(hexColor.substring(0,2), 16);
    let g = parseInt(hexColor.substring(2,4), 16);
    let b = parseInt(hexColor.substring(4,6), 16);
    console.log(hexColor);
    console.log(hexColor.substring(0,2),hexColor.substring(2,2),hexColor.substring(4));
    console.log(r,g,b);

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    let hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );

    return hsp > 127.5?"colorSwatchLight":"colorSwatchDark";
  }

  const renderColors = colors.map((hexColor:string, index:number) =>
    <Grid item xs={6} sm={4} md={3} key={index} style={{backgroundColor: "#"+hexColor}} className={"colorSwatch "+getClassName(hexColor)}>#{hexColor}</Grid>
  );

  return (
    <Grid container direction="row" alignItems="center" className="colorSwatches">
        {renderColors}
    </Grid>
  );
}

export default OutputColorScheme;
