public class LoggerTest {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();
        logger1.log("This is a test log.");
        System.out.println(logger1 == logger2);
    }
}
