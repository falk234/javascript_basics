const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.textContent= "Hey I'm red!";
paragraph.style.color='red';

container.appendChild(paragraph);

const header3 = document.createElement('h3');
header3.textContent="I’m a blue h3!";
header3.style.color='blue';

container.appendChild(header3);

const pink_div = document.createElement('div');
pink_div.style.cssText="border:black; background:pink";

const pinkdiv_h1 = document.createElement('h1');
pinkdiv_h1.textContent="I’m in a div";
pink_div.appendChild(pinkdiv_h1);

const pinkdiv_p = document.createElement('p');
pinkdiv_p.textContent="ME TOO!";
pink_div.appendChild(pinkdiv_p);

container.appendChild(pink_div);