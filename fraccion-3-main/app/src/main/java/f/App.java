
package f;

public class App {
   

    public static void main(String[] args) 
    {
      fracciones frac1 = new fracciones(2,4);
      fracciones frac2 = new fracciones(10,15);
      fracciones frac3 = new fracciones();


    fracciones prueba1 = new fracciones(2, 6);
    fracciones prueba2 = new fracciones(2, 4);
    fracciones resultado = new fracciones();
    resultado = resultado.Suma(prueba1, prueba2);
    System.out.println(prueba1.Imprime() + " + " + prueba2.Imprime() + " = " + resultado.Imprime());
    System.out.println();

    fracciones resultado2 = new fracciones();
    resultado2 = resultado2.Multiplicar(prueba1, prueba2);
    System.out.println(prueba1.Imprime() + " x " + prueba2.Imprime() + " = " + resultado2.Imprime());
    System.out.println();

    System.out.println("Sumando matrices de los archivos Matriz1 y Matriz2");
    matFrac R = new matFrac();
		R.Suma("Matriz1.txt", "Matriz2.txt", "Matriz3.txt");
    }
}
