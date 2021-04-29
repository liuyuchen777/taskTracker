/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-27 23:41:34
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-04-29 02:11:56
 * @Description: 
 * @FilePath: /taskTracker/src/components/Header.js
 * @GitHub: https://github.com/liuyuchen777
 */

import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = (props) => {
    // const onClick =  () => {
    //     console.log("On Click!")
    // }

    const location = useLocation()

    return (
        <header className='header'>
            <h1 style={headingStyle}>
                {props.title}
            </h1>
            {location.pathname === '/' && (
                <Button onClick={props.onAdd} color={props.showAdd ? 'red' : 'green'} text={props.showAdd ? 'Close' : 'Add'} />
            )}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

const headingStyle = {
        color: 'black', 
}

export default Header
