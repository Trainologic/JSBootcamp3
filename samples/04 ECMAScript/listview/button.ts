class Button {
    constructor(private element) {
    }

    click(callback){
        this.element.addEventListener("click", callback);
    }
}