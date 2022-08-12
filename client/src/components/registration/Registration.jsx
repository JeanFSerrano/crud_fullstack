import { FormControl, TextField, Button, Box, Typography } from '@mui/material'
import { useState } from 'react'
import Axios from 'axios'

const Registration = () => {

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState([]);
    const [successMessage, setSuccessMessage] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await Axios.post('http://localhost:3001/', {
            name: name,
            lastname: lastname,
            email: email,
            password: password
        })
            .then(() => {
                setUsers([...users, {
                    name: name,
                    lastname: lastname,
                    email: email,
                    password: password
                }])
            })

        setName('')
        setLastname('')
        setEmail('')
        setPassword('')

    }
    
    return (

        <Box display='flex' alignItems='center' justifyContent='center'>
            <FormControl
                component="form"
                size='medium'
                width='400px'
            >
                <Typography>
                    <Box display='flex' flexDirection='column' gap={2} padding='2rem' borderRadius='5px' textAlign='center' width='500px' margin='auto' marginTop='4rem' backgroundColor='whitesmoke'>
                        <h2>Faça o cadastro</h2>
                        <TextField
                            label='Digite seu nome'
                            type='text'
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            label='Digite seu sobrenome'
                            type='text'
                            required
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                        <TextField
                            label='Digite o email'
                            type='email'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Digite a senha"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type='submit'
                            sx={{ py: 2, px: 10, mt: 2 }} variant='contained'
                            color='success'
                            onClick={handleSubmit}
                        >Cadastrar</Button>
                    </Box>
                </Typography>
            </FormControl>
        </Box>

    )
}

export default Registration