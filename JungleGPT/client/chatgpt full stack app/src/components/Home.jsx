import { useState } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';

function Home() {
    const [Prompt, setPrompt] = useState("");
    const [ans, setAnswer] = useState();
    const [image, setImage] = useState("");


    const getChat = async () => {
        try {
       
            const postResponse = await fetch('http://localhost:3000/chat', {
                method: 'POST',
                body: JSON.stringify({
                    message: Prompt 
                }),
                headers: {
                    "Content-type": "application/json"
                }
            });
    
            if (!postResponse.ok) {
                throw new Error('Error sending prompt.');
            }

    
            const data = await postResponse.json();
            console.log(data);
            setAnswer(data.answer);


        } catch (error) {
            console.error('Error fetching chat:', error);
        }
    }

    const getImage = async () => {
        try{
            document.getElementById('image-element').src = "";
            const getResponse = await fetch('http://localhost:3000/image', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                }
            });
            if (!getResponse.ok) {
                throw new Error('Error sending prompt.');
            }

            const img = await getResponse.json();
            setImage(img.url);
            document.getElementById('image-element').src = img.url;

        }
        catch(error){
            console.error('Error fetching image:', error);
        }
    }

    return (
        <div className="m-auto ">

                <Card className=" w-1/2 m-auto p-9 flex rounded-2xl justify-evenly">
                <TextField id="outlined-basic" label="Please provide description" variant="outlined" 
                multiline onChange={
                    (e) => {
                        setPrompt(e.target.value);
                    }
                } className="border-2 border-black p-2 rounded-2xl"
                />
                <Button variant="contained" endIcon={<SendIcon />}  onClick={getChat}  className = "border-2 border-black p-2 rounded-2xl">Click</Button>
                
                <Button variant="contained" endIcon={<SendIcon />}  onClick={getImage}  className = "border-2 border-black p-2 rounded-2xl">Image</Button>
                </Card>
            <br />
            <Card className="w-1/2 m-auto p-9 rounded-2xl">
            <p className="p-2">
            {ans}
            </p>
            {/* <p>{image}</p> */}
            <img src="" alt="" id="image-element"/>

            
            </Card>    
        </div>
        
    )
}





export default Home;