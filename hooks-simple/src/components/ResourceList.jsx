import React from 'react';
import useResources from './useResources';


const ResourceList = ({ resource }) => {
    const resources = useResources(resource);
    return (
        <ul>
        {resources.map(rec => <li key={rec.id}>{rec.title}</li>)}
        </ul>
    );
}

export default ResourceList;