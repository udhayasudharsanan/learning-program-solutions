public class FinancialForecasting {
    public static double forecast(int year, double[] history, double growthRate) {
        if (year == 0) return history[history.length - 1];
        return forecast(year - 1, history, growthRate) * (1 + growthRate);
    }

    public static void main(String[] args) {
        double[] pastValues = {1000, 1100, 1210};
        double rate = 0.10;
        double futureValue = forecast(3, pastValues, rate);
        System.out.printf("Forecast after 3 years: %.2f\n", futureValue);
    }
}
