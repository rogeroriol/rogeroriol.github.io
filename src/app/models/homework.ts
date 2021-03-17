export class Homework {
    private _id: string;
    private _title: string;
    private _tag: string;
    private _content: string;

    constructor(){
        this._id = "";
        this._title = "";
        this._tag = "";
        this._content = "";
    }

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get tag(): string {
        return this._tag;
    }

    get content(): string {
        return this._content;
    }

    set id(id: string) {
        this._id = id;
    }

    set title(title: string){
        this._title = title;
    }

    set tag(tag: string) {
        this._tag = tag;
    }

    set content(content: string){
        this._content = content;
    }

}
