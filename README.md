Тестовое задание.

Само задание:

Для новостей использовать API https://newsapi.org/.

Мы от тебя ждем react приложение состоящие из 2 экранов,приложение должно быть с адаптивной версткой, в мобильной версии приложения должен присутствовать бургер меню (ниже описаны экраны и их содержание).

1. Лента новостей:
На данном экране должна быть реализована строка поиска с кнопкой "Поиск" новостей по ключевым словам, например, "Apple"
Далее должна быть реализована лента новостей где каждая новость представляет из себя карточку в который есть 1) картинка новости, 2) название новости и заголовок. Так же при нажатие на новость она должна раскрываться в полноразмерный вид, где должна быть так же картинка, название новости и текст самой новости в другом виде, более удобном для чтения и восприятия.

2. О себе
Данный экран должен содержать информацию о себе и твою картинку, оформи экран так, как видишь профиль в своем приложении.

Комментарии по поводу кода:
1. Профиль пользователя не подгружается с сервера , данные хранятся в profile-reducer как initialState.
2. Использовался Ant Design для адаптивной верстки , рассматривалось на width: 420px и десктопной версии.
3. Ответом с сервера в каждой новости была неполная статья , сокращенно колличество символов ( пример: +[3432 chars] ) , на это мне не повлиять.
4. Реализован переход на оффициальный сайт публикации статьи , если вдруг очень захотелось почитать.
5. При клике на интересующую статью открывается modal-window , он же lightbox в реализации Ant Design.
