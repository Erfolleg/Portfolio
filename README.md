# Portfolio
Продвинутый курс по веб-разработке Loftschool, 11/03/2019
Студент: Хисаев Булат

## Скрипты package.json:

| Скрипт | Назначение |
| ------ | ------ |
| dev | Запустит webpack-dev-server с _горячей_ заменой модулей |
| build | Соберет проект для **production** (проект готов к загрузке на сервер) |
| reg | Консольная утилита для регистрации. Использовать перед началом работы над **админ-панелью**. |

#### Чтобы запустить скрипт:
```sh
$ npm run имя_скрипта
```

##### Либо:
```sh
$ yarn имя_скрипта
```

##### Для GH-pages
```sh
 $ git add dist && git commit -m "Initial dist subtree commit"
```
```sh
 $ git subtree push --prefix dist origin gh-pages
```
```sh
запуск селениум сервер
java -jar selenium-server-standalone-3.141.59.jar -host 127.0.0.1 -port 8000