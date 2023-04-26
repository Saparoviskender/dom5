const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

const convert = (elem, target1, target2) => {
  elem.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'data.json');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send();

    request.addEventListener('load', () => {
      const data = JSON.parse(request.response);

      if (target1.id === 'usd' && target2.id === 'som') {
        target1.value = (elem.value / data.usd).toFixed(2);
        target2.value = (elem.value * data.som).toFixed(2);
      } else if (target1.id === 'som' && target2.id === 'usd') {
        target1.value = (elem.value / data.som).toFixed(2);
        target2.value = (elem.value * data.usd).toFixed(2);
      } else if (target1.id === 'eur' && target2.id === 'som') {
        target1.value = (elem.value / data.eur).toFixed(2);
        target2.value = (elem.value * data.som).toFixed(2);
      } else if (target1.id === 'som' && target2.id === 'eur') {
        target1.value = (elem.value / data.som).toFixed(2);
        target2.value = (elem.value * data.eur).toFixed(2);
      } else if (target1.id === 'usd' && target2.id === 'eur') {
        target1.value = (elem.value / data.usd).toFixed(2);
        target2.value = (target1.value * data.eur).toFixed(2);
      } else if (target1.id === 'eur' && target2.id === 'usd') {
        target1.value = (elem.value / data.eur).toFixed(2);
        target2.value = (target1.value * data.usd).toFixed(2);
      }

      if (elem.value === '') {
        target1.value = '';
        target2.value = '';
      }
    });
  });
};

convert(som, usd, eur);
convert(usd, som, eur);


convert(som, eur, usd);
convert(eur, som, usd);

convert(usd, eur, som);
convert(eur, usd, som);
