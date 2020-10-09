import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(3, 0 ,2)
  }
}));

const EmailForm = () => {
  const { form } = useStyles();

  return (
    <form className={form}>
      <TextField id="name-input" label="Name" variant="outlined" required />
      <TextField id="email-input" label="Email" variant="outlined" required />
      <TextField id="message-input" label="Message" variant="outlined" required />
      <Button>Submit</Button>
    </form>
  )
}

export default EmailForm
