import React from 'react';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Cargando...</div>;
    }

    const src = source;     
    return (
        // basic bootstrap classes. 
        <div className="col-md-12">
            <div className="emdeb-responsive">
                <iframe src={src}></iframe>
            </div>
        </div>
    );
};

export default Iframe;