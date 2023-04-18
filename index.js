let year = prompt('Введіть рік народжененя: ');
let resultYear;
let resultTown;
let resultSport;
year === null
  ? alert(`${'Шкода, що Ви не захотіли вказати свій рік народження.'}`)
  : (resultYear = 2023 - year);

let town = prompt('Введіть місто в якому проживаєте: ');

switch (town) {
  case null:
    alert(`${'Шкода, що Ви не захотіли вказати місто проживання .'}`);
    break;
  case 'Києві':
    resultTown = `${'Ви проживаєте в столиці України'}`;
    break;
  case 'Вашингтоні':
    resultTown = `${'Ви проживаєте в столиці США'}`;
    break;
  case 'Лондоні':
    resultTown = `${'Ви проживаєте в столиці Великобританії'}`;
    break;
  default:
    resultTown = `${'Ви проживаєте в місті:' + ' ' + town}`;
    break;
}

let sport = prompt('Введіть улюблений вид спорту: ');

switch (sport) {
  case null:
    alert(`${'Шкода, що Ви не захотіли вказати вид спорту.'}`);
    resultSport = null;
    break;
  case 'бокс':
    resultSport = `${'Круто! Хочеш стати Кличком?'}`;
    break;
  case 'футбол':
    resultSport = `${'Круто! Хочеш стати Мессі?'}`;
    break;
  case 'формула-1':
    resultSport = `${'Круто! Хочеш стати Шумахером'}`;
    break;
  default:
    resultSport = `${'Ваш вид спорту:' + ' ' + sport}`;
}

switch (true) {
  case year === null && town !== null && sport !== null:
    alert(`
    ${resultTown},
    ${resultSport}`);
    break;
  case year === null && town === null && sport !== null:
    alert(`
      ${resultSport}`);
    break;
  case year === null && town !== null && sport === null:
    alert(`
      ${resultTown}`);
    break;
  case year !== null && town === null && sport === null:
    alert(`
      ${'Ваш вік становить:' + ' ' + resultYear}`);
    break;
  case year !== null && town === null && sport !== null:
    alert(`
    ${'Ваш вік становить:' + ' ' + resultYear},
    ${resultSport}`);
    break;
  case year !== null && town !== null && sport === null:
    alert(`
    ${'Ваш вік становить:' + ' ' + resultYear},
    ${resultTown}`);
    break;
  case year === null && town === null && sport === null:
    alert(`
    ${'Шкода, що ви недали жодної відповіді!!!'}`);
    break;
  default:
    alert(`
    ${'Ваш вік становить:' + ' ' + resultYear},
    ${resultTown},
    ${resultSport}`);
}
