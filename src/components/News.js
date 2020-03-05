import React, { useEffect, useState, useRef } from 'react';
import AnimateOnChange from 'react-animate-on-change'

export default ({ items }) => {
    const [id, setId] = useState(0)
    const [classes, setClass] = useState('')
    useEffect(() => {
        setInterval(() => {
            setId(id => id === items.length - 1 ? 0 : id + 1)
        }, 12000)
    }, [])
    useEffect(() => {
        setClass('news newsAnim')
        setTimeout(() => {
            setClass('news')
        }, 900)
    }, [id])
    return <div className={classes}>
        {items[id].title}
    </div>
}