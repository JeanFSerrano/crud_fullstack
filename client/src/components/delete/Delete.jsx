import { Box, Button, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Delete = () => {

    const [users, setUsers] = useState('')

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

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3001/remove/${id}`)
            .then(res => {
                setUsers(users.filter(user => {
                    return user.id != id
                }))
            })
    }

    return (
        <Box display='flex' alignItems='center' justifyContent='center'>
            <Box
                marginTop='4rem'
                display='flex'
                flexDirection='column'
                justifyContenxt='space-between'
                alignItems='center'
                gap={3}
                backgroundColor='white'
                padding='2rem'
                borderRadius='5px'
                width='40%'
            >
                <Box display='flex' flexWrap='wrap' alignItems='flex-start' justifyContent='space-between'>

                    {users?.length > 0 ? users.map(user => (

                        <Box
                            display='flex'
                            align-alignItems='center'
                            justifyContent='space-between'
                            width='100%'
                            key={user.id}
                            gap={2}
                            padding='1rem'
                        >
                            <Box>
                                <Typography fontWeight='bold'>
                                    <ul>
                                        <li>Nome: {user.name}</li>
                                        <li>Sobrenome: {user.lastname} </li>
                                        <li>Email: {user.email} </li>
                                        <li>Password: {user.password} </li>
                                    </ul>
                                </Typography>
                            </Box>
                            <Box>
                                <Button variant='contained' color='error' onClick={() => deleteUser(user.id)}>
                                    Deletar
                                </Button>
                            </Box>
                        </Box>
                    )) : <Typography variant='h6'>Não há usuários cadastrados no sistema.</Typography>}
                </Box>
            </Box>
        </Box>
    )
}

export default Delete