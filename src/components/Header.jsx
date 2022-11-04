import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import AcharyaImg from "../assets/logo.jpg";
import useToken from "../hooks/useToken";

function Header() {
  const navigate = useNavigate();

  const { token } = useToken();

  console.log(token);

  useEffect(() => {
    if (!token) navigate("/Login");
  }, [token]);

  return (
    <>
      <AppBar component="nav" color="headerWhite" elevation={2}>
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              src={AcharyaImg}
              alt="Acharya"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          </Typography>
        </Toolbar>
      </AppBar>
      <Box mt={7.5}>
        <Outlet />
      </Box>
    </>
  );
}

export default Header;
