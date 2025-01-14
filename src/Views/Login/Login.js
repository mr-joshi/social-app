import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import useStyles from './styles'
import GoogleIcon from '@mui/icons-material/Google';
import image from '../../images/login.png'
import { Button, Divider, TextField } from '@mui/material';
import { Link,useHistory } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import {authActions} from '../../redux/api/auth'
import InputLabel from '@mui/material/InputLabel';
import { useDispatch,useSelector } from 'react-redux';

import FormControl from '@mui/material/FormControl';


  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100% ',
    maxHeight: '100%',
  });

export default function ComplexGrid() {
  const history=useHistory();
    const classes = useStyles();
    const [showPassword, setShowPassword] = React.useState(false);

    const dispatch = useDispatch();



  return (

      <Grid container>     
        <Grid item justifyContent='center' alignItems="center"  sx={{minHeight:"100vh"}} container >
        <Grid item xs={12} md={6}>

            <Img alt="complex" src={image} />
          
        </Grid>
        <Grid item xs={12} md={6} sx={{padding:"20px",}} container justifyContent='center' alignItems="center">
           
            <form className={classes.form}>
           
              <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",width:"100%"}}>
              <p style={{fontWeight:"700" ,margin:"-10px 0",fontSize:"3em"}}>Welcome Back</p>
              <p style={{ margin:"10px 0 30px 0px" }}>Don't have an account? <Link to="signup">Sign Up</Link></p>

            </div> 
        
            <Button variant="outlined" fullWidth onClick={dispatch(authActions())}><GoogleIcon />Sign In with Google</Button>
            <Divider sx={{width:"100%",margin:"10px"  }}>OR</Divider>
            <TextField  sx={{margin:'10px 0px'}}  label="Email" variant="outlined"  fullWidth/>
            <FormControl sx={{ m: 1,margin:"10px 0px" }} fullWidth variant="outlined" >
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput 
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={()=>{setShowPassword(prev=>!prev)}}
                          edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
            <p style={{ margin:"10px 0 30px 0px",alignSelf:"flex-start"  }}> <Link to="#">Forgot Password</Link></p>
           <Button type="submit" fullWidth>Login</Button>
            </form>
        </Grid>
      </Grid>
      </Grid>

  );
}
