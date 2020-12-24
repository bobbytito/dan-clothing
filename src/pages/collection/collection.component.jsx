//importing components
import React from 'react';

//components to display item
import CollectionItem from '../../components/collection-item/collection-item.component';


import './collection.styles.scss'

const CollectionPage = ({match}) => {
    console.log(match)
return(
    <div className='collection'>
        <h2>Collection page</h2>
    </div>
)
}

export default CollectionPage;