import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'

type Props = {}
const Header = (props: Props) => {
    return (
        <>
            <AppBar
                position="static"
                style={{
                    background: 'blueviolet',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Exam FE2609 Kovalenko Iryna
                        </Typography>
                        <Button color="inherit">
                            Task-1
                        </Button>
                        <Button color="inherit">
                            Task-2
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
export default Header
