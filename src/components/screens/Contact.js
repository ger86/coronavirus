import React, {useState} from 'react';
import FormGroup from 'components/UI/FormGroup';
import Label from 'components/UI/Label';

const Contact = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`${fullname} ${email} ${message}`);
  }

  function handleChangeFullname(event) {
    setFullname(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangeMessage(event) {
    setMessage(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Nombre completo:</Label>
        <input type="text" value={fullname} onChange={handleChangeFullname} />
      </FormGroup>
      <FormGroup>
        <Label>Email:</Label>
        <input type="text" value={email} onChange={handleChangeEmail} />
      </FormGroup>
      <FormGroup>
        <Label>Message:</Label>
        <textarea value={message} onChange={handleChangeMessage} />
      </FormGroup>
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default Contact;