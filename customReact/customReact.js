function customRender(reactElement,mainContainer){
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute('href',reactElement.props.href);
  domElement.setAttribute('target',reactElement.props.target);
  mainContainer.append(domElement);
  
/*   const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for(const prop in reactElement.props){
    if(prop == 'children') break
    domElement.setAttribute(prop,reactElement.props[prop]);
  }
  mainContainer.append(domElement); */
}

const reactElement = {
  type : 'a',
  props : {
    href : 'https://google.com',
    target : '__blank'
  },
  children : 'Click here'
}

const mainContainer = document.getElementById('root');

customRender(reactElement,mainContainer);