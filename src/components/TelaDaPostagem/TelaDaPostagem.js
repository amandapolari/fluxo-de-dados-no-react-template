import React from 'react';
import {
    ContainerPostagem,
    Title,
    Image,
    Description,
} from './TelaDaPostagem.styled';

const TelaDaPostagem = ({ titleModel, imageModel, descriptionModel, local }) => {
    return (
        <ContainerPostagem>
            <Title>{titleModel}</Title>
            {/* <Image src={'https://picsum.photos/536/354'} /> */}
            <Image src={imageModel} />
            <Description>{descriptionModel}</Description>
            <Description>{local}</Description>
        </ContainerPostagem>
    );
};

export default TelaDaPostagem;
