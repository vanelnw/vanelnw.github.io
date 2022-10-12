const close = document.querySelector('.close-menu');
const menulist = document.getElementById('myLinks');
const burgerMenu = document.getElementById('mobile-menu');
const logo = document.querySelector('.logo');

burgerMenu.addEventListener('click', () => {
  if (menulist.style.display === 'block') {
    menulist.style.display = 'none';
    menulist.classList.remove('menu-list-show');
  } else {
    menulist.style.display = 'block';
    burgerMenu.style.display = 'none';
    logo.style.display = 'none';
    menulist.classList.add('menu-list-show');
  }
});

close.addEventListener('click', () => {
  menulist.style.display = 'none';
  burgerMenu.style.display = 'block';
  logo.style.display = 'block';
  menulist.classList.remove('menu-list-show');
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu-link')) {
    menulist.style.display = 'none';
    burgerMenu.style.display = 'block';
    logo.style.display = 'block';
    menulist.classList.remove('menu-list-show');
  }
  if (e.target.classList.contains('link')) {
    menulist.style.display = 'none';
    burgerMenu.style.display = 'block';
    logo.style.display = 'block';
    menulist.classList.remove('menu-list-show');
  }
});

// WORK SESSION
const workDetailsInfos = [
  {
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: './assets/hero-work.png',
    technologies: ['html', 'css', 'bootstrap', 'Ruby'],
    liveLink: 'https://github.com/vanelnw/vanelnw.github.io',
    sourceLink: 'https://github.com/vanelnw/vanelnw.github.io',
  },
  {
    name: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: './assets/workimg.png',
    technologies: ['html', 'css', 'bootstrap', 'Ruby'],
    liveLink: 'https://github.com/vanelnw/vanelnw.github.io',
    sourceLink: 'https://github.com/vanelnw/vanelnw.github.io',
  },
  {
    name: 'Website Protfolio',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: './assets/work-img-2.png',
    technologies: ['html', 'css', 'bootstrap', 'Ruby'],
    liveLink: 'https://github.com/vanelnw/vanelnw.github.io',
    sourceLink: 'https://github.com/vanelnw/vanelnw.github.io',
  },
  {
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: './assets/work-img-3.png',
    technologies: ['html', 'css', 'bootstrap', 'Ruby'],
    liveLink: 'https://github.com/vanelnw/vanelnw.github.io',
    sourceLink: 'https://github.com/vanelnw/vanelnw.github.io',
  },
  {
    name: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: './assets/workimg.png',
    technologies: ['html', 'css', 'bootstrap', 'Ruby'],
    liveLink: 'https://github.com/vanelnw/vanelnw.github.io',
    sourceLink: 'https://github.com/vanelnw/vanelnw.github.io',
  },
  {
    name: 'Website Protfolio',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: './assets/work-img-2.png',
    technologies: ['html', 'css', 'bootstrap', 'Ruby'],
    liveLink: 'https://github.com/vanelnw/vanelnw.github.io',
    sourceLink: 'https://github.com/vanelnw/vanelnw.github.io',
  },
  {
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: './assets/work-img-3.png',
    technologies: ['html', 'css', 'bootstrap', 'Ruby'],
    liveLink: 'https://github.com/vanelnw/vanelnw.github.io',
    sourceLink: 'https://github.com/vanelnw/vanelnw.github.io',
  },
];

const body = document.querySelector('body');
const workSection = document.createElement('section');

workSection.setAttribute('id', 'Portfolio');
workSection.setAttribute('class', 'works');

const workSectionTitle = document.createElement('div');
workSectionTitle.setAttribute('class', 'title');
workSectionTitle.innerHTML = `<h2>My Recent Works</h2>
          <hr />`;

workSection.append(workSectionTitle);

const workSectionContainer = document.createElement('div');
workSectionContainer.setAttribute('class', 'work-container');

// eslint-disable-next-line no-restricted-syntax
for (const element of workDetailsInfos) {
  const work = document.createElement('div');
  work.innerHTML = ` 
            <img src=${element.image} />
            <div class="layer">
              <div class="title">${element.name}</div>
              <p>
                ${element.description}
              </p>
              <ul></ul>
              <button class="see-button">See Project</button>
            </div>`;
  if (element === workDetailsInfos[0]) {
    work.setAttribute('class', 'hero-work');
    work.querySelector('img').classList.add('hero-img');
  } else {
    work.setAttribute('class', 'work-card');
  }

  const ul = work.querySelector('ul');

  element.technologies.forEach((e) => {
    const g = document.createElement('li');
    g.setAttribute('id', e);
    g.innerHTML = `<div class="work-cart">${e}</div>`;
    ul.appendChild(g);
  });
  workSectionContainer.append(work);
}

workSection.append(workSectionContainer);
body.insertBefore(workSection, body.children[2]);
// work popup
function togglePopup() {
    document.querySelector('.work-popup').classList.toggle('open');
  }
  
  function workItemDetails(workItem) {
    const details = workDetailsInfos.filter(
      (x) => x.name === workItem.querySelector('.title').innerText,
    );
  
    document.querySelector('.popup-img').src = details[0].image;
    document.querySelector('.popup-top-title').innerText = details[0].name;
    document.querySelector('.popup-info-desc').innerText = details[0].description;
  
    const seeDemo = document.querySelector('.see-live');
    const seeSource = document.querySelector('.see-source');
    seeDemo.setAttribute('onclick', `location.href= '${details[0].liveLink}'`);
    seeSource.setAttribute('onclick', `location.href= '${details[0].sourceLink}'`);
  }
  
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('see-button')) {
      togglePopup();
      workItemDetails(e.target.parentElement.parentElement);
    }
  });
  
  document.querySelector('.work-popup-close').addEventListener('click', togglePopup);
  