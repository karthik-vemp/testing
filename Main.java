import spark.Request;
import spark.Response;
import spark.Route;
import static spark.Spark.*;

public class Main {
    public static void main(String[] args) {
        port(3000); // Set the port for your application

        // Define a route for handling form submission
        post("/register", new Route() {
            @Override
            public Object handle(Request request, Response response) throws Exception {
                // Get user input from the form
                String username = request.queryParams("username");
                String password = request.queryParams("password");

                // Insert user into the database (use your database handling logic)
                // For simplicity, we'll just print the data to the console
                System.out.println("Received registration request:");
                System.out.println("Username: " + username);
                System.out.println("Password: " + password);

                // You can provide a response to the frontend
                return "User registered successfully";
            }
        });

        // Serve HTML file
        staticFiles.location("/public");
    }
}
