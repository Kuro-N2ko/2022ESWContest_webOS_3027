import  { useState } from "react";
import {  doc,  updateDoc } from "firebase/firestore";
import { Receive } from "./Receive";
import { db } from "../firebase";
import styled from "styled-components";
import LS2Request from '@enact/webos/LS2Request';

const Send = () => {
  const [text, setText] = useState("시작");
  const [bool, setBool] = useState(false);
  const bucket = doc(db, "Recog", "rec");


  var webOSBridge = new LS2Request();

  const creatToast = () => {
    var parms = {
       "message": "mode changed"
    }

    var lsRequest = {
       "service":"luna://com.webos.notification",
       "method":"createToast",
       "parameters": parms,
       "onSuccess": onToastSuccess,
       "onFailure": onToastFailure
    };
    webOSBridge.send(lsRequest);
 }
 const onToastSuccess = (msg) => {
  console.log(msg);
}

const onToastFailure = (msg) => {
  console.log(msg);
}


  const onToggle = async (e) =>  {
    if(bool == true)
    {
      await updateDoc(bucket, {
        isRecog: false
    });
      setText("시작");
      setBool(false);
      creatToast();
    }
    else
    {
      await updateDoc(bucket, {
        isRecog: true
    });
      setText("종료");
      setBool(true);
      creatToast();
    }
  }


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
          <BTN>

          <button  onClick = {onToggle}>{text}</button>
          </BTN>
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

const BTN = styled.div`
   button {
    width : 300px;
    height : 60px;
    margin-left:40px;
    color : #fff;
    border : #a673ff;
    border-radius: 10px;
    background-color: #a673ff;
  }`

export {Send}