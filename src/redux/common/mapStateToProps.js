import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
    items: state.items
});

export const connectComponent = (component) => {
    component.propTypes = {
        items: PropTypes.object.isRequired
    };
    return connect(mapStateToProps)(component);
};