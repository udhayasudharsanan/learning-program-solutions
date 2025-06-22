class Product {
    int productId;
    String productName;
    String category;

    Product(int id, String name, String cat) {
        productId = id;
        productName = name;
        category = cat;
    }

    public String toString() {
        return "ID: " + productId + ", Name: " + productName + ", Category: " + category;
    }
}

public class EcommerceSearch {
    public static Product linearSearch(Product[] products, String name) {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(name)) return p;
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String name) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(name);
            if (cmp == 0) return products[mid];
            if (cmp < 0) left = mid + 1;
            else right = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Keyboard", "Electronics"),
            new Product(2, "Monitor", "Electronics"),
            new Product(3, "Mouse", "Electronics")
        };
        Product result = linearSearch(products, "Mouse");
        System.out.println("Linear Search: " + result);
        java.util.Arrays.sort(products, (a, b) -> a.productName.compareToIgnoreCase(b.productName));
        result = binarySearch(products, "Mouse");
        System.out.println("Binary Search: " + result);
    }
}
