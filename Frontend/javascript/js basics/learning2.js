//Parent Node Traversal
    // let x = document.querySelector('ul');
    // console.log(x.parentNode.parentNode.parentNode)
    // console.log(x.parentElement)
// < ----------------Parent Node Traversal--------------->

    // const html = document.documentElement
    // console.log(html.parentElement)

// < ----------------Child Node Traversal------------------->

    // let ul = document.querySelector('ul');
    // console.log(ul.childNodes)
    // console.log(ul.firstChild)
    // console.log(ul.lastChild)

    // ul.childNodes[1].style.backgroundColor = 'orange'

//other method

    // let ul = document.querySelector('ul');
    // console.log(ul.children);
    // console.log(ul.firstElementChild);
    // console.log(ul.lastElementChild);

    // ul.firstElementChild.style.fontFamily = 'cursive' // also works

// < ----------------Sibling Node Travesal------------------>

    let ul = document.querySelector('ul');
    const div = document.querySelector('div')

    console.log(div.childNodes)

    console.log(ul.previousSibling)
    console.log(ul.nextSibling)

// < --------------------------------------------------->