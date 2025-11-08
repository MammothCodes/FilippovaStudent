-- Создание таблицы Пациенты
CREATE TABLE Patients (
    patId INT PRIMARY KEY,
    FIO VARCHAR(50) NOT NULL,
    Sex TEXT NOT NULL,
    DateBr DATE NOT NULL,
    Complaints TEXT,
    Diagnoz VARCHAR(50)
);