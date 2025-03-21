import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../style/services.css";

const Text = () => {
  const [description, setDescription] = useState('Click on any button to see the description.');

  const updateDescription = (type) => {
    let desc = '';

    switch (type) {
        case 'sentiment':
            desc = 'Often, humans tend to be sarcastic in their responses. Especially on websites and reviews, we tend to share our bad experiences with a restaurant or a hotel through sarcasm and machines could easily misinterpret them as compliments. If every sarcastic comment is learned as a compliment by machines, this would completely skew the results. That’s why sentiment annotation becomes crucial. This technique specifies the emotion or attitude behind a sentence (sarcasm in this case) and every sentence is labelled as neutral, positive, or negative.';
            break;
        case 'intent':
            desc = 'This technique differentiates the intentions of users. When interacting with chatbots, different users respond with different intentions. Some request statements, others command responses for overcharges, a few confirm the status of an order, while some people respond with sarcasm. Hence, every response is labelled with an intention of request, confirmation, command, etc.';
            break;
        case 'entity':
            desc = 'Entity annotation is a type of text annotation where named entities are labeled in a text. Named entities are words or phrases that refer to specific things, such as people, places, organizations, products, and events. Entity annotation is important for many natural language processing (NLP) tasks, such as named entity recognition (NER), machine translation, and question answering. Entity annotation is an important task for many NLP applications. By labeling entities in text, we can help machines to understand the structure and meaning of text, which can lead to improved performance on a variety of NLP tasks.';
            break;
        case 'classification':
            desc = 'Text classification, also known as text categorization or document classification, is a type of text annotation that involves assigning a single label to a body of text or short lines of text. Annotators read the text and analyze its content, subject, intent, and sentiment to classify it into categories based on a predetermined list. Text classification can be used to organize, structure, and categorize many types of text, including documents, medical studies, files, and web content. For example, annotators might classify an article section as entertainment or sports, or categorize products in an e-commerce store. Assigning a single label to a document can also be useful for sorting large amounts of textual content.';
            break;
        case 'linguistic':
            desc = 'Linguistic annotation, also known as corpus annotation, is the process of identifying and marking grammatical, semantic, or phonetic elements in text or audio recordings. It is a key part of text analysis, which also includes annotating other features like punctuation, tone, and word length. Linguistic annotation is used to create AI training datasets for a variety of NLP solutions such as chatbots, virtual assistants, search engines, machine translation and more. These are just five types of text annotation commonly used in machine learning today.';
            break;
        default:
            desc = 'Click on any button to see the description.';
            break;
        }

    setDescription(desc);
  };

  return (
    <div className="main-section">
    <header>
      <div className="servies">
        <h1>Text Annotation</h1>
        <p>Precision Label</p>
      </div></header>
      <section className="content">
        <div className="container content-layout">
          <img src="https://cdn.pixabay.com/photo/2016/06/24/06/56/text-mining-1476780_960_720.png" alt="Data Annotation Example" />
          <div>
            <h2>Text Annotation</h2>
            <p className="text">Text annotation is identifying and labeling sentences with additional information or metadata to define the characteristics of sentences. This information could be highlighting parts of speech in a sentence, grammar syntax, keywords, phrases, emotions, sarcasm, sentiments and more depending on the scope of a project. Machine learning modules are fed with such AI training data, where they learn diverse aspects of sentences, sentence formation, and more to understand human conversations better. As they learn with properly annotated data, they become better at mimicking human conversations (current virtual assistants). However, feed them with poorly annotated data, and you will find them deliver irrelevant, dumb, or misleading responses. That’s why text labeling should be done by experts, who meticulously tag every single aspect of a sentence to ensure nothing crucial for machines to understand and learn is overlooked.</p>
          </div>
        </div>
      </section>
      <section className="types">
        <h2>Annotation Types</h2>
        <div className="annotation-types">
          <button className="btn" onClick={() => updateDescription('sentiment')}>Sentiment Annotation</button>
          <button className="btn" onClick={() => updateDescription('intent')}>Intent Annotation</button>
          <button className="btn" onClick={() => updateDescription('entity')}>Entity Annotation</button>
          <button className="btn" onClick={() => updateDescription('classification')}>Text Classification</button>
          <button className="btn" onClick={() => updateDescription('linguistic')}>Linguistic Annotation</button>
        </div>
        <p className="description">{description}</p>
      </section>
    </div>
  );
};

export default Text;
