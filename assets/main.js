function initData() {
  window.$kafuu = {
    user: {},
    links: [],
  };
  window.$inori = {
    user: {
      name: 'DSRInori',
      bio: 'Go bold',
      avatar:
        'https://cdn.jsdelivr.net/gh/dsrkafuu/dsr-assets@3.0.0/avatar/omochi_256p.webp',
    },
    links: [
      {
        name: 'Twitter',
        icon: 'twitter',
        href: 'https://twitter.com/dsrinori',
      },
      {
        name: 'Steam',
        icon: 'steam',
        href: 'https://steamcommunity.com/id/dsrinori/',
      },
      {
        name: 'GitHub',
        icon: 'github',
        href: 'https://github.com/dsrinori',
      },
    ],
  };
  // init kafuu's meta
  const name = document.querySelector('.info .meta h1');
  const bio = document.querySelector('.info .meta p');
  const avatar = document.querySelector('.avatar img');
  window.$kafuu.user = {
    name: name.textContent,
    bio: bio.textContent,
    avatar: avatar.getAttribute('src'),
  };
  // init kafuu's links
  const links = document.querySelectorAll('.links .link');
  links.forEach((link) => {
    const icon = link.querySelector('.icon');
    window.$kafuu.links.push({
      name: link.textContent,
      icon: icon.cloneNode(true),
      href: link.getAttribute('href'),
    });
  });
  // init inori's link icons
  window.$inori.links.forEach((link, idx) => {
    const icon = document.querySelector('.icon-' + link.icon);
    window.$inori.links[idx].icon = icon.cloneNode(true);
  });
}

function switchUser() {
  const curUser = document.querySelector('.info .meta h1').textContent;
  const newUser = curUser === 'DSRInori' ? window.$kafuu : window.$inori;
  // update meta
  const name = document.querySelector('.info .meta h1');
  const bio = document.querySelector('.info .meta p');
  const avatar = document.querySelector('.avatar img');
  name.textContent = newUser.user.name;
  bio.textContent = newUser.user.bio;
  avatar.setAttribute('src', newUser.user.avatar);
  // update links
  const links = document.querySelector('.links').cloneNode(false);
  const template = document.querySelector('.links .link').cloneNode(true);
  newUser.links.forEach((link) => {
    const newNode = template.cloneNode(false);
    newNode.setAttribute('href', link.href);
    newNode.setAttribute('title', link.name);
    newNode.setAttribute('aria-label', link.name);
    newNode.appendChild(link.icon);
    links.appendChild(newNode);
  });
  document.querySelector('.links').replaceWith(links);
}

document.addEventListener('DOMContentLoaded', () => {
  initData();
  const button = document.getElementById('switch');
  button.addEventListener('click', switchUser);
});
