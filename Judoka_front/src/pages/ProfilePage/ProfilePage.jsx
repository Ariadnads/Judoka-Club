 import React, { useState, useEffect } from "react";
 import {
  Card,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import "./ProfilePage.css";
import ProfileCardInfo from "../../Components/ProfileCardInfo/ProfileCardInfo";
import { getJudoka, getUserAndJudoka } from "../../services/judoka.service";


function ProfilePage() {
  const [user, setUsers] = useState([]);
  const userEmail = localStorage.getItem("userEmail");

  
  const getJudokaInfo = async () => {
    const result = await getUserAndJudoka(userEmail)
    setUsers(result)
  };

  useEffect(() => {
    getJudokaInfo()
  }, [])  

  if (user.length !== 0) {
    return (
      <>
        <div className="container">
          <ProfileCardInfo judokas={user.judokas} />
        </div>
      </>
    );
  }
}



export default ProfilePage