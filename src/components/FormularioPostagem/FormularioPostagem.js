import { useState } from 'react';
import {
    FormContainer,
    Form,
    Input,
    StyledLabel,
} from './FormularioPostagem.styled';

export const FormularioCadastro = () => {
    // INPUTS CONTROLADOS | 3 PASSOS:
    // [x] 1. CRIAR OS ESTADOS PARA CADA INPUT
    // [x] 2. CRIAR AS FUNÇÕES QUE IRÃO MUDAR OS ESTADOS A PARTIR DE UM ONCLICK
    // [x] 3. CRIAR UM ONCHANGE PARA CADA INPUT E PASSAR PARA DENTRO DELAS A FUNÇÃO QUE FAZ AS MUDANÇAS SETANDO O ESTADO
    // [x] 4. O VALUE DE CADA INPUT SERA O VALOR DO ESTADO
    // ------------------------------------------
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleImageChange = (event) => {
        setImage(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    return (
        <FormContainer>
            <h1>Insira sua postagem abaixo: </h1>

            <Form>
                <StyledLabel htmlFor="titulo">
                    Titulo:
                    <Input
                        value={title}
                        onChange={handleTitleChange}
                        id="titulo"
                    />
                </StyledLabel>

                <StyledLabel htmlFor="foto">
                    Imagem:
                    <Input
                        value={image}
                        onChange={handleImageChange}
                        id="foto"
                    />
                </StyledLabel>

                <StyledLabel htmlFor="descricao">
                    Descrição:
                    <Input
                        value={description}
                        onChange={handleDescriptionChange}
                        id="descricao"
                    />
                </StyledLabel>
            </Form>
        </FormContainer>
    );
};

export default FormularioCadastro;
