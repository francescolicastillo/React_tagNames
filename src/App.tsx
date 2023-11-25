import React, { KeyboardEventHandler, useState } from 'react';
import Input from './components/Input';
import Tag from './components/Tag';

function App() {

  const [tagList, setTagList] = useState([] as Array<String>);

  function deleteTag(tag: String){
    setTagList(tagList.filter(t => t !== tag));
  }

  return (
    <div className="App">
      <h1>Introduce your tags</h1>
      <div>
        {tagList.map((tag, index) => 
          <Tag 
            tag={tag} 
            key={index}
            deleteTag={deleteTag}
          />
        )}
        <Input 
          tagList={tagList}
          setTagList={setTagList}
          deleteTag={deleteTag}
        />
      </div>
    </div>
  );
}

export default App;
