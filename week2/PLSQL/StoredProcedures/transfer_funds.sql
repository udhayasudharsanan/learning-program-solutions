CREATE OR REPLACE PROCEDURE TransferFunds(
  from_account IN NUMBER,
  to_account IN NUMBER,
  amount IN NUMBER
) IS
  current_balance NUMBER;
BEGIN
  SELECT Balance INTO current_balance FROM Accounts WHERE AccountID = from_account;
  IF current_balance >= amount THEN
    UPDATE Accounts SET Balance = Balance - amount WHERE AccountID = from_account;
    UPDATE Accounts SET Balance = Balance + amount WHERE AccountID = to_account;
  ELSE
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds');
  END IF;
END;
