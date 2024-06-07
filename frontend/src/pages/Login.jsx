import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Typography,
  Button,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { useInputValidation, useFileHandler, useStrongPassword } from "6pp";
import { emailValidator } from "../utils/validators";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev) => !prev);
  const name = useInputValidation("");
  const email = useInputValidation("", emailValidator);
  const password = useStrongPassword("");
  const avatar = useFileHandler("single");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(name.value, email.value, password.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(name.value, email.value, password.value);
  };
  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={handleLogin}
            >
              <TextField
                required
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                variant="outlined"
                value={email.value}
                onChange={email.onChange}
              />
              <TextField
                required
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.onChange}
              />
              <Button
                sx={{ marginTop: "1rem" }}
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Login
              </Button>
              <hr />
              <Typography textAlign={"center"} m={"1rem"}>
                Don't have an account?{" "}
                <Typography
                  sx={{ marginTop: "1rem" }}
                  variant="text"
                  color="primary"
                  onClick={toggleLogin}
                >
                  Register
                </Typography>
              </Typography>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Register</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={handleSignUp}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  src={avatar.preview}
                />

                {avatar.error && (
                  <Typography color="error" variant="caption">
                    {avatar.error}
                  </Typography>
                )}

                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    bgcolor: "rgba(0,0,0,0.5)",
                    color: "white",
                    ":hover": { bgcolor: "rgba(0,0,0,0.7)" },
                  }}
                  component="label"
                >
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput
                      type="file"
                      onChange={avatar.changeHandler}
                    />
                  </>
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                label="Full Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                variant="outlined"
                value={email.value}
                onChange={email.changeHandler}
              />

              {email.error && (
                <Typography color="error" variant="caption">
                  {email.error}
                </Typography>
              )}

              <TextField
                required
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />

              {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )}

              <Button
                sx={{ marginTop: "1rem" }}
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Sign Up
              </Button>
              <hr />
              <Typography textAlign={"center"} m={"1rem"}>
                Don't have an account?{" "}
                <Typography
                  sx={{ marginTop: "1rem" }}
                  variant="text"
                  color="primary"
                  onClick={toggleLogin}
                >
                  Login
                </Typography>
              </Typography>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
}

export default Login;
