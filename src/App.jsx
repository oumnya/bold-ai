import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #ffffff;
    min-height: 100vh;
  }
`;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.8;
`;

const MainContent = styled.main`
  display: flex;
  gap: 2rem;
`;

const VoiceInterface = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const VoiceButton = styled.button`
  background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(255, 107, 107, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(255, 107, 107, 0.7);
  }
`;

const Transcript = styled.div`
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 1rem;
  height: 200px;
  overflow-y: auto;
`;

const NotesSection = styled.div`
  flex: 1;
`;

const NotesTextarea = styled.textarea`
  width: 100%;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 10px;
  padding: 1rem;
  color: white;
  font-size: 1rem;
  resize: vertical;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SaveButton = styled.button`
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  box-shadow: 0 0 15px rgba(79, 172, 254, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(79, 172, 254, 0.7);
  }
`;

function App() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [notes, setNotes] = useState('');

  const toggleListening = () => {
    setIsListening(!isListening);
    // Here you would integrate with OpenAI's voice API
    if (!isListening) {
      setTranscript('Listening...');
    } else {
      setTranscript('Stopped listening.');
    }
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const saveNotes = () => {
    // Here you would implement the logic to save notes
    console.log('Notes saved:', notes);
    alert('Notes saved successfully!');
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header>
          <Title>AI Accelerator</Title>
          <Subtitle>Your AI Consulting Partner</Subtitle>
        </Header>
        <MainContent>
          <VoiceInterface>
            <VoiceButton onClick={toggleListening}>
              {isListening ? 'Stop Listening' : 'Start Listening'}
            </VoiceButton>
            <Transcript>{transcript}</Transcript>
          </VoiceInterface>
          <NotesSection>
            <NotesTextarea
              value={notes}
              onChange={handleNotesChange}
              placeholder="Take notes during your AI consultation..."
            />
            <SaveButton onClick={saveNotes}>Save Notes</SaveButton>
          </NotesSection>
        </MainContent>
      </AppContainer>
    </>
  );
}

export default App;
