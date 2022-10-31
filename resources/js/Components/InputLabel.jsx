import React from 'react';

export default function InputLabel({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} className={`block font-medium mb-1 text-sm text-gray-700 ` + className}>
            {value ? value : children}
        </label>
    );
}
