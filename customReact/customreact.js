function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type) 
    document.innerHTML = reactElement.children 
    document.setAttribute('href', reactElement.props.href) 
    document.setAttribute('target', reactElement.props.target) 
    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type);
    
    // Set children (for text)
    domElement.innerHTML = reactElement.children;

    // Set attributes
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // Add to container
    container.appendChild(domElement);
}

const reactElement = {
    type : 'a',
    props : {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit Google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
