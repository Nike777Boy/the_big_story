const game = {
    characters: {
        arslan: { name: 'Арслан' },
        darika: { name: 'Дарика' }
    },
    
    scenes: [
        // Сцена 1: Встреча
        {
            background: 'images/kabinet1geeks.jpg',
            character: 'darika',
            name: 'Дарика',
            text: 'Привет! Я Дарика. *краснеет* Ты новенький преподаватель?',
            position: 'right',
            animation: 'fadeIn'
        },
        {
            background: 'images/kabinet1geeks.jpg',
            character: 'arslan',
            name: 'Арслан',
            text: '*смущенно* Нет, я тоже студент. Просто перевелся с другого курса.',
            position: 'left',
            animation: 'fadeIn'
        },
        // Сцена 2: Влюбленность
        {
            background: 'https://i.pinimg.com/originals/8b/43/a3/8b43a3fdb4001e396c686b3d3b40e0c4.jpg', // Уютный класс
            character: 'darika',
            name: 'Дарика',
            text: '*с блеском в глазах* Арслан, ты так красиво пишешь код... Может, поможешь мне с домашкой?',
            position: 'right',
            animation: 'heartBeat'
        },
        {
            background: 'https://i.pinimg.com/originals/8b/43/a3/8b43a3fdb4001e396c686b3d3b40e0c4.jpg',
            character: 'arslan',
            name: 'Арслан',
            text: '*вздыхает* Дарика, это уже пятый раз за сегодня... Давай ты сама попробуешь?',
            position: 'left',
            filter: 'cold'
        },
        // Новая сцена: Разочарование
        {
            background: 'https://i.pinimg.com/originals/3d/74/50/3d7450e5c4a6f50d78c525abb51f6b4e.jpg', // Дождливый вечер
            character: 'darika',
            name: 'Дарика',
            text: '*про себя, грустно* Он совсем не замечает моих чувств...',
            position: 'right',
            filter: 'cold'
        },
        // Сцена: Публичное унижение
        {
            background: 'images/kabinet1geeks.jpg',
            character: 'darika',
            name: 'Дарика',
            text: 'Арслан, я решила эту задачу! Можеш проверить?',
            position: 'right',
            animation: 'fadeIn'
        },
        {
            background: 'images/kabinet1geeks.jpg',
            character: 'arslan',
            name: 'Арслан',
            text: '*раздраженно* Дарика, это же элементарно! Ты даже переменные неправильно назвала...',
            position: 'left',
            filter: 'cold'
        },
        {
            background: 'images/kabinet1geeks.jpg',
            character: 'darika',
            name: 'Дарика',
            text: '*сдерживая слезы* Извини... я просто хотела...',
            position: 'right',
            filter: 'sad'
        },
        // Сцена: Одиночество
        {
            background: 'images/kabinet2geeks.jpg',
            character: 'darika',
            name: 'Рассказчик',
            text: 'Дарика оставалась допоздна в офисе, практикуясь в программировании...',
            position: 'right',
            filter: 'dramatic'
        },
        // Сцена: Упорство
        {
            background: 'images/kaworkingGeeks.jpg',
            character: 'darika',
            name: 'Дарика',
            text: '*про себя* Я докажу ему, что могу стать хорошим программистом...',
            position: 'right',
            animation: 'fadeIn'
        },
        // Сцена: Прогресс
        {
            background: 'images/kabinet2geeks.jpg',
            character: 'darika',
            name: 'Рассказчик',
            text: 'День за днем она совершенствовала свои навыки, несмотря на насмешки...',
            position: 'right',
            filter: 'dramatic'
        },
        // Сцена: Переломный момент
        {
            background: 'images/kuhnyageeks.jpg',
            character: 'both',
            name: 'Рассказчик',
            text: 'Но однажды Арслан увидел, как Дарика терпеливо объясняет новичкам основы JavaScript...',
            animation: 'fadeIn'
        },
        {
            background: 'images/kuhnyageeks.jpg',
            character: 'arslan',
            name: 'Арслан',
            text: '*удивленно* Я и не знал, что ты так хорошо разбираешься в JavaScript...',
            position: 'left'
        },
        // Сцена: Признание
        {
            background: 'https://i.pinimg.com/originals/2a/43/1c/2a431c5b3f15af1f432853f63a0f3519.jpg', // Романтичный закат
            character: 'darika',
            name: 'Дарика',
            text: '*смущенно* Я... я много практиковалась. Хотела произвести на тебя впечатление.',
            position: 'right',
            animation: 'heartBeat'
        },
        // Сцена: Первые шаги
        {
            background: 'images/kabinet1geeks.jpg',
            character: 'both',
            name: 'Рассказчик',
            text: 'Теперь они вместе работали над проектами, и Арслан увидел в Дарике не просто влюбленную девушку...',
            animation: 'fadeIn'
        },
        {
            background: 'images/kabinet1geeks.jpg',
            character: 'arslan',
            name: 'Арслан',
            text: '*с уважением* Твое решение даже лучше моего. Я... извини за то, что раньше недооценивал тебя.',
            position: 'left',
            filter: 'warm'
        },
        // Сцена: Поддержка
        {
            background: 'images/kabinet2geeks.jpg',
            character: 'darika',
            name: 'Дарика',
            text: '*нервничая* У меня сегодня первое собеседование на позицию джуниора...',
            position: 'right'
        },
        {
            background: 'images/kabinet2geeks.jpg',
            character: 'arslan',
            name: 'Арслан',
            text: 'Ты справишься! Я помогу тебе подготовиться. Давай порешаем задачки вместе?',
            position: 'left',
            filter: 'warm'
        },
        // Сцена: Успех
        {
            background: 'images/kaworkingGeeks.jpg',
            character: 'darika',
            name: 'Дарика',
            text: '*радостно* Арслан! Меня взяли! Я прошла испытательный срок!',
            position: 'right',
            animation: 'bounce'
        },
        {
            background: 'images/kaworkingGeeks.jpg',
            character: 'arslan',
            name: 'Арслан',
            text: '*с гордостью* Я знал, что ты сможешь. Ты так выросла как разработчик...',
            position: 'left'
        },
        // Сцена: Осознание
        {
            background: 'images/parkgeeks.jpg',
            character: 'arslan',
            name: 'Арслан',
            text: '*про себя* Кажется... я влюбился не только в её упорство, но и в её улыбку...',
            position: 'left',
            filter: 'dreamy'
        },
        // Сцена 3: Свидания
        {
            background: 'images/kaworkingGeeks.jpg',
            character: 'both',
            name: 'Рассказчик',
            text: 'Они начали проводить время вместе...',
            animation: 'fadeIn',
            filter: 'warm',
            position: {
                arslan: '30%',
                darika: '60%'
            }
        },
        // Сцена 4: Поцелуй и кружение
        {
            background: 'images/parkgeeks.jpg',
            character: 'both',
            name: 'Рассказчик',
            text: 'Их любовь кружила их в романтичном танце...',
            animation: 'spinAround',
            filter: 'dreamy'
        },
        {
            background: 'images/parkgeeks.jpg',
            character: 'both',
            name: 'Рассказчик',
            text: 'И в это момент они поняли - они соданы друг для друга.',
            animation: 'romantic',
            filter: 'dreamy'
        },
        // Сцена 5: Семья
        {
            background: 'images/domgeeks.jpg',
            character: 'family',
            name: 'Рассказчик',
            text: 'Через 9 месяцев их семья пополнилась тремя прекрасными детьми: Дагдаг, Дагика и Дагдаг',
            animation: 'familyGather',
            filter: 'warm'
        },
        // Добавляем сцены после того, как они начали встречаться
        {
            background: 'images/kabinet1geeks.jpg',
            character: 'arslan',
            name: 'Арслан',
            text: '*злобно* Почему ты помогаешь другим студентам? Ты что, заигрываешь с ними?',
            position: 'left',
            filter: 'cold'
        },
        {
            background: 'images/kabinet1geeks.jpg',
            character: 'darika',
            name: 'Дарика',
            text: '*испуганно* Нет, что ты... Я просто помогаю им с учебой...',
            position: 'right',
            filter: 'sad'
        },
        // Сцена: Контроль
        {
            background: 'images/kabinet2geeks.jpg',
            character: 'arslan',
            name: 'Арслан',
            text: 'Уволься с работы. Я не хочу, чтобы ты общалась с другими программистами.',
            position: 'left',
            filter: 'dramatic'
        },
        {
            background: 'images/kabinet2geeks.jpg',
            character: 'darika',
            name: 'Дарика',
            text: 'Но... как же моя карьера? Я так долго к этому шла...',
            position: 'right',
            filter: 'sad'
        },
        // Сцена: Финансовый контроль
        {
            background: 'images/kaworkingGeeks.jpg',
            character: 'arslan',
            name: 'Арслан',
            text: 'Отдай мне свою зарплату. Я лучше знаю, как распоряжаться деньгами.',
            position: 'left',
            filter: 'cold'
        },
        // Сцена: Изоляция
        {
            background: 'images/parkgeeks.jpg',
            character: 'arslan',
            name: 'Арслан',
            text: 'Поедем в горы. Там нам никто не будет мать. И да, отдай свой телефон.',
            position: 'left',
            filter: 'dramatic'
        },
        {
            background: 'images/parkgeeks.jpg',
            character: 'arslan',
            name: 'Арслан',
            text: '*протягивает рацию* Вот, держи. Так я буду знать, где ты и с кем разговариваешь.',
            position: 'left',
            filter: 'cold'
        },
        {
            background: 'images/parkgeeks.jpg',
            character: 'darika',
            name: 'Дарика',
            text: '*со слезами* Арслан, пожалуйста... Я не хочу в горы...',
            position: 'right',
            filter: 'sad'
        },
        // Сцена: Рассказчик
        {
            background: 'images/parkgeeks.jpg',
            character: 'none',
            name: 'Рассказчик',
            text: 'Но Дарика нашла в себе силы и убежала от Арслана, вернувшись к своей работе и друзьям...',
            filter: 'dramatic'
        },
        // Сцена: Признание Дарики
        {
            background: 'images/kabinet1geeks.jpg',
            character: 'darika',
            name: 'Дарика',
            text: '*со слезами* Я все это время была терпилой... Позволяла ему контролировать мою жизнь...',
            position: 'right',
            filter: 'sad'
        },
        {
            background: 'images/kabinet1geeks.jpg',
            character: 'darika',
            name: 'Дарика',
            text: 'Девочки, никогда не позволяйте мужчинам так с собой обращаться! Любите себя!',
            position: 'right',
            filter: 'dramatic'
        },
        // Сцена: Финальное напутствие
        {
            background: 'images/kaworkingGeeks.jpg',
            character: 'none',
            name: 'Рассказчик',
            text: 'Помните: настоящая любовь - это уважение, поддержка и свобода быть собой.',
            filter: 'dramatic'
        },
        // Добавляем новые сцены перед финальным напутствием
        {
            background: 'images/domgeeks.jpg',
            character: 'none',
            name: 'Рассказчик',
            text: 'Дети не выжили из-за отсутствия еды и заботы...',
            filter: 'horror'
        },
        {
            background: 'images/kabinet1geeks.jpg',
            character: 'arslan',
            name: 'Рассказчик',
            text: 'А Арслан был приговорен к тюремному заключению за домашнее насилие...',
            filter: 'prison',
            showPrisonBars: true
        }
    ],
    
    currentScene: 0,
    
    init() {
        document.addEventListener('click', () => this.nextScene());
        this.showScene();
    },
    
    showScene() {
        const scene = this.scenes[this.currentScene];
        
        // Очищаем предыдущую сцену
        document.querySelector('.characters').innerHTML = '';
        document.querySelector('.dialog-box').style.display = 'none';
        
        // Обновляем фон
        const background = document.querySelector('.background');
        if (scene.background) {
            background.style.backgroundImage = `url(${scene.background})`;
            background.style.backgroundColor = 'transparent';
        } else {
            background.style.backgroundImage = 'none';
            background.style.backgroundColor = '#ffb6c1'; // Розовый фон если нет изображения
        }
        
        // Проверяем, есть ли персонажи в сцене
        const hasCharacters = scene.character && scene.character !== 'none';
        
        if (hasCharacters) {
            // Если есть персонажи, показываем диалоговое окно
            document.querySelector('.dialog-box').style.display = 'block';
            document.querySelector('.character-name').textContent = scene.name;
            document.querySelector('.dialog-text').textContent = scene.text;
            this.animateCharacters(scene);
        } else {
            // Если нет персонжей, показываем текст по центру
            const centerText = document.createElement('div');
            centerText.className = 'center-text narrator-text';
            centerText.textContent = scene.text;
            document.querySelector('.game-container').appendChild(centerText);
        }
        
        // Добавляем или удаляем тюремную решетку
        const existingBars = document.querySelector('.prison-bars');
        if (existingBars) {
            existingBars.remove();
        }
        
        if (scene.showPrisonBars) {
            const prisonBars = document.createElement('div');
            prisonBars.className = 'prison-bars';
            document.querySelector('.game-container').appendChild(prisonBars);
        }
        
        // Остальной код без изменений...
        if (scene.filter) {
            Caman(background, function() {
                switch(scene.filter) {
                    case 'warm':
                        this.brightness(10).warmth(20).render();
                        break;
                    case 'cold':
                        this.brightness(-10).coolness(20).saturation(-10).render();
                        break;
                    case 'dreamy':
                        this.brightness(10).saturation(-20).gamma(1.2).render();
                        break;
                    case 'dramatic':
                        this.brightness(-20)
                            .contrast(20)
                            .saturation(-20)
                            .vignette('50%')
                            .render();
                        break;
                    case 'sad':
                        this.brightness(-15).saturation(-50).contrast(5).render();
                        break;
                    case 'horror':
                        this.brightness(-30)
                            .contrast(30)
                            .saturation(-50)
                            .vignette('80%')
                            .render();
                        break;
                }
            });
        }
        
        // Если это сцена поцелуя, добавляем романтичный фн
        if (this.currentScene === 6) {
            this.createRomanticBackground();
            this.startHeartAnimation();
        } else {
            const romanticBg = document.querySelector('.romantic-background');
            if (romanticBg) romanticBg.remove();
        }
    },
    
    animateCharacters(scene) {
        const characters = document.querySelector('.characters');
        characters.innerHTML = '';

        if (scene.character === 'both' && !scene.animation.includes('spinAround')) {
            // Добавляем обоих персонажей рядом друг с другом
            const arslan = document.createElement('div');
            const darika = document.createElement('div');
            
            arslan.className = `character arslan ${scene.animation}`;
            darika.className = `character darika ${scene.animation}`;
            
            arslan.style.left = scene.position?.arslan || '30%';
            darika.style.left = scene.position?.darika || '60%';
            
            characters.appendChild(arslan);
            characters.appendChild(darika);
        } else if (scene.animation === 'spinAround') {
            // Создаем большое сердце в центе
            const bigHeart = document.createElement('div');
            bigHeart.className = 'heart big-heart';
            characters.appendChild(bigHeart);

            // Добавляем персонажей с анимацией кружения
            const arslan = document.createElement('div');
            const darika = document.createElement('div');
            
            arslan.className = 'character arslan spinning';
            darika.className = 'character darika spinning';
            
            // Добавляем анимацию кружения с разным направлением
            arslan.style.animation = 'spinAround 8s linear infinite';
            darika.style.animation = 'spinAround 8s linear infinite reverse';
            
            // Устанавливаем начальные позиции (противоположные стороны)
            darika.style.animationDelay = '4s'; // Половина времеи анимации
            
            characters.appendChild(arslan);
            characters.appendChild(darika);
        } else if (scene.character === 'family') {
            // Добавляем всю семью
            const familyMembers = [
                { name: 'arslan', delay: 0, position: 15 },
                { name: 'darika', delay: 0.2, position: 35 },
                { name: 'dagdag', delay: 0.4, position: 55 },
                { name: 'dagika', delay: 0.6, position: 65 },
                { name: 'dagdag', delay: 0.8, position: 75 }
            ];
            
            familyMembers.forEach((member) => {
                const div = document.createElement('div');
                div.className = `character ${member.name} child-appear`;
                div.style.left = `${member.position}%`;
                div.style.animationDelay = `${member.delay}s`;
                characters.appendChild(div);
            });
        } else {
            // Добавляем одного персонажа
            const char = document.createElement('div');
            char.className = `character ${scene.character} ${scene.animation}`;
            char.style.left = scene.position === 'left' ? '30%' : '60%';
            characters.appendChild(char);
        }
    },
    
    startHeartAnimation() {
        const container = document.querySelector('.game-container');
        
        // Создаем сердечки каждые 200мс (чаще чем раньше)
        const heartInterval = setInterval(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            
            // Слу��айное положение сердека между прсонажами
            const left = 45 + Math.random() * 10; // 45-55% от ширины (между персонажами)
            const top = 30 + Math.random() * 20; // 30-50% от высоы
            heart.style.left = `${left}%`;
            heart.style.top = `${top}%`;
            
            // Случайный размер сердчка
            const size = 15 + Math.random() * 10;
            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;
            
            // Случайное начальное вращение
            const rotation = Math.random() * 360;
            heart.style.transform = `rotate(${rotation}deg)`;
            
            // Случайная длитеьность анимаии
            const duration = 1 + Math.random() * 1.5;
            heart.style.animation = `floatingHeart ${duration}s ease-out forwards`;
            
            container.appendChild(heart);
            
            // Удалм сердечко пос завершения анимации
            setTimeout(() => {
                heart.remove();
            }, duration * 1000);
        }, 200);
        
        this.currentHeartInterval = heartInterval;
    },
    
    nextScene() {
        // Удаляем центральный текст при переходе к следующей сцене
        const centerText = document.querySelector('.center-text');
        if (centerText) {
            centerText.remove();
        }
        
        if (this.currentHeartInterval) {
            clearInterval(this.currentHeartInterval);
            this.currentHeartInterval = null;
        }
        
        if (this.currentScene < this.scenes.length - 1) {
            this.currentScene++;
            this.showScene();
        }
    },
    
    // Добавляем новый метод для создания романтичного фона
    createRomanticBackground() {
        const container = document.querySelector('.game-container');
        
        // Добавляем градиентный фон
        const romanticBg = document.createElement('div');
        romanticBg.className = 'romantic-background';
        container.appendChild(romanticBg);
        
        // Создае фоновые сердечки
        const createBackgroundHeart = () => {
            const heart = document.createElement('div');
            heart.className = 'background-heart';
            
            // Случайное положение п горизонтали
            const left = Math.random() * 100;
            heart.style.left = `${left}%`;
            
            // Случайный размер
            const size = 20 + Math.random() * 30;
            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;
            
            // Случайная длительность анимации
            const duration = 4 + Math.random() * 4;
            heart.style.animation = `floatingBackgroundHeart ${duration}s linear forwards`;
            
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), duration * 1000);
        };
        
        // Создаем блики
        const createSparkle = () => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = `${Math.random() * 100}%`;
            sparkle.style.top = `${Math.random() * 100}%`;
            sparkle.style.animationDelay = `${Math.random() * 2}s`;
            container.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 2000);
        };
        
        // Запускаем генерацию фоновых элементов
        setInterval(createBackgroundHeart, 1000);
        setInterval(createSparkle, 500);
    }
};

