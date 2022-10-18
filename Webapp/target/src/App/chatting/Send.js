import  { useState } from "react";
import { collection, addDoc, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { Receive } from "./Receive";
import { db } from "../firebase";
import styled from "styled-components";

const Send = () => {
  const [chat, setChat] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db,"messages"),{
        message: chat,
        timestamp: serverTimestamp(),
        user: "target"
    });

    setChat("");
    console.log("success");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setChat(value);
  };

  return (
    <>
      <div className="App">
        <Container>

          <Container3>
          <Container0>
            <Receive/>
          </Container0>
          <iframe src="https://isekaideveloper.herokuapp.com/roo" allow= "camera" title="내용" width="50%" height="620px" margin="20px" ></iframe>
          </Container3>
          <form onSubmit={onSubmit}>
          <Input>
          <input

            value={chat}
            onChange={onChange}
            type="text"
            placeholder="내용을 입력하세요..."
            maxLength={120}
          />
          <button disabled={!chat} type="submit">입력</button>
          </Input>
        </form>
        </Container>
      </div>
    </>

  );
};


const Container = styled.div`
  width: 960px;
  height: 670px;
  background-color: #fff;
  padding: 8px;
  margin: 10px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;
const Container0 = styled.div`
  width: 40%;
  height: 450px;
  background-color: #fff;
  padding: 16px;
  margin: 8px ;
  border-radius: 5px;
  border: 1px solid #ddd;
  overflow-x: hidden;
  overflow-y: auto;
`;
const Container2 = styled.div`
  width: 860px;
  height: 60px;
  background-color: #fff;
  padding: 16px;
  margin: 20px;
 `;
 const Container3 = styled.div`
  width: 880px;
  height: 530px;
  background-color: #fff;
  padding: 8px;
  margin: 10px ;

  display:flex;
`;
const Title = styled.h1`
  margin: -30px;
  font-size: 60px;
  color: #2990FF;
  text-align: center;
  `;

const Line = styled.hr`
  margin-top:60px;
  border: 1px solid #ddd;
`;

const Input = styled.div`
  width: 330px;
  height: 60px;
  background-color: #fff;
  padding: 16px;
  margin-left: 20px;
  margin-right: 16px;
  margin-bottom: 60px;
  margin-top: -30px;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  & > *{
    padding: 5px;
  }
  & input:focus{
    outline: none;
    border: 3px solid #a673ff;
    border-radius: 10px;
  }
  & input {
    margin-right: 10px;
    width : 90%;
  }
  & button {
    width : 10%;
    color : #fff;
    border : #a673ff;
    border-radius: 10px;
    background-color: #a673ff;
  }`

export {Send}

