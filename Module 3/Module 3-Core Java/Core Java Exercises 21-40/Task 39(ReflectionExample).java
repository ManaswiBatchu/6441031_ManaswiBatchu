import java.lang.reflect.Method;

public class ReflectionExample {
    public void sayHello(String name) {
        System.out.println("Hello, " + name);
    }

    public static void main(String[] args) throws Exception {
        Class<?> clazz = Class.forName("ReflectionExample");
        Object obj = clazz.getDeclaredConstructor().newInstance();

        Method[] methods = clazz.getDeclaredMethods();
        System.out.println("Methods:");
        for (Method m : methods) {
            System.out.println(m.getName());
        }

        Method sayHello = clazz.getDeclaredMethod("sayHello", String.class);
        sayHello.invoke(obj, "Manswi");
    }
}
