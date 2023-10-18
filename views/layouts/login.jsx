import { Grid, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import React, { useState } from "react";
import {
  TextField,
  FormControl,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";


const CardLogin = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [access, setAccess] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [accessError, setAccessError] = useState(false);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    

    setEmailError(false);
    setPasswordError(false);
    setAccessError(false);

    if (access === "") {
      setAccessError(true);
    }

    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
    
    if (email && password && access === "Admin") {
      console.log(email, password, access);
      window.location.href = "/dashboard";
    }
  };

  return (
    <Grid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        style={{
          backgroundColor: colors.blueAccent[900],
          cen: "center",
          maxWidth: "500px",
          margin: 30,
          marginTop: 80,
          borderRadius: 20,
          padding: 20,
          color: colors.greenAccent[200],
        }}
      >
        <CardContent style={{ color: colors.greenAccent[200] }}>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <Typography
              variant="h2"
              color={colors.greenAccent[200]}
              fontWeight="bold"
              sx={{ mb: "5px" }}
              style={{
                marginBottom: 30,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              ThunderFood Login 
            </Typography>
            <FormControl fullWidth sx={{ mb: 3 }} >
              <TextField
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="email"
                value={email}
                error={emailError}
              />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 3 }} >
              <TextField
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="password"
                value={password}
                error={passwordError}
              />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 3 }} >
              <InputLabel id="demo-simple-select-required-label" required>
                Access
              </InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={access}
                error={accessError}
                label="Access *"
                onChange={(e) => setAccess(e.target.value)}
                renderValue={(value) => ` ${value}`}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Admin"}>Admin</MenuItem>
                <MenuItem value={"User"}>User</MenuItem>
                <MenuItem value={"Sales"}>Sales</MenuItem>
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
            <Button
              variant="outlined"
              color="secondary"
              type="submit"
              fullWidth
              
            >
              Login
            </Button>
          </form>
          <small>
            Need an account?{" "}
            <Link to="/" style={{ color: colors.greenAccent[200] }}>
              Register here
            </Link>
          </small>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardLogin;