import React from 'react'

const Container = ({ children }) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Container;