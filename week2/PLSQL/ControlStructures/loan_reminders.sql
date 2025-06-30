DECLARE
  CURSOR loan_cursor IS
    SELECT CustomerID, DueDate FROM Loans
    WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
  FOR loan IN loan_cursor LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan payment due for Customer ' || loan.CustomerID);
  END LOOP;
END;
