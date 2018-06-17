import React from 'react';
import '../styles/index.scss';
import Github from './Github.jsx'
import Resume from './resume.jsx'
import Linkedin from './Linkedin.jsx'
import Behance from './Behance.jsx'


export default class Logos extends React.Component {
    render() {
        return <ul className="logos">
        	<Resume />
        	<Behance />
        	<Github />
        	<Linkedin />
        </ul>
    }
}
