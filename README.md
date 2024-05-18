# Text Message Sentiment Analysis

Author: Charles R. Clark \
Date: 5/18/2024

## Background

Text messages are not always the easiest to understand, as the recipient of a text message cannot see the sender's face or hear the inflection in their voice. When these two important streams of social data are not visible to both parties partaking in the communication, really understanding what the other person is trying to say becomes more of a guessing game. Sometimes it's even difficult to understand if a text message is positive or negative. This application, which is styled based on the iMessage interface on iPhones, is meant to assist people in such cases.

## How to Use

The user can type the text message they're having difficulty understanding into the green message bubble (just remember to delete the default text first), and when they click the "send" button, the app's "response" will appear in a grey bubble below the "sent message." The app's "response" will indicate whether or not the text message has a positive or negative connotation by considering which of the two choices has the highest probability; these probabilities are also included in the response to provide the user with a transparent idea of how sure the model is.

## How it Works

This app is split into a dual-repo structure: one repo is for the React frontend and also hosts the application site, while the other repo is for the Python/Flask backend.

The frontend accepts the user's text message as input, and when the user clicks the "send" button, the text content is sent to the Flask backend API on Heroku, where the text is passed through a Naive Bayes analyzer (implemented using the textblob library, trained on corpuses from the NLTK library). Once the analyzer is done, the results are passed back to the frontend where they are displayed in the app's "response" message.

The repo containing the backend's source code can be found at [https://github.com/charlesrclark1243/text-sentiment-analysis-backend](https://github.com/charlesrclark1243/text-sentiment-analysis-backend).

## Future Plans

Because of recent events which have taken place in my personal life, I was unable to commit to the full 24-hour coding sprint I had initially hoped to partake in. However, I still really wanted to participate, so I settled on a simpler project which I could complete in a few hours.

This said, I'd really like to improve on this project when I have the time. Specifically, I'm hoping to use a better model for the sentiment analysis task, such as a T5 or even a fine-tuned Llama model.

## Conclusion

Thank you for taking the time to inspect and experiment with my project for OMSCS's first ever hackathon! I'm really honored to have been able to participate, even if it wasn't for the full 24 hours, and I'm hoping to participate again next year!