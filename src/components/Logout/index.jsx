import React from "react";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const Logout = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    Swal.fire({
      icon: "question",
      title: "Logging Out",
      text: "Are you sure you want to log out?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          icon: "success",
          title: "Logout Succesfully",
          timer: 1500,
          showConfirmButton: false,
          willClose: () => {
            localStorage.setItem("is_authenticated", false);
            setIsAuthenticated(false);
          },
        });
      }
    });
  };

  return (
    <Button
      style={{
        marginLeft: "17px",
        height: "50px",
        borderRadius: "1px",
        marginTop: "8px",
      }}
      variant="danger"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};

export default Logout;
