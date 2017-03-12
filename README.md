# Cайт для Физико-Технического Института КФУ
## Рекомендуемые версии
* Node.js - v7.5.0
* MongoDB - v3.4.1 (whithout SSL).

## Запуск

Для запуска сервера для разработки - `npm run dev`. 

Для запуска в продакшн - `npm run pro`. 

Для остановки в продакшн - `npm run prostop`. 


_P.S. Не забываем про `npm install`._
## Установка MongoDB для Windows
* Качаем с [офф сайта](https://www.mongodb.com)
* Устанавливаем в любой удобный путь, например ***С:\MongoDB***
* Заходим в директорию в которую установили и создаем или копируем туда файл с названием ***mongod.cfg*** с таким содержимым
`dbpath=C:\(любое название папки или путь)`
* Создаем два ярлыка для ***mongo.exe*** и ***mongod.exe***
* Для ярлыка ***mongod.exe*** открываем свойства и в поле "Обьект" вписываем  
`C:\MongoDB\Server\3.4\bin\mongod.exe --config C:\MongoDB\Server\3.4\bin\mongod.cfg`
* После чего запускаем ярлык ***mongod.cfg*** и все БД запущена.

_P.S. Не забываем создать папку которую указали в **mongod.cfg**._

## Установка MongoDB для Mac
* Качаем с [офф сайта](https://www.mongodb.com)
* Распаковываем в любой удобный путь, например ***/lib/mongodb***
* Создаем папку в которой будут храниться файлы БД, например ***/tmp/filesMongoDB***
* И теперь для запуска используем такую команду `mongod --dbpath /tmp/filesMongoDB`
* База запущена.

_P.S. Команду запуска базы можно забиндить как-то, точно не помню как, но можно сделать что-то типа   
`mongod start` и она на самом деле будет выполнять команду `mongod --dbpath /tmp/filesMongoDB`._
