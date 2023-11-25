import React, { Dispatch, KeyboardEventHandler, SetStateAction, useEffect, useState } from 'react'

interface props {
    tagList: String[];
    setTagList: Dispatch<SetStateAction<String[]>>;
    deleteTag: (tag:String) => void;
}

function Input({tagList, setTagList, deleteTag}: props) {

    const [tag, setTag] = useState("");
    const [hasEmptySpace, setHasEmptySpace] = useState(false);

    useEffect(() => {
        if(tag.match(/\s/)){
            setHasEmptySpace(true);
        } else {
            setHasEmptySpace(false);
        }
    }, [tag])

    function handleSubmit(event: any) {
        event.preventDefault();
        if(tag.length  && !hasEmptySpace){
            if(!tagList.includes(tag)){
            setTagList([...tagList, tag]);
            }
            setTag("");
        }
    }

    const handleInput = function(e: any): void{
        setTag(e.target.value);
    }
    
    function handleDelete(e: any) {
        if(e.key === "Backspace" && tag.length === 0 && tagList.length){
            deleteTag(tagList[tagList.length -1])
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="newTag"
                    value={tag}
                    onChange={handleInput}
                    onKeyDown={handleDelete}
                />
            </form>
            {
                hasEmptySpace && 
                <div>Please check your Tag doesn't empty spaces</div>
            }
        </>

    )
}

export default Input