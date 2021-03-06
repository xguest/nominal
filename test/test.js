#!/usr/bin/env node
/* globals before, describe, it */
'use strict';
/**
 * Module dependencies.
 */
var nominal = process.env.NPM_COV
  ? require('../nominal-cov')
  : require('../nominal');
/* End of dependencies. */

var assert  = require("assert");

var a = {
 3:   {1: 1, 2: 2.2, 3: 4.7},
 6:   {1: 1, 2: 1.5, 3: 2.2, 4: 3.3, 5: 4.7, 6: 6.8},
 12:  {1: 1, 2: 1.2, 3: 1.5, 4: 1.8, 5: 2.2, 6: 2.7, 7: 3.3, 8: 3.9, 9: 4.7, 10: 5.6, 11: 6.8, 12: 8.2},
 24:  {1: 1, 2: 1.1, 3: 1.2, 4: 1.3, 5: 1.5, 6: 1.6, 7: 1.8, 8: 2, 9: 2.2, 10: 2.4, 11: 2.7, 12: 3, 13: 3.3, 14: 3.6, 15: 3.9, 16: 4.3, 17: 4.7, 18: 5.1, 19: 5.6, 20: 6.2, 21: 6.8, 22: 7.5, 23: 8.2, 24: 9.1},
 48:  {1: 100, 2: 105, 3: 110, 4: 115, 5: 121, 6: 127, 7: 133, 8: 140, 9: 147, 10: 154, 11: 162, 12: 169, 13: 178, 14: 187, 15: 196, 16: 205, 17: 215, 18: 226, 19: 237, 20: 249, 21: 261, 22: 274, 23: 287, 24: 301, 25: 316, 26: 332, 27: 348, 28: 365, 29: 383, 30: 402, 31: 422, 32: 442, 33: 464, 34: 487, 35: 511, 36: 536, 37: 562, 38: 590, 39: 619, 40: 649, 41: 681, 42: 715, 43: 750, 44: 787, 45: 825, 46: 866, 47: 909, 48: 953},
 96:  {1: 100, 2: 102, 3: 105, 4: 107, 5: 110, 6: 113, 7: 115, 8: 118, 9: 121, 10: 124, 11: 127, 12: 130, 13: 133, 14: 137, 15: 140, 16: 143, 17: 147, 18: 150, 19: 154, 20: 158, 21: 162, 22: 165, 23: 169, 24: 174, 25: 178, 26: 182, 27: 187, 28: 191, 29: 196, 30: 200, 31: 205, 32: 210, 33: 215, 34: 221, 35: 226, 36: 232, 37: 237, 38: 243, 39: 249, 40: 255, 41: 261, 42: 267, 43: 274, 44: 280, 45: 287, 46: 294, 47: 301, 48: 309, 49: 316, 50: 324, 51: 332, 52: 340, 53: 348, 54: 357, 55: 365, 56: 374, 57: 383, 58: 392, 59: 402, 60: 412, 61: 422, 62: 432, 63: 442, 64: 453, 65: 464, 66: 475, 67: 487, 68: 499, 69: 511, 70: 523, 71: 536, 72: 549, 73: 562, 74: 576, 75: 590, 76: 604, 77: 619, 78: 634, 79: 649, 80: 665, 81: 681, 82: 698, 83: 715, 84: 732, 85: 750, 86: 768, 87: 787, 88: 806, 89: 825, 90: 845, 91: 866, 92: 887, 93: 909, 94: 931, 95: 953, 96: 976},
 192: {1: 100, 2: 101, 3: 102, 4: 104, 5: 105, 6: 106, 7: 107, 8: 109, 9: 110, 10: 111, 11: 113, 12: 114, 13: 115, 14: 117, 15: 118, 16: 120, 17: 121, 18: 123, 19: 124, 20: 126, 21: 127, 22: 129, 23: 130, 24: 132, 25: 133, 26: 135, 27: 137, 28: 138, 29: 140, 30: 142, 31: 143, 32: 145, 33: 147, 34: 149, 35: 150, 36: 152, 37: 154, 38: 156, 39: 158, 40: 160, 41: 162, 42: 164, 43: 165, 44: 167, 45: 169, 46: 172, 47: 174, 48: 176, 49: 178, 50: 180, 51: 182, 52: 184, 53: 187, 54: 189, 55: 191, 56: 193, 57: 196, 58: 198, 59: 200, 60: 203, 61: 205, 62: 208, 63: 210, 64: 213, 65: 215, 66: 218, 67: 221, 68: 223, 69: 226, 70: 229, 71: 232, 72: 234, 73: 237, 74: 240, 75: 243, 76: 246, 77: 249, 78: 252, 79: 255, 80: 258, 81: 261, 82: 264, 83: 267, 84: 271, 85: 274, 86: 277, 87: 280, 88: 284, 89: 287, 90: 291, 91: 294, 92: 298, 93: 301, 94: 305, 95: 309, 96: 312, 97: 316, 98: 330, 99: 324, 100: 328, 101: 332, 102: 336, 103: 340, 104: 344, 105: 348, 106: 352, 107: 357, 108: 361, 109: 365, 110: 370, 111: 374, 112: 379, 113: 383, 114: 388, 115: 392, 116: 397, 117: 402, 118: 407, 119: 412, 120: 417, 121: 422, 122: 427, 123: 432, 124: 437, 125: 442, 126: 448, 127: 453, 128: 459, 129: 464, 130: 470, 131: 475, 132: 481, 133: 487, 134: 493, 135: 499, 136: 505, 137: 511, 138: 517, 139: 523, 140: 530, 141: 536, 142: 542, 143: 549, 144: 556, 145: 562, 146: 569, 147: 576, 148: 583, 149: 590, 150: 597, 151: 604, 152: 612, 153: 619, 154: 626, 155: 634, 156: 642, 157: 649, 158: 657, 159: 665, 160: 673, 161: 681, 162: 690, 163: 698, 164: 706, 165: 715, 166: 723, 167: 732, 168: 741, 169: 750, 170: 759, 171: 768, 172: 777, 173: 787, 174: 796, 175: 806, 176: 816, 177: 825, 178: 835, 179: 845, 180: 856, 181: 866, 182: 876, 183: 887, 184: 898, 185: 909, 186: 920, 187: 931, 188: 942, 189: 953, 190: 965, 191: 976, 192: 988}
};

var b = {3:undefined, 6: 4.7, 12: 2.2, 24: 1.5, 48: 121, 96: 110, 192: 105};
var c = {3: 4.7, 6: 4.7, 12: 4.7, 24: 4.7, 48: 4.87, 96: 4.99, 192: 4.99};
var d = {1: 1, 2: 1.5, 3: 2.2, 4: 3.3, 5: 4.7, 6: 6.8};

describe("nominal", function() {
 it("Без параметров       ==> Объект всех рядов стандарта", function() {assert.deepEqual(nominal(), a);});
 it("Только индекс        ==> Объект номиналов всех рядов стандарта для этого индекса",  function() {assert.deepEqual(nominal(-5),b);});
 it("Только значение      ==> Объект индексов всех рядов стандарта для этого значения",  function() {assert.deepEqual(nominal(5), c);});
 it("Только номер ряда    ==> Объект всех элементов стандарта для этого ряда",           function() {assert.deepEqual(nominal("", 6), d);});
 it("Индекс и номер ряда  ==> Номинал по индексу из указанного ряда",                    function() {assert.deepEqual(nominal(-6, 6), 6.8);});
 it("Номинал и номер ряда ==> Номинал <= полученному из указанного ряда",                function() {assert.deepEqual(nominal(6, 6), 4.7);});
});
