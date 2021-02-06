export function createElement(tag, classes) {
    let element = document.createElement(tag);
    if(classes) {
        classes  = classes.split(' ');
        if(classes.length > 1) {
            classes = [...classes];
        }
    }
    element.classList.add(classes);
    return element;
}