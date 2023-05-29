import { FormContainer, Form, Input, StyledLabel } from "./FormularioPostagem.styled";

export const FormularioCadastro = () => {
  // INPUTS CONTROLADOS | 3 PASSOS:
  // 1. CRIAR OS ESTADOS PARA CADA INPUT
  // 2. CRIAR AS FUNÇÕES QUE IRÃO MUDAR OS ESTADOS A PARTIR DE UM ONCLICK
  // 3. CRIAR UM ONCHANGE PARA CADA INPUT E PASSAR PARA DENTRO DELAS A FUNÇÃO QUE FAZ AS MUDANÇAS SETANDO O ESTADO
  // 4. O VALUE DE CADA INPUT SERA O VALOR DO ESTADO
  // ------------------------------------------

  
  return (
    <FormContainer>
      <h1>Insira sua postagem abaixo: </h1>

      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
