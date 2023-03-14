package f;
public class fracciones
{
    int numerador, denominador; 
    public fracciones(int numerador,int denominador)
    {
        
        
        this.numerador = numerador;
        if(valida(denominador))
            this.denominador = denominador;
        else
            this.denominador = 1;
        
        Simplifica();
    }

    public fracciones()
    {
        numerador = 0;
        denominador = 1;
    }

    public int getNumerador(){
        return numerador;
    }

    public int getDenominador(){
        return denominador;
    }

    private boolean valida(int denominador)
    {
        if (denominador <= 0)
            return false;
        else
            return true;
        
    }

    public void Simplifica(){
        int Divisor = MCD(numerador, denominador);
        numerador = numerador/Divisor;
        denominador = denominador/Divisor;
    }

    private int MCD(int p, int q) {
        if (q == 0) return p;
        else return MCD(q, p % q);
    }

    public String Imprime() {

	    return (numerador +"/"+denominador);

    }

    public fracciones Suma(fracciones fraccion1, fracciones fraccion2) {
        int tempNum, tempDen;
        tempNum = (fraccion1.getNumerador() * fraccion2.getDenominador())
                + (fraccion1.getDenominador() * fraccion2.getNumerador());
        tempDen = fraccion1.getDenominador() * fraccion2.getDenominador();
        fracciones resultado = new fracciones(tempNum, tempDen);
        resultado.Simplifica();
        return resultado;
    }

    public fracciones Multiplicar(fracciones f1, fracciones f2){
        int numerador = 0;
        int denominador = 0;
    
        numerador = (f1.getNumerador() * f2.getNumerador());
        denominador = (f1.getDenominador() * f2.getDenominador());
    
        fracciones resultado = new fracciones(numerador,denominador);
        resultado.Simplifica();
        return resultado;
    }
}