import { AppBar, Toolbar, Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <Box>
            <AppBar position="static" sx={{
                backgroundColor: '#777'
            }}>
                <Toolbar>
                    <Box display='flex' alignItems='center' justifyContent='center' gap={2} width='100%'>
                        <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
                            <Typography fontWeight='bold' variant='button'>
                                Registrar
                            </Typography>
                        </Link>

                        <Link to='/update' style={{ color: 'white', textDecoration: 'none' }}>
                            <Typography fontWeight='bold' variant='button'>
                                Atualizar
                            </Typography>
                        </Link>

                        <Link to='/remove' style={{ color: 'white', textDecoration: 'none' }}>
                            <Typography fontWeight='bold' variant='button'>
                                Deletar
                            </Typography>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default Navbar