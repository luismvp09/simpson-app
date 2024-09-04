import styled from "styled-components"


export const Container = ({children}) => {
  return (
    <Content>
        {children}
    </Content>
  )
}


const Content = styled.div`
max-width: 1200px;
margin: 0 auto;
padding: 40px;
`;