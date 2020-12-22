import svgSpinner from '../svg/spinner-third.svg';

/**
 * generate redirect dom
 */
function insertIndicator() {
  // gen section
  const label = document.createElement('span');
  label.textContent = 'redirecting';
  const div = document.createElement('div');
  div.classList.add('redirect');
  div.innerHTML = String(svgSpinner).trim();
  div.appendChild(label);

  // insert
  const main = document.querySelector('#main .card');
  main.appendChild(div);
}

export { insertIndicator };
