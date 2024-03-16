function init() {

    let center = [57.35684643096814,37.59965979467976];
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 15

    });
      let placemark = new ymaps.Placemark(center,{
        balloonContentHeader:'Underground',
        balloonContentBody: 'Кибер клуб',
        balloonContentFooter: 'Номер илюхи олдмани',
      },
      {
        iconLayout: 'default#image',
        iconImageHref:'static/images/free-icon-map-pin-8385854.png',
        iconImageSize: [30,30],
        iconImageOffset:[-13,-19]
      });
      map.controls.remove('geolocationControl'); // удаляем геолокацию
      map.controls.remove('searchControl'); // удаляем поиск
      map.controls.remove('trafficControl'); // удаляем контроль трафика
      map.controls.remove('typeSelector'); // удаляем тип
      map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map.controls.remove('rulerControl'); // удаляем контрол правил
      map.geoObjects.add(placemark);
}

ymaps.ready(init);