#!/usr/bin/env node
/**
* @name      nominal.js
* @author    XGuest <xguest@list.ru>
* @link      https://github.com/xguest/nominal
* @version   2.0.1.0
* @copyright GPL applies.
*            No warranties XGuest[05.02.2016/09:48:26] nominal[ver.2.0.1.0]
* #guid      {A645E9CA-BE33-4642-AF0F-B4EF046D31E7}
*
* @description Подбирает значения числовых номиналов из стандартных
*              РЯДЫ ПРЕДПОЧТИТЕЛЬНЫХ ЗНАЧЕНИЙ ДЛЯ РЕЗИСТОРОВ И КОНДЕНСАТОРОВ
*              Соответствует ГОСТу-28884-90, МЭК 63 63
*
* @param {Number} [a]      Для положительных - Подбираемый номинал,
*                          Для отрицательных - Индекс a >= (-1 * b)
*                          undefined - рекурсия всех значений ряда b
*
* @param {Number} [b]      Номер номинального ряда стандарта
*                          E3, E6, E12, E24, E48, E96, E192.
*                          undefined - рекурсия всех рядов значения a
*
* @return {Number|Object}  Для (a || b) = undefined - Object номиналов
*                          Во всех остальных случаях предпочтительное значение
*/
/*eslint complexity: [2, 13]*/
function nominal(a, b) {
  function lg(a, b) {                                // Логарифм по основанию 10
    return parseInt(Math.log(a) / Math.LN10 * (b || 1), 10); // Целая часть
  }
  function pg(a, c) {                                // Степень по основанию 10
    var d = 25 > b ? 1 : 2;                          // Правило округления
    /*eslint no-unused-expressions: [2, { allowShortCircuit: true, allowTernary: true }]*/
    0 > a && (d -= a);                               // Для отрицательных
    return Number((Math.pow(10, a) * (c || 1))       // c = Мантисса
         .toFixed(0 < d ? d : undefined));           // Округление
  }
  /*eslint no-caller: 0*/
  var c, d = {};                                     // c = tmp_var; d = out_var;
  if (!b) {                                          // Не получен номер ряда
    for (b = 0; 7 > b; b++) {                        // Цикл рядов номиналов
      c = 3 * Math.pow(2, b);                        // Номер номинального ряда
      d[c] = arguments.callee(a, c);                 // Рекурсия
    }
    return d;                                        // Объект номиналов
  }
  if (!a) {                                          // Не получен номинал
    for (a = 1; a < b + 1; a++) {                    // Цикл по номиналам ряда
      d[a] = arguments.callee(-1 * a, b);            // Рекурсия
    }
    return d;                                        // Объект номиналов
  }
  a = 0 > a ?                                        // a < 0 получен индекс
      (c = 25 > b ? 0 : 2, -1 * a - 1) :             //
      (c = lg(a), d = lg(a / pg(c), b), d < 0 ? b + d : d); // индекс номинала
  for (d = 0; 7 > d; d++) {                          // Проверка ОДЗ
    if (b === (3 * Math.pow(2, d))) {d = 8;break;}   // для рядов номиналов
  }
  if (d !== 8 || Math.abs(a) > b) return;            // для индексов номиналов
  a = pg(a / b);                                     // Номинал по индексу
  return pg(c,                                       // Разрядность
      {'2.6': 2.7, '2.9': 3, '3.2': 3.3, '3.5': 3.6, '3.8': 3.9, // Исключения
        '4.2': 4.3, '4.6': 4.7, '8.3': 8.2, '9.19': 9.2}[a] || a);
}

module.exports = nominal;
