package f;

import java.io.*;

public class matFrac {
	int Filas, Columnas;
	fracciones Matriz[][];
	
	public matFrac(String Archivo) {
		Filas = 0;
		Columnas = 0;
		String line;
		BufferedReader br = null;
		
		try {
			br = new BufferedReader(new FileReader(Archivo));
			line = br.readLine();
			String Codigo = line;

			if (line == null) {
				System.out.println("Archivo vacio");
				br.close();
				return;
			}
			Filas++;
			Columnas = Codigo.split(" ").length;
			line = br.readLine();
			
			while (line != null) {
				Filas++;
				Codigo = Codigo+" "+line;
				line = br.readLine();
			} 
			
			if (Codigo.split(" ").length != (Filas*Columnas)) {
				System.out.println("Faltan elementos en la matriz");
				br.close();
				return;
			}
			
			String [] Tokens = Codigo.split(" ");
			Matriz = new fracciones [Filas][Columnas];
			LlenarMatriz(Tokens);
			
			br.close();
		} catch (IOException e) {
			System.out.println("El Archivo es incorrecto");
		}
	}
	
	public matFrac() {
		
	}
	
	public void LlenarMatriz(String [] Tokens) {
		int Cont = 0;
		int Diagonal, numerador, denominador;
		
		for(int i=0; i<Filas; i++) {
			for(int j=0; j<Columnas; j++) {
				Diagonal = Tokens[Cont].indexOf("/");
				numerador = Integer.parseInt(Tokens[Cont].substring(0, Diagonal));
				denominador = Integer.parseInt(Tokens[Cont].substring(Diagonal+1));
				Matriz[i][j] = new fracciones(numerador,denominador);
				Cont++;
			}
		}
	}
	
	public int getFilas() {
		return Filas;
	}
	
	public int getColumnas() {
		return Columnas;
	}
	
	public fracciones[][] getMatriz() {
		return Matriz;
	}

	public void Suma(String A, String B, String C) {
		matFrac MA = new matFrac(A);
		matFrac MB = new matFrac(B);
		
		if (MA.getFilas() != MB.getFilas() || MA.getColumnas()!= MB.getColumnas()) {
			System.out.println("No es posible sumar las matrices");
			return;
		}
		
		Filas = MA.getFilas();
		Columnas = MB.getColumnas();
		Matriz = new fracciones [Filas][Columnas];
		
		fracciones M1[][] = MA.getMatriz();
		fracciones M2[][] = MB.getMatriz();
		
		
		
		for(int i=0; i<Filas; i++) {
			for(int j=0; j<Columnas; j++) {
				Matriz[i][j] = new fracciones();
				Matriz[i][j] = Matriz[i][j].Suma(M1[i][j], M2[i][j]);
			}
		}
		
		Imprime(M1);
		System.out.println("\n  +\n");
		Imprime(M2);
		System.out.println("\n  =\n");
		Imprime(Matriz);
		
		Escribe(Matriz, C);
	}
	
	public void Imprime(fracciones Matriz[][]) {
		for(int i=0; i<Filas; i++) {
			for(int j=0; j<Columnas; j++) {
				System.out.print(Matriz[i][j].Imprime()+"\t");
			}
			System.out.println();
		}
	}
    public fracciones getFraccion(int i, int j)
    {
        return Matriz[i][j];
    }
	
	public void Escribe(fracciones M[][], String A) {
		try {
			FileWriter FW = new FileWriter(A);
			BufferedWriter BW = new BufferedWriter(FW);
			
			for(int i=0; i<Filas; i++) {
				for(int j=0; j<Columnas; j++) {
				BW.write(Matriz[i][j].getNumerador()+"/"+Matriz[i][j].getDenominador()+" ");	
				}
				BW.write("\n");
			}
			
			BW.flush();
			BW.close();
			
		}catch(Exception e) {
			System.out.println("El archivo destino no existe");
		}
	}
}