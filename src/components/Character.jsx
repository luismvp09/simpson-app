import styled from "styled-components"


export const Character = ({datacharacter}) => {

    console.log(datacharacter);

    const {character, image, quote} = datacharacter
    
  return (
    <ContentCharacter>
     <Title> {character}</Title>
     <ContainerImage>
        <Image src={image} alt={character} />
     </ContainerImage>
     <PhraseText> {quote}</PhraseText>
    </ContentCharacter>
  )
}

const ContentCharacter = styled.div`
      padding:30px;
      border: 1px solid #2a9d8f;
      border-radius: 20px;
      width:300px;
      text-aling:center;
      margin:10px;

      &:hover{
        filter:brightness(40%);
      }
`;

const Title = styled.h2`
     color: #264653;
     height: 20px;
     justify-content: center;
     aling-items: center;
     display:flex;
`;

const ContainerImage = styled.div`
    height: 250px;
    display: flex;
    aling-items: center;
    justify-content: center;
`;

const Image = styled.img`
   width: 130px;
   height: auto;
`;

const PhraseText = styled.h4`
   color: #2a9d8f;
   height:100px;
`;