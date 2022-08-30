import React,{useState} from 'react'

export default function TextForm(props) {
    // const [text, setText] = useState("enter text here");
    const [text, setText] = useState("");

    const convertUpperButton= ()=>{
        console.log("convertButton is clicked "+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }

    const convertLowerButton= ()=>{
        console.log("convertButton is clicked "+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success");
    }

    const clearButton= ()=>{
        // console.log("convertButton is clicked "+text);
        // let newText=text.toLowerCase();
        let newText='';
        setText(newText);
        props.showAlert("text cleared","success");
    }

    const reverseButton= ()=>{
        // console.log("convertButton is clicked "+text);
        // let newText=text.toLowerCase();
        let newText=text.split("").reverse().join("");
        setText(newText);
        props.showAlert("text reversed","success");
    }

    const handelCopy= ()=>{
        // var text=document.getElementById("myBox");
        // text.select();
        // navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.showAlert("copied to clipboard","success")
    }

    const handelExtraSpaces= ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("extra spaces removed","success");
    }

    const handleOnChange= (event)=>{
        console.log("onchange");
        setText(event.target.value);
    }
    
    // text="new text"; // wrong way to change the state
    // setText("new text"); // right way to change the state
  return (
    <>
        <div className="class container" style={{color: props.mode === "dark" ? "white" : "#042743" }}>
            <div className="mb-3">
                <h3 className="mb-4">{props.heading}</h3>
                <textarea className="form-control" 
                style={{color: props.mode === "dark" ? "white" : "#042743",
                  backgroundColor: props.mode === "dark" ? "#13466e" : "white" }} value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertUpperButton}>convert to upper case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertLowerButton}>convert to lower case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearButton}>clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={reverseButton}>reverse text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelCopy}>copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelExtraSpaces}>remove extra spaces</button>
        </div>
        <div className="class container" style={{color: props.mode === "dark" ? "white" : "#042743" }}>
            <h3>your text summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word(s) and {text.length} character(s)</p>
            <p>time to read = {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minute(s)</p>
            <h3>preview</h3>
            <p>{text.length>0 ? text : "Nothing to preview!"}</p>
        </div>
    </>
  )
}
