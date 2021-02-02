import React from 'react';

const LoadingSpinner = () => {
    return (
        <div style={{height: "300px"}}
             className="d-flex align-items-center justify-content-center m-auto">
            <div style={{width: '4rem', height: '4rem'}} className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default LoadingSpinner;
