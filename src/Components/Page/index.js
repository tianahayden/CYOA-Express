import { connect } from 'react-redux';
import Page from './Page'

function mapStoreToProps(store){
    return {
        pageInfo: store.Page.pageInfo,
        history: store.Page.history
    }
}

export default connect(mapStoreToProps)(Page);
