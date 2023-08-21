import React, { useRef, useState } from 'react'
import './style.css'
const Create = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const fileInputRef = useRef(null);
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className='create-container flex column'>
        <div className='create-reccipe-container'>
            <div>
                <input type="file" multiple onChange={handleFileChange} />
                <div className="image-preview-container">
                    {selectedFiles.map((file, index) => (
                    <div
                        key={index}
                        className="image-preview"
                        style={{ backgroundImage: `url(${URL.createObjectURL(file)})` }}
                    ></div>
                    ))}
                </div>
            </div>
        </div>
        <div className='data-input-container flex column center'>
            <input type="text" placeholder='name' className='input-text'/>
            <input type="text" placeholder='cuisine' className='input-text'/>
            <textarea 
            rows="1" 
            placeholder='ingredients' 
            value={inputValue}
            onChange={handleInputChange}
            className='ingredient-input'
            ></textarea>
            <button className='create-button'>Create</button>
        </div>
    </div>
    
  )
}

export default Create