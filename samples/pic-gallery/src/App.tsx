import * as React from 'react';
import './App.css';
import * as classNames from "classnames";
import {RefObject} from "react";
import {CELL_ADD, isCellAdd, isCellEmpty, Line, MAX_CELL} from "./types";
import {PictureDTO} from "../common/picture.dto";

interface AppProps {
}

interface AppState {
    lines: Line[];
    currentLine: Line;
}

class App extends React.Component<AppProps, AppState> {
    refFileInput: RefObject<HTMLInputElement>;

    constructor(props){
        super(props);

        this.refFileInput = React.createRef();

        const firstLine = [CELL_ADD as any];

        this.state = {
            lines: [firstLine],
            currentLine: firstLine,
        };

        this.loadPicsFromServer();
    }

    private async loadPicsFromServer(){
        console.log("loadPicsFromServer");

        const res = await fetch("/api/picture");
        const files: PictureDTO[] = await res.json();
        for(const file of files) {
            this.addPic(file);
        }
    }

    private async savePicToServer(pic: PictureDTO) {
        console.log("savePicToServer");

        const res = await fetch("/api/picture", {
            method: "POST",
            body: JSON.stringify(pic),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });

        console.log("post res", res);
    }

    public render() {
        console.log("render");

        const lines = this.state.lines;

        return (
            <div className="App">
                <input type="file" ref={this.refFileInput} onChange={this.onFileInputChanged} />

                {
                    lines.map((line,index) => <div className="line" key={index}>
                        {
                            this.renderLineContent(line)
                        }
                    </div>)
                }
            </div>
        );
    }

    private onAddCellClicked = () => {
        console.log("onAddCellClicked");

        this.refFileInput.current.click();
    }

    private onFileInputChanged = () => {
        console.log("onFileInputChanged");

        const files = this.refFileInput.current.files;
        for (let i=0; i<files.length; i++) {
            const file = files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                this.savePic({
                    name: file.name,
                    dataUrl: e.target.result,
                });

                this.refFileInput.current.value = "";
            }

            reader.readAsDataURL(file);
        }
    }

    private renderLineContent(line: Line){
        const fixedLine = line.concat([]);

        for(let i=fixedLine.length; i<MAX_CELL; i++){
            fixedLine.push(null);
        }

        return fixedLine.map((cell, index) => isCellAdd(cell) ?
            <div key={index} className="cell cell-plus" onClick={this.onAddCellClicked}>
                +
            </div>

            :

            <div key={index} className={classNames("cell", "cell-pic", {"cell-empty": isCellEmpty(cell)})}>
                {this.renderCellPictureContent(cell)}
            </div>
        )
    }

    private renderCellPictureContent(cell) {
        return isCellEmpty(cell) ? null : <img src={cell.dataUrl} />;
    }

    private async savePic(pic: PictureDTO) {
        await this.savePicToServer(pic);

        this.addPic(pic);
    }

    private addPic(pic: PictureDTO) {
        let {lines, currentLine} = this.state;

        if(currentLine.length == MAX_CELL){
            currentLine = [pic];
            lines = lines.concat([currentLine]);
        }
        else {
            currentLine = currentLine.concat([pic]);
            lines = lines.concat([]);
        }

        lines[lines.length-1] = currentLine;

        this.setState({
            lines,
            currentLine,
        });
    }
}

export default App;
