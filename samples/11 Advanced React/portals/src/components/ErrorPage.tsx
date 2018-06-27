import * as React from 'react';

const pageStyle: any = {
    textAlign: "center"
};

const imageStyle = {
    width: '30%'
}

interface IErrorPageProps {
    error: any
};

const ErrorPage:  React.SFC<IErrorPageProps> = function ErrorPage(prop: IErrorPageProps) {
    return (
        <div style={pageStyle} id="ErrorPage">
            <img style={imageStyle} src="https://media.giphy.com/media/l41m3AoGzVZUDEL9C/giphy.gif" />
            <h2>Now watch whip, now watch me:</h2>
            <h4 style={{color: 'red'}}>{prop.error.message}</h4>
        </div>
    )
}

export default ErrorPage;
