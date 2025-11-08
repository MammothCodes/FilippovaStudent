-- Создание таблицы врачи
CREATE TABLE Doctor (
    DoctorId INTEGER PRIMARY KEY,
    FIODoc TEXT NOT NULL,
    Spesial TEXT,
    ZP DECIMAL(10,2) NOT NULL
  );
