console.log("hello world");

/* pwd - показує поточну дерикторію, де ви знаходитесь
ls - показати які файли і папки
clear - очистити термінал або ctrl+l
ls -l - показати всі файли
ls -la - показати разом з прихованими файлами
cd - навгаціяпо папкам
cd D: - виходить на диск D
touch - створює новий файл
mv - переіменовує файл
rm - видаляє файли
 rm -r  HW =  rm -rf ./HW/ - видаляє папку
mkdir - створює нову папку */
/* 
npm init - ініціалізує npm в проекті і створює файл package.json
npm install - встановлює всі залежності, перелічені в package.json
npm list --depth=0 - виведе в терміналі список локально встановлених пакетів з номерами їх версій, без залежностей
npm install [package-name] - встановить пакет локально у папку node_modules
npm uninstall [package-name] - видалить пакет, встановлений локально і оновить package.json
npm start і npm test - запустить скрипт start або test, розташований в package.json
npm run [custom-script] - запустить кастомний скрипт, розташований в package.json
npm outdated - використовується для пошуку оновлень, виявить сумісні версії програмно і виведе список доступних оновлень
npm update - оновить всі пакети до максимально дозволеної версії 

//?Прапорці для instal/unistal
--save — вказує, що додається залежність, яка увійде до фінального продукту. Пакет буде встановлений локально, в папку node_modules і буде доданий запис в поле dependencies в package.json.
--save-dev — вказує, що додається залежність розробки. Пакет буде встановлений локально в папку node_modules, і буде доданий запис в поле devDependencies в package.json.
--global — вказує, що додається глобальна залежність, тобто інструмент, який доступний для будь-якого проєкту. Пакет буде встановлений глобально (в систему).
*/
/* //! Управління пакетами
npm outdated — використовується для пошуку оновлень, виявить сумісні версії програмно.
npm update — оновить всі пакети до максимально дозволеної версії.
npm update [ім'я-пакета] — оновить зазначений пакет. */
const validator = require("validator");

const validateEmail = (email) => {
  return validator.isEmail(email);
};
console.log(
  "is saha02247@gmail.com a valid email? ",
  validateEmail("saha02247@gmail.com")
);

console.log("is saha02247 a valid email? ", validateEmail("saha02247"));
