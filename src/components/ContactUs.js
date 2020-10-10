import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import EmailOutlined from '@material-ui/icons/EmailOutlined';
import { makeStyles, Paper, Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const ContactUs = () => {
  const { form, paper, button, avatar } = useStyles();

  const [data, setData] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('submitted data: ', data);
  };

  return (
    <Paper className={paper}>
      <Avatar className={avatar}>
        <EmailOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        Contact Us
      </Typography>
      <form className={form} onSubmit={handleSubmit} autoComplete="off">
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          placeholder="E.g. John Doe"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          margin="normal"
          placeholder="E.g. example123@mail.com"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Message"
          variant="outlined"
          margin="normal"
          placeholder="What are your thoughts...?"
          name="message"
          value={data.message}
          onChange={handleChange}
          multiline
          rows={5}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={button}
          endIcon={<Icon>send</Icon>}
          fullWidth
        >
          Send
        </Button>
      </form>
    </Paper>
  );
};

export default ContactUs;
