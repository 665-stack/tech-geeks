import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ to, children, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link style={{ color: match ? '#1b4388' : '#1e90c2', borderBlockEnd: match ? '2px solid #1b4388' : 'none', paddingBottom: match ? '4px' : '0px' }}
            to={to}  {...props}>
            {children}
        </Link>
    );
};

export default CustomLink;