"use client";

import { FormEvent, SyntheticEvent, useState } from "react";
import RichText from "../components/RichText";
import Cookies from 'js-cookie'

export default function ArticleForm() {
  const [formData, setformData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;

    setformData({
      ...formData,
      [target?.name]: target?.value
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await fetch("http://localhost:3001/api/blog", {
        method: "POST",
        body: JSON.stringify(formData),
        credentials: "include",
        headers: {
          authorization: Cookies.get('dcj_acc_token') || ''
        }
      });

    } catch (error) {
      console.log('error');
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" id="title" onChange={handleChange} value={formData?.title} />
      <RichText onChange={handleChange} value={formData?.content} />
      <button type="submit">Submit</button>
    </form>
  );
}
