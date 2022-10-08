import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
<<<<<<< HEAD
=======
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
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { history } from "../..";
import agent from "../../App/api/agent";
import { toast } from "react-toastify";

export default function Register() {
=======
import { FieldValues, useForm } from "react-hook-form";
import { Paper } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch } from "../../App/store/configureStore";
import { signInUser } from "./accountSlice";
import { history } from "../..";
import { toast } from "react-toastify";
import agent from "../../App/api/agent";

export default function Register() {
  const dispatch = useAppDispatch();

>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors, isValid },
  } = useForm<{ username: ""; email: ""; password: "" }>({ mode: "all" });

<<<<<<< HEAD
  //setError ระบุค่าผิดพลาดให้แสดงใหม่ ที่ส่งมาจาก API
=======
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
  function handleApiErrors(errors: any) {
    if (errors) {
      errors.forEach((error: string) => {
        if (error.includes("Password")) {
          setError("password", { message: error });
        } else if (error.includes("Email")) {
          setError("email", { message: error });
        } else if (error.includes("Username")) {
          setError("username", { message: error });
        }
      });
    }
  }

<<<<<<< HEAD
=======
  //FieldValues คือ ค่าทั้งหมดภายใน Form
  async function submitForm(data: FieldValues) {
    await dispatch(signInUser(data));
    history.push("/catalog"); //มาจาก index.tsx
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
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit((data) =>
            agent.Account.register(data)
              .then(() => {
                toast.success("Registration successful - you can now login");
                history.push("/login");
              })
              .catch((error) => handleApiErrors(error))
          )}
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
            fullWidth
            label="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+[\w-.]*@\w+((-\w+)|(\w*)).[a-z]{2,3}$/,
                message: "Not a valid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors?.email?.message}
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
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
<<<<<<< HEAD
                  /(?=^.{6,20}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/,
=======
                  /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/,
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
                message: "Password is not complex enough",
              },
            })}
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
<<<<<<< HEAD
            Register
          </LoadingButton>
          <Grid container>
            <Grid item>
            <Link to="/login">{"Already have an account? Sign in"}</Link>
=======
            Sign In
          </LoadingButton>
          <Grid container>
            <Grid item>
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
