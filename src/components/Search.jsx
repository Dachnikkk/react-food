import { useState } from "react"

function Search(props) {
    const [value, setValue] = useState(''); 

    const { cb } = props;

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }

    }
    
    const handleSubmit = () => {
        cb(value)
    }

    return (
        <div className='row'>
            <div className='input-field col s12'>
                <input
                    type='search'
                    className='validate'
                    placeholder='Search'
                    onKeyDown={handleKey}
                    onChange={(e) => {setValue(e.target.value)}}
                    value={value}
                />
                <button className='waves-effect waves-light btn' onClick={() => handleSubmit()}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default Search 