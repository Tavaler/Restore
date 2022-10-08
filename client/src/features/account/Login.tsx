<<<<<<< HEAD
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
=======
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
<<<<<<< HEAD
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
=======
import { FieldValues, useForm } from "react-hook-form";
import { Paper } from "@mui/material";
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
import { LoadingButton } from "@mui/lab";
import { useAppDispatch } from "../../App/store/configureStore";
import { signInUser } from "./accountSlice";
import { history } from "../..";

<<<<<<< HEAD

export default function Login() {
=======
export default function SignIn() {
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm<{ username: ""; password: "" }>({ mode: "all" });

<<<<<<< HEAD
  //FieldValues คือ ค่าทั้งหมดภายใน Form
  async function submitForm(data: FieldValues) {
    try {
      await dispatch(signInUser(data));
      history.push("/catalog"); //มาจาก index.tsx
    } catch (error) {
      console.log(error);
    }

    
    
  }
=======

  //FieldValues คือ ค่าทั้งหมดภายใน Form
  async function submitForm(data: FieldValues) {
    try{
    await dispatch(signInUser(data));
    history.push("/catalog"); //มาจาก index.tsx
    }catch (error){
      console.log(error)
    }
    }
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67

  return (
    <Container
      component={Paper}
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
      }}
    >
      <Box
        sx={{
<<<<<<< HEAD
          marginTop: 2,
=======
          marginTop: 8,
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(submitForm)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
<<<<<<< HEAD
            fullWidth
            label="User name"
=======
            required
            fullWidth
            label="Username"
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
            autoFocus
            {...register("username", { required: "Username is required" })}
            error={!!errors.username}
            helperText={errors?.username?.message}
          />
          <TextField
            margin="normal"
<<<<<<< HEAD
            fullWidth
            label="Password"
            type="password"
=======
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors?.password?.message}
          />
          <LoadingButton
            disabled={!isValid}
            loading={isSubmitting}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </LoadingButton>
          <Grid container>
            <Grid item>
<<<<<<< HEAD
              <Link to="/register">{"Don't have an account? Sign Up"}</Link>
=======
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
