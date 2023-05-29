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
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [local, setLocal] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleImageChange = (event) => {
        setImage(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
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
                    title={title}
                    image={image}
                    description={description}
                    local={local}
                />
            </Container>
        </>
    );
}

export default App;
