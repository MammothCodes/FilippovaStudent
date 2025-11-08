-- Создание таблицы диагноз
CREATE TABLE Diagnoz (
    DiagnozId INTEGER PRIMARY KEY,
    patId INT NOT NULL,
    DiagnozName TEXT NOT NULL,
    resipt TEXT,
    data_p DATE
);