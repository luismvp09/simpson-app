import styled from "styled-components";
import { Character } from "./Character";

export const CharacterContainer = ({ characters, reqApi }) => {
  return (
    <>
      <ContainerCharacter>
        {characters.map((datacharacter, index) => (
          <Character datacharacter={datacharacter} key={index} />
        ))}
      </ContainerCharacter>
      <ContainerButton>
        <Button onClick={reqApi}>Recargar Personajes</Button>
      </ContainerButton>
    </>
  );
};

const ContainerCharacter = styled.div`
  display: flex;
`;

const ContainerButton = styled.div`
   width:100%;
   text-align:center;
`;

const Button = styled.button`
    width:250px;
    background-color:#e76f51;
    color: #fff;
    border: none;
    padding:10px 10px;
    border-radius: 20px;
    font-size:18px;
    margin-top:40px;
    transition: all 0.2s ease-out;

    &:hover{
        cursor:pointer;
        background:#1c0950;
    }
`;