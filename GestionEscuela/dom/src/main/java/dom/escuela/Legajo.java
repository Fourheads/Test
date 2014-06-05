package dom.escuela;

import java.util.List;


public class Legajo {

	private int numerodeLegajo;
	public int getNumerodeLegajo() {
		return numerodeLegajo;
	}
	public void setNumerodeLegajo(int numerodeLegajo) {
		this.numerodeLegajo = numerodeLegajo;
	}
	
	
	
	private List<Tarjeta> tarjeta;	
	public List<Tarjeta> getTarjeta() {
		return tarjeta;
	}
	public void setTarjeta(List<Tarjeta> tarjeta) {
		this.tarjeta = tarjeta;
	}
}
