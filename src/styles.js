import styles, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
	}
`;

export const Title = styles.h1`
  font-size: 5em;
  font-family: 'Arial';
  text-align: center;
  color: black;
`;

export const Text = styles.section`
  padding-bottom: 2rem;
  text-align: center;
  font-size: 2em;
  font-family: 'Arial';
  color: blue;
`;

export const Container = styles.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: center;
`;

export const Button = styles.button`
  background-color: grey;
  color: #FFFFFF;
  font-size: 1.5em;
  padding: 1rem 2rem;
  margin: 1em;
`;