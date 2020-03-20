import React, {useReducer, useState} from 'react';
import FormGroup from 'components/UI/FormGroup';
import Label from 'components/UI/Label';

const MODIFY_INPUT = 'MODIFY_INPUT';

const initialState = {
  fullname: '',
  email: '',
  message: ''
};

function reducer(state, action) {
  if (action.type === MODIFY_INPUT) {
    return {
      ...state,
      [action.field]: action.value
    };
  } else {
    return state;
  }
}

const Contact = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [image, setImage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const {fullname, email, message} = state;
    console.log(`${fullname} ${email} ${message}`);
    console.log(image);
  }

  function handleChangeInput(event) {
    dispatch({
      type: MODIFY_INPUT,
      field: event.target.name,
      value: event.target.value
    });
  }

  function handleChangeFile(event) {
    setImage(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Nombre completo:</Label>
        <input name="fullname" type="text" value={state.fullname} onChange={handleChangeInput} />
      </FormGroup>
      <FormGroup>
        <Label>Email:</Label>
        <input name="email" type="text" value={state.email} onChange={handleChangeInput} />
      </FormGroup>
      <FormGroup>
        <Label>Mensaje:</Label>
        <textarea name="message" value={state.message} onChange={handleChangeInput} />
      </FormGroup>
      <FormGroup>
        <Label>Tu foto:</Label>
        <input type="file" onChange={handleChangeFile} />
        {image && <img src={image} alt="Imagen" />}
      </FormGroup>
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default Contact;
