import { useEffect, useState } from 'react'
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Snackbar, SnackbarContent } from '@mui/material';
import reactLogo from './assets/react.svg'
import axios from 'axios';
import './App.css';

const coresDisponiveis = ['VERMELHO', 'LARANJA', 'AMARELO', 'VERDE', 'AZUL', 'ANIL', 'VIOLETA'];


function App() {
  const [greeting,setGreeting] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [corPreferida, setCorPreferida] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
  
  useEffect(() => {
    fetch('/form-api').then((res) => res.text()).then(setGreeting);
  },[]);
  async function handleSubmit (event) {    
    event.preventDefault();
    if (!nomeCompleto || !cpf || !email || !corPreferida) {
      setErrorSnackbarOpen(true);
      return;
    }
    const formData = {
      name: nomeCompleto,
      cpf: cpf,
      email: email,
      favorite_color: corPreferida,
      observation: observacoes,
    };

    await axios.post('/form-api/create-user-form', formData)
      .then((response) => {
        console.log('Requisição enviada com sucesso!', response.data);
        setSuccessSnackbarOpen(true);
      })
      .catch((error) => {
        console.error('Ocorreu um erro na requisição:', error);
        setErrorSnackbarOpen(true);
      });
  }

  return (
    <>
    <div>
        <a href="#">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>{greeting}</h1>
      </div>
    <form>
      <TextField
        label="Nome Completo"
        value={nomeCompleto}
        onChange={(e) => setNomeCompleto(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <FormControl fullWidth required margin="normal">
        <InputLabel>Cor Preferida</InputLabel>
        <Select
          value={corPreferida}
          onChange={(e) => setCorPreferida(e.target.value)}
        >
          {coresDisponiveis.map((cor) => (
            <MenuItem key={cor} value={cor}>{cor}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Observações"
        multiline
        value={observacoes}
        onChange={(e) => setObservacoes(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Enviar
      </Button>
    </form>

    <Snackbar
        open={successSnackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSuccessSnackbarOpen(false)}
      >
        <SnackbarContent
          sx={{
            backgroundColor: 'green',
            color: 'white',
            fontWeight: 'bold',
          }}
          message="Requisição enviada com sucesso!"
        />
      </Snackbar>

      {/* Snackbar for Error */}
      <Snackbar
        open={errorSnackbarOpen}
        autoHideDuration={3000}
        onClose={() => setErrorSnackbarOpen(false)}
      >
        <SnackbarContent
          sx={{
            backgroundColor: 'red',
            color: 'white',
            fontWeight: 'bold',
          }}
          message="Aconteceu um erro!!"
        />
      </Snackbar>
    </>
  )
}

export default App
