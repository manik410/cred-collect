/* eslint-disable react/no-unknown-property */
import React from 'react'
import './loading.scss'

export default function FullLoading(props) {


    if (!props.loading) {
        return null
    }

    return (
        <div>
            <>
                <div className="LoadingDiv noscroll overlay"></div>
                <div className="LoadingSpinner">
                    <div className='loader'></div>
                </div>
            </>
            <style jsx="true">
                {`
                  body {
                    overflow: hidden;
                    }
                `}
            </style>
        </div>
    )
}
