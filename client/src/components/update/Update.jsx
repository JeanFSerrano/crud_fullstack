import { Box, Button, FormControl, FormLabel, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"

const Update = () => {
    const [users, setUsers] = useState('')

    const [newName, setNewName] = useState('')
    const [newLastname, setNewLastname] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const getUsers = async (url) => {
        const res = axios.get(url)
            .then(response => {
                setUsers(response.data)
            })
    }

    useEffect(() => {

        const url = 'http://localhost:3001/'

        getUsers(url)

    }, [])

    const updateUser = async (id) => {
        axios.put(`http://localhost:3001/update/${id}`, {
            newName: newName,
            newLastname: newLastname,
            newEmail: newEmail,
            newPassword: newPassword
        })
            .then(response => {
                setUsers(users.map(user => {
                    return user.id === id ? {
                        name: newName,
                        lastname: newLastname,
                        email: newEmail,
                        password: newPassword
                    } : user
                }))
            })
    }

    return (
        <Box display='flex' alignItems='center' justifyContent='center'>

            <Box
                marginTop='4rem'
                display='flex'
                justifyContenxt='space-between'
                alignItems='center'
                gap={3}
                backgroundColor='white'
                padding='1rem'
                borderRadius='5px'
                width='60%'>

                {users?.length > 0 ? users.map(user => (

                    <Box
                        display='flex'
                        align-alignItems='center'
                        justifyContent='center'
                        width='100%'
                        key={user.id}
                    >

                        <Box width='90%'>
                            <Typography fontWeight='bold'>
                                <FormControl sx={{ width: '100%' }}>
                                    <FormLabel>Nome</FormLabel>
                                    <TextField
                                        name="name"
                                        label={user.name}
                                        placeholder='Atualize o nome'
                                        onChange={(e) => setNewName(e.target.value)}
                                        color='warning'
                                        variant='filled'
                                    />
                                    <FormLabel>Sobrenome</FormLabel>
                                    <TextField
                                        name='lastname'
                                        label={user.lastname}
                                        placeholder='Atualize o sobrenome'
                                        onChange={(e) => setNewLastname(e.target.value)}
                                        color='warning'
                                        variant='filled'
                                    />
                                    <FormLabel>Email</FormLabel>
                                    <TextField
                                        type='email'
                                        name='email'
                                        label={user.email}
                                        placeholder='Atualize o email'
                                        onChange={(e) => setNewEmail(e.target.value)}
                                        color='warning'
                                        variant='filled'
                                    />
                                    <FormLabel>Senha</FormLabel>
                                    <TextField
                                        type='text'
                                        name='password'
                                        label={user.password}
                                        placeholder='Atualize a senha'
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        color='warning'
                                        variant='filled'
                                    />
                                </FormControl>
                            </Typography>
                            <Box display='flex' alignItems='center' justifyContent='center' marginTop='1rem'>
                                <Button variant='contained' color='warning' onClick={() => updateUser(user.id)}>
                                    Atualizar
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                )) : <Box width='100%' textAlign='center'>
                    <Typography variant='h6' component='h2'>Cadastre usuários no sistema...</Typography>
                </Box> }
            </Box>
        </Box>
    )
}

export default Update