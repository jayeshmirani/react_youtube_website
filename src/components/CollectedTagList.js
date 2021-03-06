import React from 'react';

const CollectedTagList = () => {

    // localStorage.clear();
    var tags = [],
    keys = Object.keys(localStorage), i= 0;

    for (i=0; i<keys.length; i++) {
        console.log("collected tags:",localStorage.getItem(keys[i]));
        tags.push( localStorage.getItem(keys[i]));
    }

    const tagList =  tags.map((tag) => {
        
        return <div className="item">
                    <h5>{tag}</h5> 
               </div> 
        
    });

    return <div className="ui list">
                {tagList}
           </div>
};
export default CollectedTagList;