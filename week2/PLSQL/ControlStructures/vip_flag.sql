DECLARE
  CURSOR customer_cursor IS
    SELECT CustomerID, Balance FROM Customers;
BEGIN
  FOR cust IN customer_cursor LOOP
    IF cust.Balance > 10000 THEN
      UPDATE Customers
      SET IsVIP = 'TRUE'
      WHERE CustomerID = cust.CustomerID;
    END IF;
  END LOOP;
END;
