import { createContext, useState } from "react";
import { GoogleGenerativeAI } from '@google/generative-ai';

export const Context = createContext();

const ContextProvider = (props) => {
    const [input,setInput] = useState("");
    const [recentprom,setRecentprom] = useState("");
    const[prevprom,setprevprom] = useState([]);
    const[showresult,setshowresult] = useState(false);
    const[loading,setloading] = useState(false);
    const[resultdata,setresultdata] = useState("");


    const apiKey = "AIzaSyDInQsV8kQm0C6P9hfFwoHfcaY3d1mByCg";
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
    });

    

    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
    };

    async function run(props) {
        const chatSession = model.startChat({
            generationConfig,
            history: [
            ],
        });

        const result = await chatSession.sendMessage(props);
        
        const newresult =result.response.text();
        
        const replaceIn = newresult.replace(/\*\*/g, '') .replace(/\*/g, '').replace(/\#/g, '').replace(/\. /g,'.<br/>');
        setresultdata(replaceIn);
    }

    //  run();
    const newChat=()=>{
        setloading(false);
        setshowresult(false);
    }
    const onsent =async()=>{
        setresultdata("")
        setloading(true)
        setshowresult(true)
        setRecentprom(input)
        setprevprom(prev=>[...prev,input])
        await run(input)    
        setloading(false)
        setInput("")
    }
    const ContextVale = {
            prevprom,
            setprevprom,
            recentprom,
            setRecentprom,
            showresult,
            input,
            setInput,
            loading,
            resultdata,
            onsent,
            newChat
    }
    return (
        <Context.Provider value={ContextVale}>
            {props.children}
        </Context.Provider>
    )
}


export default ContextProvider

