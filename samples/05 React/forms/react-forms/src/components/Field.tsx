import * as React from 'react';

interface IFieldProps {
    name: string,
    type?: string,
    onChange: (field:string, value:string)=>void
}

const Field:React.StatelessComponent<IFieldProps> = (props) => {
    const extractValue = (event : React.ChangeEvent<HTMLInputElement>) =>{
        props.onChange(event.target.name, event.target.value);
    };

    return(<p>
        <label htmlFor={props.name}>{props.name}:</label>
        <input type={props.type || 'text'} name={props.name} onChange={extractValue}/>
    </p>)
}

export {Field as default};