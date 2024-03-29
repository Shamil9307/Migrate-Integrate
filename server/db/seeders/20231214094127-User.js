const { hashSync } = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Roles',
      [{ name: 'Admin' }, { name: 'Nastavnik' }, { name: 'Migrant' }],
      {}
    );

    await queryInterface.bulkInsert(
      'Statuses',
      [{ name: 'Approved' }, { name: 'Pending' }, { name: 'Denied' }],
      {}
    );
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Admin',
          hashpass: hashSync('55555', 10),
          email: 'shamil55@mail.com',
          info: 'admin',
          img: 'https://sun9-1.userapi.com/impf/c638831/v638831863/10431/h2X8B4-qUNY.jpg?size=520x0&quality=95&sign=462349b2580f58b79db0899029a144a6',
          roleId: 1,
          number: '89995313355',
          statusId: 2,
        },
        {
          name: 'Александрова Ирина Васильевна',
          hashpass: hashSync('1', 10),
          email: '2@2',
          info: `Возраст: 28 лет,
          Профессия: Инженер-программист,
          Хобби: Фотография, путешествия`,
          img: 'https://www.sostav.ru/images/news/2019/04/11/ym1qcllo.jpg',
          roleId: 2,
          number: '89995313355',
          statusId: 2,
        },
        {
        name: 'Филиппова Елена Викторовна',
        hashpass: hashSync('11111', 10),
        email: 'elena@gmail.com',
        info: `Возраст: 43 лет
        Профессия: Инженер
        Хобби: Лыжи, коньки`,
        img: 'https://img.freepik.com/free-photo/happy-middle-aged-woman-relaxing-outdoors_23-2148979101.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703116800&semt=sph',
        roleId: 2,
        number: '89255553525',
        statusId: 2,
        },
        {
          name: 'Никитин Сергей Александрович',
          hashpass: hashSync('1', 10),
          email: '3@3',
          info: `Возраст: 35 лет
          Профессия: Финансовый аналитик
          Хобби: Теннис, чтение книг`,
          img: 'https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-in-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg',
          roleId: 2,
          number: '89995313355',
          statusId: 2,
        },
        {
          name: 'Петрова Елена Игоревна',
          hashpass: hashSync('1', 10),
          email: '4@4',
          info: `Возраст: 24 года
          Профессия: Студентка медицинского университета
          Хобби: Йога, изучение иностранных языков`,
          img: 'https://s16.stc.yc.kpcdn.net/share/i/12/12779372/wr-960.webp',
          roleId: 2,
          number: '89995313355',
          statusId: 2,
        },
        {
          name: 'Козлов Иван Дмитриевич',
          hashpass: hashSync('1', 10),
          email: '5@5',
          info: `Возраст: 40 лет
          Профессия: Руководитель отдела продаж
          Хобби: Гольф, кулинария`,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBlARNmfW_t6Skqd_EhTUROr3LGPLOjBcNw&usqp=CAU',
          roleId: 2,
          number: '89995313355',
          statusId: 2,
        },
        {
          name: 'Смирнова Анна Алексеевна',
          hashpass: hashSync('1', 10),
          email: '6@6',
          info: `Возраст: 31 год
          Профессия: Журналист
          Хобби: Фотография, театр`,
          img: 'https://im.kommersant.ru/Issues.photo/OGONIOK/2019/020/KMO_109149_00001_1_t218_235015.jpg',
          roleId: 2,
          number: '89995313355',
          statusId: 2,
        },
        {
          name: 'Кузнецов Дмитрий Павлович',
          hashpass: hashSync('1', 10),
          email: '7@7',
          info: `Возраст: 45 лет
          Профессия: Врач-терапевт
          Хобби: Горный туризм, кино`,
          img: 'https://kubnews.ru/upload/resize_cache/webp/iblock/b67/800_533_2/5tepgjj0e0pz4k4ys2riw5oj3nj6fyod.webp',
          roleId: 2,
          number: '89995313355',
          statusId: 3,
        },
        {
          name: 'Лебедева Наталья Александровна',
          hashpass: hashSync('1', 10),
          email: '8@8',
          info: `Возраст: 27 лет
          Профессия: Дизайнер
          Хобби: Рисование, музыка`,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22EYVqBBt_SFTAwmeSQ9zSUwtwqDQdERqjg&usqp=CAU',
          roleId: 2,
          number: '89995313355',
          statusId: 1,
        },
        {
          name: 'Михайлов Андрей Сергеевич',
          hashpass: hashSync('1', 10),
          email: '9@9',
          info: `Возраст: 33 года
          Профессия: Инженер-строитель
          Хобби: Велоспорт, литература`,
          img: 'https://img07.rl0.ru/afisha/e780x-i/daily.afisha.ru/uploads/images/4/26/4261befbcd7549f6ce1066f697b89731.png',
          roleId: 2,
          number: '89995333355',
          statusId: 2,
        },
        {
          name: 'Абдуллаев Алишер Рустамович',
          hashpass: hashSync('1', 10),
          email: '10@10',
          info: `Возраст: 29 лет
          Профессия: Менеджер по маркетингу
          Хобби: Фитнес, кулинария`,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7fzi_bPSae12I2AM9MGUAP0yG3OXdlKoC5Q&usqp=CAU',
          roleId: 3,
          number: '89995313355',
          statusId: 1,
          
        },
        {
          name: 'Ахмедова Нигора Баходировна',
          hashpass: hashSync('1', 10),
          email: '11@11',
          info: `Возраст: 24 года
          Профессия: Студентка медицинского университета
          Хобби: Йога, изучение иностранных языков`,
          img: 'https://dekatop.com/wp-content/uploads/2019/01/people_03.jpg',
          roleId: 3,
          number:'89995313355',
          statusId: 1,
          
          
        },
        {
          name: 'Исматуллаев Баходир Султанович',
          hashpass: hashSync('1', 10),
          email: '12@12',
          info: `Возраст: 38 лет
          Профессия: Адвокат
          Хобби: Гитара, история`,
          img: 'https://img01.rl0.ru/afisha/e780x-i/daily.afisha.ru/uploads/images/b/29/b290b5250ea1ab2d592b14aad6dc9f77.png',
          roleId: 3,
          number:'89995313355',
          statusId: 1,
         
        },
        {
          name: 'Назарова Дилноза Самандаровна',
          hashpass: hashSync('1', 10),
          email: '13@13',
          info: `Возраст: 32 года
          Профессия: Учитель физики
          Хобби: Путешествия, фотография`,
          img: 'https://dekatop.com/wp-content/uploads/2019/01/people_02.jpg',
          roleId: 3,
          number:'89995313355',
          statusId: 1
         
        },
        {
          name: 'Усманов Шерзод Тимурович',
          hashpass: hashSync('1', 10),
          email: '14@14',
          info: `Возраст: 26 лет
          Профессия: Маркетолог
          Хобби: Йога, рисование`,
          img: 'https://wl-adme.cf.tsp.li/resize/728x/jpg/8b1/b4d/b75f57559d9d23cbebe56aa4df.jpg',
          roleId: 3,
          number:'89995313355',
          statusId: 1
        },
      
        {
          name: 'Филипп Киркоров',
          hashpass: hashSync('1', 10),
          email: '15@15',
          info: `Возраст: 26 лет
          Профессия: Маркетолог
          Хобби: Йога, рисование`,
          img: 'https://image2.thematicnews.com/uploads/topics/preview/00/05/89/82/6fb244cff2.jpg',
          roleId: 3,
          number: '89995313355',
          statusId: 3,
        },
        {
          name: 'Саша Грей',
          hashpass: hashSync('1', 10),
          email: '16@16',
          info: `Возраст: 26 лет
          Профессия: Маркетолог
          Хобби: Йога, рисование`,
          img: 'https://uhd.name/uploads/posts/2020-09/1601126420_20-p-aleksandra-grei-72.jpg',
          roleId: 3,
          number: '8999531333355',
          statusId: 2,
        },
        
      ],
      {}
    );
    
    await queryInterface.bulkInsert(
      'Chats',
      [
        { userId: 2, text: 'Добрый день'  },
        { userId: 3, text: 'Привет'  },
        { userId: 4, text: 'Как вы?'  },
        { userId: 5, text: 'Все хорошо'  },

        
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
