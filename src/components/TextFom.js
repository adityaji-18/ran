import React, {useState} from 'react'


export default function TextFom(props) {

    const handeltoUp = ()=>{
        // console.log("clicked!");
        let newText = text.toUpperCase();
        setText(newText);

    }
    const handeltoLow = ()=>{
        // console.log("clicked!");
        let newText = text.toLowerCase();
        setText(newText);

    }
    const handelChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }

    
    const copyText = ()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    // const ReplaceText = ()=>{
    //     let t = text;
    //     // let p= t.replace()
    //     let result = t.replace('Text',"Sentence")
    //     setText(result);
    // }
    const extraSpace =()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
    }
    const [text, setText] = useState('Enter your Text Here');
    // setText("THis is text bro");
    return (
        <>
        <div className="container">
                <h2>{props.heading }</h2>
                <div className="mb-3">
                    <textarea className="form-control" value = { text } onChange={handelChange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2"  onClick={handeltoUp} >Click To Convert to UpperCase</button>
                <button className="btn btn-primary  mx-2"   onClick={handeltoLow} >Click To Convert to LowerCase</button>
                <button className="btn btn-primary  mx-2"   onClick={copyText} >Copy To Clipboard</button>
                {/* <button className="btn btn-primary  mx-2"   onClick={ReplaceText} >Click To Replace</button> */}
                <button className="btn btn-primary  mx-2"   onClick={extraSpace} > Remove extraSpace</button>
        </div>
        <div className="container">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} letters</p>
            <p>{0.008 * text.split(" ").length} Reading Time</p>
            <h3>preview</h3>
            <p>{text}</p>
            
        </div>
        </>
    )
}
