import { AppBar, Typography,Button, Toolbar, Grid, Dialog, DialogContent, DialogActions} from '@mui/material';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import React from 'react';
import Login from '../Pages/Login.js'
import HomeIcon from '@mui/icons-material/Home';



export default function Navbar(){

    const [showDialogLogin, setShowDialogLogin] = React.useState(false);
    
    const openDialogLogin = () => {
        setShowDialogLogin(true);
    }

    const closeDialogLogin = () => {
        setShowDialogLogin(false)
    }   

    return(
        <>
        <Grid container>
         <AppBar position="static" color='primary'>
            <Toolbar >
                
              <Typography variant="h6" style={{flexGrow:1, textDecoration:'none', color:'inherit', fontSize:'30px'}}  >
               Just Dabba
             </Typography> 
             
             {/* Home Link */}
             <Button  color="inherit" component={Link} to="/"  ><HomeIcon style={{fontSize:'20px'}} />Home</Button>
             
             {/* Login Link  */}
            <Button onClick={openDialogLogin} color="inherit"  ><LoginIcon style={{fontSize:'20px'}} />Login</Button>
             <Dialog open={showDialogLogin} onClose={closeDialogLogin} >
                <DialogContent>
                <Login/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialogLogin}>close</Button>
                </DialogActions>              
             </Dialog>                      
                        
            </Toolbar>            
        </AppBar>
        </Grid>
        </>
    );
}