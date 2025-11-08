-- Вывод рекомендаций пациентам
SELECT p.FIO, d.resipt AS resipt
FROM Patients p
JOIN Diagnoz d ON p.patId = d.patId;