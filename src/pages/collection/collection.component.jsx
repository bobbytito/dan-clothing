//importing components
import React from 'react';
import {connect} from 'react-redux';

import {selectCollection} from '../../redux/shop/shop.selectors'

//components to display item
import CollectionItem from '../../components/collection-item/collection-item.component';


import './collection.styles.scss'

const CollectionPage = ({collection}) => {
    console.log(collection)
return(
    <div className='collection'>
        <h2>Collection page</h2>
    </div>
)
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state) 
})

export default connect(mapStateToProps)(CollectionPage);