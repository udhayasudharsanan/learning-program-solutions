DECLARE
  CURSOR customer_cursor IS
    SELECT CustomerID, Age, LoanInterestRate FROM Customers;
BEGIN
  FOR cust IN customer_cursor LOOP
    IF cust.Age > 60 THEN
      UPDATE Customers
      SET LoanInterestRate = LoanInterestRate - 1
      WHERE CustomerID = cust.CustomerID;
    END IF;
  END LOOP;
END;
