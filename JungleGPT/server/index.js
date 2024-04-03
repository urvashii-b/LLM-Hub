const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config();

const cors = require('cors');
const app = express()

const port = 3000
const { Configuration, OpenAIApi } = require("openai");
app.use(bodyParser.json());
app.use(cors());

let answer = ""

app.post('/chat', async(req, res) => {
    
    let content = req.body.message;
    // console.log(content);
    let prompt = "Based on the description given, can you please predict which animal is being talked about. Provide a proper description as well: " + JSON.stringify(content);
    const configuration = new Configuration({
    // apiKey: process.env.OPENAI_API_KEY,
    apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: prompt}],

});

console.log(chatCompletion.data.choices[0].message.content);
answer = chatCompletion.data.choices[0].message.content;
res.json({answer: answer});
})

app.post('/image', async (req, res) => {

  try{
    
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
      prompt: answer,
      n: 1,
      size: "256x256",
    });
    console.log(response.data.data[0].url);
    res.json({url: response.data.data[0].url});
  }
  catch(error){
    // res.status(500).send("An error occurred while processing the image.");
    res.send("error occurred")
  }
  
})
// app.get('/chat', (req, res) => {
//   res.json({answer: answer});
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
