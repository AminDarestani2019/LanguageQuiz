const QUESTIONS = {
  EnglishToPersian: [
    {
      id: 'q1',
      text: 'What is the Persian translation of "house"?',
      answers: ['خانه', 'درخت', 'ماشین', 'رودخانه'],
    },
    {
      id: 'q2',
      text: 'What is the Persian translation of "car"?',
      answers: ['ماشین', 'مدرسه', 'کتاب', 'آب'],
    },
    {
      id: 'q3',
      text: 'What is the Persian translation of "book"?',
      answers: ['کتاب', 'صندلی', 'میز', 'پنجره'],
    },
    {
      id: 'q4',
      text: 'What is the Persian translation of "tree"?',
      answers: ['درخت', 'خانه', 'کتاب', 'آب'],
    },
    {
      id: 'q5',
      text: 'What is the Persian translation of "school"?',
      answers: ['مدرسه', 'میز', 'صندلی', 'کتاب'],
    },
    {
      id: 'q6',
      text: 'What is the Persian translation of "river"?',
      answers: ['رودخانه', 'جنگل', 'آب', 'میز'],
    },
    {
      id: 'q7',
      text: 'What is the Persian translation of "window"?',
      answers: ['پنجره', 'کتاب', 'درب', 'کاغذ'],
    }
  ],
  EnglishToGerman: [
    {
      id: 'q1',
      text: 'What is the German translation of "house"?',
      answers: ['Haus', 'Baum', 'Auto', 'Fluss'],
    },
    {
      id: 'q2',
      text: 'What is the German translation of "car"?',
      answers: ['Auto', 'Schule', 'Buch', 'Wasser'],
    },
    {
      id: 'q3',
      text: 'What is the German translation of "book"?',
      answers: ['Buch', 'Stuhl', 'Tisch', 'Fenster'],
    },
    {
      id: 'q4',
      text: 'What is the German translation of "tree"?',
      answers: ['Baum', 'Haus', 'Auto', 'Fluss'],
    },
    {
      id: 'q5',
      text: 'What is the German translation of "school"?',
      answers: ['Schule', 'Fenster', 'Buch', 'Tisch'],
    },
    {
      id: 'q6',
      text: 'What is the German translation of "river"?',
      answers: ['Fluss', 'Haus', 'Baum', 'Auto'],
    },
    {
      id: 'q7',
      text: 'What is the German translation of "window"?',
      answers: ['Fenster', 'Baum', 'Schule', 'Tisch'],
    }
  ],
  PersianToEnglish: [
    {
      id: 'q1',
      text: 'معنی کلمه "خانه" به زبان انگلیسی چیست?',
      answers: ['house', 'tree', 'car', 'river'],
    },
    {
      id: 'q2',
      text: 'معنی کلمه "ماشین" به زبان انگلیسی چیست?',
      answers: ['car', 'school', 'book', 'water'],
    },
    {
      id: 'q3',
      text: 'معنی کلمه "کتاب" به زبان انگلیسی چیست?',
      answers: ['book', 'chair', 'table', 'window'],
    },
    {
      id: 'q4',
      text: 'معنی کلمه "درخت" به زبان انگلیسی چیست?',
      answers: ['tree', 'house', 'car', 'river'],
    },
    {
      id: 'q5',
      text: 'معنی کلمه "مدرسه" به زبان انگلیسی چیست?',
      answers: ['school', 'window', 'tree', 'car'],
    },
    {
      id: 'q6',
      text: 'معنی کلمه "رودخانه" به زبان انگلیسی چیست?',
      answers: ['river', 'book', 'table', 'tree'],
    },
    {
      id: 'q7',
      text: 'معنی کلمه "پنجره" به زبان انگلیسی چیست?',
      answers: ['window', 'house', 'book', 'tree'],
    }
  ],
  PersianToGerman: [
    {
      id: 'q1',
      text: 'معنی کلمه "خانه" به زبان آلمانی چیست?',
      answers: ['Haus', 'Baum', 'Auto', 'Fluss'],
    },
    {
      id: 'q2',
      text: 'معنی کلمه "ماشین" به زبان آلمانی چیست?',
      answers: ['Auto', 'Schule', 'Buch', 'Wasser'],
    },
    {
      id: 'q3',
      text: 'معنی کلمه "کتاب" به زبان آلمانی چیست?',
      answers: ['Buch', 'Stuhl', 'Tisch', 'Fenster'],
    },
    {
      id: 'q4',
      text: 'معنی کلمه "درخت" به زبان آلمانی چیست?',
      answers: ['Baum', 'Haus', 'Auto', 'Fluss'],
    },
    {
      id: 'q5',
      text: 'معنی کلمه "مدرسه" به زبان آلمانی چیست?',
      answers: ['Schule', 'Fenster', 'Buch', 'Tisch'],
    },
    {
      id: 'q6',
      text: 'معنی کلمه "رودخانه" به زبان آلمانی چیست?',
      answers: ['Fluss', 'Baum', 'Auto', 'Haus'],
    },
    {
      id: 'q7',
      text: 'معنی کلمه "پنجره" به زبان آلمانی چیست?',
      answers: ['Fenster', 'Baum', 'Schule', 'Tisch'],
    }
  ],
  GermanToEnglish: [
    {
      id: 'q1',
      text: 'Wie lautet die englische Übersetzung von "Haus"?',
      answers: ['house', 'tree', 'car', 'river'],
    },
    {
      id: 'q2',
      text: 'Wie lautet die englische Übersetzung von "Auto"?',
      answers: ['car', 'school', 'book', 'water'],
    },
    {
      id: 'q3',
      text: 'Wie lautet die englische Übersetzung von "Buch"?',
      answers: ['book', 'chair', 'table', 'window'],
    },
    {
      id: 'q4',
      text: 'Wie lautet die englische Übersetzung von "Baum"?',
      answers: ['tree', 'house', 'car', 'river'],
    },
    {
      id: 'q5',
      text: 'Wie lautet die englische Übersetzung von "Schule"?',
      answers: ['school', 'window', 'tree', 'car'],
    },
    {
      id: 'q6',
      text: 'Wie lautet die englische Übersetzung von "Fluss"?',
      answers: ['river', 'book', 'table', 'tree'],
    },
    {
      id: 'q7',
      text: 'Wie lautet die englische Übersetzung von "Fenster"?',
      answers: ['window', 'house', 'book', 'tree'],
    }
  ],
  GermanToPersian: [
    {
      id: 'q1',
      text: 'Was ist die persische Übersetzung von "Haus"?',
      answers: ['خانه', 'درخت', 'ماشین', 'رودخانه'],
    },
    {
      id: 'q2',
      text: 'Was ist die persische Übersetzung von "Auto"?',
      answers: ['ماشین', 'مدرسه', 'کتاب', 'آب'],
    },
    {
      id: 'q3',
      text: 'Was ist die persische Übersetzung von "Buch"?',
      answers: ['کتاب', 'صندلی', 'میز', 'پنجره'],
    },
    {
      id: 'q4',
      text: 'Was ist die persische Übersetzung von "Baum"?',
      answers: ['درخت', 'خانه', 'ماشین', 'رودخانه'],
    },
    {
      id: 'q5',
      text: 'Was ist die persische Übersetzung von "Schule"?',
      answers: ['مدرسه', 'پنجره', 'کتاب', 'میز'],
    },
    {
      id: 'q6',
      text: 'Was ist die persische Übersetzung von "Fluss"?',
      answers: ['رودخانه', 'درخت', 'ماشین', 'خانه'],
    },
    {
      id: 'q7',
      text: 'Was ist die persische Übersetzung von "Fenster"?',
      answers: ['پنجره', 'خانه', 'کتاب', 'درخت'],
    }
  ]
};

export default QUESTIONS;
