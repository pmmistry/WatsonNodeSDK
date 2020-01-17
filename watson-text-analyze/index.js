const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
    version: '2019-07-12',
    authenticator: new IamAuthenticator({
      apikey: 'OHDp5LbkdDFlQ3BDG9QLLyc14sN-aeYp5H117oc4GaGl',
    }),
    url: 'https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/28821df9-ccf5-496f-97c1-b27ad44643b0',
  });

const analyzeParams = {
    features: {
      categories: {
        limit: 3
      },
      concepts: {
        limit: 3
      },
      entities: {
        emotion: true,
        sentiment: true,
        limit: 2
      },
      keywords: {
        sentiment: true,
        emotion: true,
        limit: 3
      },
      relations: {}
    },
    text:
      "Leonardo DiCaprio won Best Actor in a Leading Role for his performance."
  };

  naturalLanguageUnderstanding
  .analyze(analyzeParams)
  .then(analysisResults => {
    console.log(JSON.stringify(analysisResults, null, 2));
  })
  .catch(err => {
    console.log("error:", err);
  });