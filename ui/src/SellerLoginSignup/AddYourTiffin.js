import React from 'react';
import { AppBar, Typography,Button, Toolbar,  Grid} from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

export default function AddYourTiffin(){
    return(
        <>
        
        <Grid container>
         <AppBar position="static" color='primary'>
            <Toolbar >
              <Typography variant="h5" flexGrow={1} >
               Just Dabba
             </Typography>
                <Button component={Link} to='/' color="inherit" startIcon={<HomeIcon/>}>Home</Button>
                <Button component={Link} to='/seller-login' color="inherit" startIcon={<ControlPointIcon/>}>Login</Button>                
            </Toolbar>            
        </AppBar>        
        </Grid>                    
        </>
    );
}