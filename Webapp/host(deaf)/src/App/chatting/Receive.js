import { useState, useEffect, forwardRef, createRef } from "react";
import { collection, query, orderBy, onSnapshot, } from "firebase/firestore";
import { db } from "../firebase";
import styled from "styled-components";


const Receive = () => {

  const [chats, setChats] = useState([]);

useEffect( () => {
  try{
    const q = query(
    collection(db, "messages"),
    orderBy("timestamp", "asc")
  );
onSnapshot(q, (snapshot) => {

    const newData = [];

    snapshot.forEach((doc) => {
        newData.push({
            id: doc.id,
            ...doc.data()
          })
       })

   setChats(newData);
 })

}
  catch(error){
    console.log(error.message)
  }

},[]);


  return (

    chats.map(({id, user, message})=>(
        <Message key={id} user={user} message={message}/>
    ))
  );
};

const Message = forwardRef(({ message, user }, ref) => {

    const uid = "host";
    const isUser = uid === user;
    const messagesEndRef = createRef();

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    useEffect(() => {
      scrollToBottom()
    }, [message]);


        return (
            <div ref={ref} className={`message ${isUser && 'msg_user'}`}>
               {isUser?<ItemStyle1>{message}</ItemStyle1>:<ItemStyle2>{message}</ItemStyle2>}
              <div ref = {messagesEndRef}/>
              </div>
        )
    })


    const ItemStyle1 = styled.div`
    padding: 8px;
    width: 45%;
    height: 20px;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 40px;
    background-color: aliceblue;
    margin-left: auto;
    text-align: center;
    border-radius: 5px;
    `;
    const ItemStyle2 = styled.div`
    padding: 8px;
    width: 45%;
    height: 20px;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 40px;
    border-radius: 5px;
    background-color: #EBB0FE;
    text-align: center;
    `;

export {Receive}
