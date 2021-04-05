import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import { 
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel
} from '@material-ui/core';
import './InputNameForm.css';

interface InputNameFormProps {
  onInputNameFormSubmit: ((name:string) => void)
}

const InputNameForm:FunctionComponent<InputNameFormProps> = ({onInputNameFormSubmit}) => {

  const [inputName, setInputName] = useState<string>("");

  const onNameChanged = (e:ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  }
  const onGenerateClicked = () => {
    onInputNameFormSubmit(inputName);
  }
  return (
    <Grid container direction="column" alignItems="center">
        <FormControl>
            <InputLabel htmlFor="Name">Your name</InputLabel>
            <Input id="Name" aria-describedby="NameHelperText" onChange={onNameChanged}/>
            <FormHelperText id="NameHelperText">Enter your name here and press generate!</FormHelperText>
        </FormControl>
        <Button variant="contained" color="primary" onClick={onGenerateClicked}>Generate</Button>
      </Grid>
  );
}

export default InputNameForm;
