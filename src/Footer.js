/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-29 01:48:16
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-04-29 02:09:32
 * @Description: 
 * @FilePath: /taskTracker/src/Footer.js
 * @GitHub: https://github.com/liuyuchen777
 */

import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <Link to='/About'>About</Link>
        </footer>
    )
}

export default Footer
