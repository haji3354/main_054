import React, { useState ,useEffect} from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import ShareDetailTitle from "./ShareDetailTitle";
import ShareDetailContent from "./ShareDetailContent";
import { Link , useParams } from "react-router-dom";
import axios from "axios";
import ShareDetailImg from "./ShareDetailImg";
import DetailEditDropdown from "../../../components/dropdowns/DetailEditDropdown";

const ShareDetail = () => {
  const Mobile = useMediaQuery({ maxWidth: 786 })
  const [detail , setDetail] = useState("")
  const [data , setData] = useState("")
  const { id } = useParams();
  const url = data.image


  const getData = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/product/${id}`)
      .then((res) => setData(res.data))

  };
  const getMember = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/member/${id}`)
      .then((res) => setDetail(res.data))

  };


  useEffect(() => {
    getData();
    getMember()
    
  }, []);
  
  return (
    <>
    {!!data && (
        <ShareContainer>
        <Container>
          <Title>{data.title}</Title>
          <DetailEditDropdown/>
          <Div>
          <ShareDetailImg url = {url}></ShareDetailImg>
          </Div>
          <ShareDetailTitle Detail={data} Data = {detail}></ShareDetailTitle>
          <div><hr></hr></div>
          <ShareDetailContent content = {data}></ShareDetailContent> 
          <Buttondiv><Link to={`/chat/detail/:id`}><ChatBtn>채팅하기</ChatBtn></Link></Buttondiv>
        
        </Container>
        </ShareContainer>
    )}
    </>
  );
};

export default ShareDetail;

const ShareContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  hr{
    margin: 1rem 0rem;
  }
`;

const Container = styled.div`
display: flex;
flex-direction: column;
margin: 7.5rem 10rem 0rem 10rem;
width:56.25rem;
`
const Title = styled.div`
font-size: 3rem;
`
const Div = styled.div`
height: 34.375rem;
width: 50.626rem;
`
const ChatBtn = styled.button`
width: 8.125rem;
height: 8.125rem;
border-radius: 50%;
background-color:  ${(props) => props.theme.primary};
font-size: 1.375rem;
color: white;

`
const Buttondiv = styled.div`
text-align: right;
margin: 0rem 0rem 1rem 0rem;

`