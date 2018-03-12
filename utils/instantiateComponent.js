const DOMComponent = require('./DOMComponent')

function instantiateComponent(element) {
    let componentInstance
    if (typeof element.type === 'function') {
        componentInstance = new element.type(element.props)
        //componentInstance._construct(element)
    } else if (typeof element.type === 'string') {
        componentInstance = new DOMComponent(element)
    } else if (typeof element === 'string') {
        componentInstance = new DOMComponent({
            type: 'span',
            children: { children: element }
        })
    }
    console.log('instant',element.type)
    return componentInstance
}

module.exports = instantiateComponent