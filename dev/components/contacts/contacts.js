// contacts list scroll
new PerfectScrollbar('.js-contacts-scroll');

// contacts map
const placemarks = [[45.035470, 38.975313], [43.585525, 39.723062]];

ymaps.ready(function () {
  const contactsMap = new ymaps.Map('contacts-map', {
    center: [45.251574, 38.573856],
    zoom: 7
  });

  const placemarksCollection = new ymaps.GeoObjectCollection(null, {
    iconLayout: 'default#image',
    iconImageHref: 'data:image/svg+xml,%3Csvg%20width%3D%2221%22%20height%3D%2221%22%20viewBox%3D%220%200%2021%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2210.5%22%20cy%3D%2210.5%22%20r%3D%226.5%22%20fill%3D%22%23005C9E%22%2F%3E%0A%3Ccircle%20cx%3D%2210.5%22%20cy%3D%2210.5%22%20r%3D%2210.5%22%20fill%3D%22%23005C9E%22%20fill-opacity%3D%220.3%22%2F%3E%0A%3Ccircle%20cx%3D%2210.5%22%20cy%3D%2210.5%22%20r%3D%222.5%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E%0A',
    iconImageSize: [21, 21],
    iconImageOffset: [-10, -10]
  });

  placemarks.map(el => placemarksCollection.add(new ymaps.Placemark(el)));

  contactsMap.geoObjects.add(placemarksCollection);
});