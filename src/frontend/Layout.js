import react from 'react'
import PropTypes from 'prop-types'
import showActiveTodos from './components/showActiveTodos';

class Layout extends react.Component {
    render() {
        return (
            <showActiveTodos />
        )
    }       
}

export default Layout