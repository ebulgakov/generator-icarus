Icarus (0.1.0)
================

Это генератор HTML-верстки на основе [Yeoman].

## Настройка окружения
1. Скачать и установить [nodeJS]
2. В консоли набрать npm i yo -g
3.  В консоли набрать npm i generator-icarus -g

## Установка генератора
1. Создать пустую диекторию для проекта
2. Зайти туда через консоль
3. Набрать  yo icarus
4. Выбрать необходимые зависимости
5. Нажать Enter


Если верстка будет работать на рабочей станции, то в Gruntfile.js
для connect:options:hostname поменять с 0.0.0.0 на localhost,а если на сервере, то ничего не менять

## Разворачивание сущестующей верстки

1. Зайти в директорию, где будет установлена верстка через консоль
2. Зайти в https://github.org/username/project_html
3. Скопировать .git-адрес
4. Копируем адрес в консоль
5. Нажимаем Enter
6. Зайти в рабочую директорию через консоль
7. Набрать npm i
8. Набрать bower i

## Старт и деплой  верстки

    grunt serve - стартует верстку на 9000 порту
    grunt - тестирует верстку и компилирует её в /dist
    grunt build - сразу компилирует верстку в /dist

###Дополнительные ключи

    --force - работает в связке с serve, нужен, чтобы при ошибках сервер не вылетал
    --verbose - отладочный ключ. Работает со всеми командами. Если вы что-то сделали, но оно не работает. В отладочном режиме, можно посмотреть стек выполнения тасков


## Немного о самой верстке

### Директории и файлы LESS
*box* - функциональный блок, такой как "Один журнал", "сниппет товара" и т.д.  
*elem* - повторяющийся элемент в разных блоках, формах, да где угодно. Примеры элемента "рейтинг", "показать все"  
*form* - форма  
*icons* - иконки на сайта  
*bootstrap* - переопределяется базовый бутстрап. Тут формируется структура и адаптируются элементы основного бутстрапа  
*list* - списки. Списки новостей, вакансий, да всего чего угодно, что можно вывести списком  
*nav* - подраздел списков, очень большой. Поэтому для них выделена отдельная директирия  
*plugins* - стили для разнообразных плагинов на сайте
gallery - галереи. Можно сюда засунуть и слайдер


### Корневые файлы
*styles.less* - тут подключается весь набор стилей. Больше ничего тут не писать
*styles.css* - расходник. Ничего сюда не писать
*styles.css.map* - мапа для стилей
*hacks.less* (отсутствует по умолчанию) - хаки для браузеров. Все хаки писать тут.

### Директория css/system

Если вы, по какой-то причине не стали устанавливать Bootstrap, то будет создана эта директория. В ней будут содежраться:

variables.less - переменные для проекта
mixins.less (пусто)- миксины
structure.less (пусто) - файл для подключения сетки
type.less (пусто) - переопределение базовых тегов
utilities.less (пусто) - дополнительные классы, которые могут понадобиться в верстке. Смотреть Bootstrap.

### Другие директории
Директория "include" - вставляются повторяющиеся элементы, чтобы много раз одно и тоже не писать
Директория "mocks" - эмулируют ответы с сервера

## Настройка символических ссылок

Если верстка делается накомпьютере с Windows, то мои symlinks надо будет удалить, и подставить свои:
```sh
mklink /D bower_components C:\markup\project_html\app\bower_components
mklink /D css C:\markup\project_html\app\css
mklink /D js C:\markup\project_html\app\js
mklink /D img C:\markup\project_html\app\img
```

## ВАЖНО!
Все JS/CSS/HTML плагины устанавливать через bower с ключом --save

Пример установки jQuery:
```sh
bower i jquery --save
```
Все серверные плагины ставить через NPM с ключом --save-dev
Пример установки html-валидатора:
```sh
npm i grunt-html-validation --save-dev
```
## Дополнительная информация

Внутри отдельных модулей box, nav, form и т.д. можете писать, как считаете нужным.
Однако есть свои нюансы:

* классы без префикса вне элемента лежать не могут, это может создать угрозу потерять место, где лежит этот класс
* если элемент встречается на верстке больше одного раза – уводить его в include
* старайтесь по-максимуму уменьшить количество тегов в верстке

В изображениях:
* в c - лежат контентные картинки, в
* в d - картинки для отдельных блоков, форм или навигаций.
* в i - иконки
* в example - картинки которые используются только на верстке для проверки.

## Плагины

### NPM Modules
Плагины используемы в проекте:
* grunt
* grunt-autoprefixer
* grunt-concurrent
* grunt-contrib-clean
* grunt-contrib-concat
* grunt-contrib-connect
* grunt-contrib-copy
* grunt-contrib-cssmin
* grunt-contrib-htmlmin
* grunt-contrib-imagemin
* grunt-contrib-jshint"
* grunt-contrib-less"
* grunt-contrib-uglify
* grunt-contrib-watch
* grunt-html-validation
* grunt-include-replace
* grunt-rev
* grunt-spritesmith
* grunt-usemin
* jshint-stylish
* load-grunt-tasks
* time-grunt

### jQuery Plugins
* [Twitter Bootstrap]
* [normalize.css] - Если не установлен Twitter Bootstrap
* [font-awesome]
* [modernizr]
* [jQuery]

## Todo's

 * Написать тесты
 * Добавить поддержку [AngularJS]
 * Добавить поддержку  [RequireJS]

## Если что-то пошло не так, как надо
Если вы обнаружили ошибку или хотите  добавить пожелание, есть два проверенных способа:

* Завести задачу в Issues
* Если вдруг не отвечаю,написать сразу на zoom81@ya.ru


License
----

MIT


**Free Software, Hell Yeah!**
[Yeoman]: http://yeoman.io/
[nodeJS]:http://nodejs.org
[Twitter Bootstrap]:http://twitter.github.com/bootstrap/
[jQuery]:http://jquery.com
[AngularJS]:http://angularjs.org/
[RequireJS]:http://requirejs.org/
[gruntJS]:http://gruntjs.com/
[normalize.css]: http://necolas.github.io/normalize.css/
[modernizr]:http://modernizr.com/
[font-awesome]: http://fontawesome.io/