window.onload = () => {
    game.init();
    createGlobalRomanticBackground(); // Добавляем романтичный фон для всего сайта
};

// Добавляем функци для создания глобального романтичного фона
function createGlobalRomanticBackground() {
    const body = document.body;
    
    // Добавляем градиентный фон на весь сайт
    document.body.style.background = 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)';
    
    // Создаем контейнер для фоновых анимаций
    const bgContainer = document.createElement('div');
    bgContainer.className = 'global-background';
    document.body.prepend(bgContainer);
    
    // Функции создания еементов остаются теми же
    const createBackgroundHeart = () => {
        const heart = document.createElement('div');
        heart.className = 'background-heart';
        
        const left = Math.random() * 100;
        heart.style.left = `${left}%`;
        
        const size = 20 + Math.random() * 30;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        
        const duration = 4 + Math.random() * 4;
        heart.style.animation = `floatingBackgroundHeart ${duration}s linear forwards`;
        
        bgContainer.appendChild(heart);
        
        setTimeout(() => heart.remove(), duration * 1000);
    };
    
    const createSparkle = () => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 2}s`;
        bgContainer.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 2000);
    };
    
    // Запускаем гнерацию фоновых элементов
    setInterval(createBackgroundHeart, 1000);
    setInterval(createSparkle, 500);
} 