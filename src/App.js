import React from 'react';
import { useState } from 'react';
import teatre from "./teatre.json"
import { Text, Title, Button, Container } from "./styles"

function App () {
    const [text, actual] = useState(0);
    const seguent = () => {
        if (text !== teatre.length -1) {
            actual(text +1);}
        }
    const anterior = () => {
        if (text !== 0) {
            actual(text -1);}
        }

return (
<>
    <div>
        <Title>
            Romeo i Julieta
        </Title>
        <Text>
            {teatre[text]}
        </Text>
        <Container>
            <Button onClick={anterior}>
                Anterior
            </Button>
            <Button onClick={seguent}>
                Següent
            </Button>
        </Container>
    </div>
</>
  );
};
export default App;