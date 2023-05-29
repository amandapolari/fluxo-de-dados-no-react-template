import React from 'react';
import {
    ContainerPostagem,
    Title,
    Image,
    Description,
} from './TelaDaPostagem.styled';

const TelaDaPostagem = ({ title, image, description, local }) => {
    return (
        <ContainerPostagem>
            <Title>{title}</Title>
            {/* <Image src={'https://picsum.photos/536/354'} /> */}
            <Image src={image} />
            <Description>{description}</Description>
            <Description>{local}</Description>
        </ContainerPostagem>
    );
};

export default TelaDaPostagem;
