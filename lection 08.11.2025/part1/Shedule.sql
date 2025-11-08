-- Создание таблицы Расписание
CREATE TABLE Schedule (
ScheduleId INT PRIMARY KEY,
ApStart TIME NOT NULL,
ApEnd TIME NOT NULL,
Workdays VARCHAR(50) NOT NULL,
Weekends VARCHAR(50) NOT NULL
);