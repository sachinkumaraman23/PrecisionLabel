import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style/services.css';


const Audio = () => {
  const [description, setDescription] = useState('Click on any button to see the description.');

  const updateDescription = (type) => {
    let desc = '';

    switch (type) {
      case 'transcription':
        desc = 'Transcription involves converting spoken language in audio files into written text. This type of annotation captures the exact words spoken, often including punctuation and sometimes speaker identifiers. Transcription is widely used in speech-to-text applications, virtual assistants, and automated transcription services for creating written records of audio content such as meetings, lectures, interviews, and podcasts.';
        break;
      case 'diarization':
        desc = 'Speaker diarization is the process of identifying and labeling different speakers within an audio file. It segments the audio into parts spoken by distinct individuals, often referred to as "who spoke when".  Essential in transcribing interviews, meetings, and multi-speaker conversations, speaker diarization helps in distinguishing between speakers, improving the clarity and usability of transcriptions and enabling detailed analysis of dialogues.';
        break;
      case 'eventLabeling':
        desc = 'Event or sound labeling involves tagging specific sounds or events within an audio file. This includes identifying and marking occurrences such as a doorbell ringing, dog barking, glass breaking, or other non-speech audio events. Used in sound recognition systems, smart home devices, and surveillance applications, event labeling helps in automating responses to certain sounds (e.g., alerting a user to a smoke alarm) and in analyzing environmental sounds for research or monitoring purposes.';
        break;
      case 'phonetic':
        desc = 'Phonetic annotation involves marking phonetic details within an audio file. This includes identifying and labeling phonemes (the smallest units of sound in speech), intonation, stress, rhythm, and other speech characteristics. Phonetic annotation captures the fine-grained aspects of spoken language that are crucial for linguistic analysis and speech processing.';
        break;
      case 'emotion':
        desc = 'Emotion annotation involves labeling the emotional tone conveyed in the audio, such as happiness, sadness, anger, or neutrality. This type of annotation is particularly important in developing emotionally intelligent AI systems, enhancing customer service interactions, sentiment analysis in social media and customer feedback, and improving human-computer interaction by making systems more responsive to users\' emotional states.';
        break;
      case 'music':
        desc = 'Music annotation involves tagging elements within a music track, such as identifying instruments, genre, tempo, key, and sections like verses, choruses, or solos. This type of annotation helps in music information retrieval, recommendation systems, and automated music transcription, enabling detailed analysis and organization of musical content for various applications.';
        break;
      default:
        desc = 'Click on any button to see the description.';
    }

    setDescription(desc);
  };

  return (
    
    <div className="main-section">
    <header>
      <div className="servies">
        <h1>Audio Annotation</h1>
        <p>Precision Label</p>
      </div></header>
      <section className="content">
        <div className="container content-layout">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/WaveSurfer.png/640px-WaveSurfer.png" alt="Data Annotation Example" />
          <div>
            <h2>Audio Annotation</h2>
            <p className="text">Audio annotation is the process of labeling audio data with metadata to identify specific features within the audio signal. This includes marking time stamps, transcribing spoken words, identifying different speakers, labeling environmental sounds, and more. Audio annotation is essential for training machine learning models in tasks like speech recognition, speaker identification, and sound classification.</p>
          </div>
        </div>
      </section>
      <section className="types">
        <h2>Annotation Types</h2>
        <div className="annotation-types">
          <button className="btn" onClick={() => updateDescription('transcription')}>Transcription</button>
          <button className="btn" onClick={() => updateDescription('diarization')}>Speaker Diarization</button>
          <button className="btn" onClick={() => updateDescription('eventLabeling')}>Event/Sound Labeling</button>
          <button className="btn" onClick={() => updateDescription('phonetic')}>Phonetic Annotation</button>
          <button className="btn" onClick={() => updateDescription('emotion')}>Emotion Annotation</button>
          <button className="btn" onClick={() => updateDescription('music')}>Music Annotation</button>
        </div>
        <p className="description">{description}</p>
      </section>
    </div>
  );
};

export default Audio;
