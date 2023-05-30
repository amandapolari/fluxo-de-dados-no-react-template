import styled, { createGlobalStyle } from 'styled-components';
import FormularioPostagem from './components/FormularioPostagem/FormularioPostagem';
import TelaDaPostagem from './components/TelaDaPostagem/TelaDaPostagem';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

function App() {
    // Form
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [local, setLocal] = useState('');

    // Modelo
    const [titleModel, setTitleModel] = useState('Titulo:');
    const [imageModel, setImageModel] = useState('https://picsum.photos/536/351');
    const [descriptionModel, setDescriptionModel] = useState('Descrição:');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        setTitleModel(event.target.value);
    };

    const handleImageChange = (event) => {
        setImage(event.target.value);
        setImageModel(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        setDescriptionModel(event.target.value);
    };

    const handleLocalChange = (event) => {
        setLocal(event.target.value);
    };

    return (
        <>
            <GlobalStyle />

            <Container>
                <FormularioPostagem
                    title={title}
                    handleTitleChange={handleTitleChange}
                    image={image}
                    handleImageChange={handleImageChange}
                    description={description}
                    handleDescriptionChange={handleDescriptionChange}
                    local={local}
                    handleLocalChange={handleLocalChange}
                />

                <TelaDaPostagem
                    titleModel={titleModel}
                    imageModel={imageModel}
                    descriptionModel={descriptionModel}
                    local={local}
                />
            </Container>
        </>
    );
}

export default App;
