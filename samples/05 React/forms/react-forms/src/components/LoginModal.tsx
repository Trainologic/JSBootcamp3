import * as React from 'react';
import {IUser} from 'models/Entities';
import Field from './Field';

interface ILoginModalProps {
    onSubmit: (u:IUser) => boolean
}

interface ILoginModalState {
    user: IUser
}

export default class LoginModal extends React.Component<ILoginModalProps, ILoginModalState> {

    constructor(props) {
        super(props);
        this.state = {
            user: {username: '', password: ''}
        }
    }

    updateField = (fieldName: string, value: string)=>{

        this.setState(prevState => {
            //1
            //prevState.user[fieldName] = value;

            // const newState = Object.assign({},
            //     prevState,
            //     {user:prevState.user});
            //
            // return newState;

            return {
                // 1
                //user: prevState.user
                // 2
                prop:'sdf',
                user: {
                    ...this.state.user,
                    [fieldName]: value
                }
            }
        })
    };

    submitHandler = (e:React.MouseEvent<HTMLButtonElement>) =>{
        this.props.onSubmit(this.state.user);
    };

    render() {
        return (
            <div>
                    <Field name={'username'} type={'text'} onChange={this.updateField}/>
                    <Field name={'password'} type={'password'} onChange={this.updateField}/>

                <button type="submit" onClick={this.submitHandler}>Login</button>
            </div>
        );
    }
}