import React from 'react'

export default function SpicyLevel(props) {
    if (props.data === 0) {
        return (
            <p>🍆</p>
        )
    }
    if (props.data === 1) {
        return (
            <p>🌶️</p>
        )
    }
    if (props.data === 2) {
        return (
            <p>🌶️🌶️</p>
        )
    }
    if (props.data === 3) {
        return (
            <p>🌶️🌶️🌶️</p>
        )
    }
    if (props.data === 4) {
        return (
            <p>🌶️🌶️🌶️🌶️</p>
        )
    }
    if (props.data === 5) {
        return (
            <p>🌶️🌶️🌶️🌶️🌶️</p>
        )
    }
}
