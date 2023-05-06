"use client";
import Container from "./components/Container";
import History from "./components/History/HIstory";
import Sidebar from "./components/Sidebar/Sidebar";
import "./globals.css";
import axios from "axios";

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setOrdersData } from "./GlobalRedux/orderSlice";

export default function Home() {
  const dispatch = useDispatch();
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get("https://v2.onnow.io/api/v1/order/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDRlNzRmNzkwMjJmMTA1M2IyNTQyMWUiLCJyb2xlIjoiQUNPIiwiaWF0IjoxNjgzMzY0NjMzLCJleHAiOjE2ODM0NTEwMzN9.1vtBD5NJltu3sFuWvDNtIhEgmo0TAYD3xRqjE_z1FDM",
        },
      });
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    dispatch(setOrdersData(data));
  }, [data]);
  return (
    <>
      <Container>
        <Sidebar />
        <History />
      </Container>
    </>
  );
}
